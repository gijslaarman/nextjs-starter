import fs from 'node:fs';
import path from 'node:path';

import { type HTMLElement, parse } from 'node-html-parser';
import { optimize as SvgoOptimize } from 'svgo';

// Template converters
import svgoConfig from './svgo.config';
import { iconTemplate } from './templates/icon-template';
import { spriteTemplate } from './templates/sprite-template';

const SVG_INPUT_DIR = path.resolve(process.cwd(), 'icons');
const OUTPUT_DIR = path.resolve(process.cwd(), 'src/components/icons');
const PUBLIC_FOLDER = path.resolve(process.cwd(), 'public');
const ICON_COMPONENTS_FOLDER = path.join(OUTPUT_DIR, 'components');

const symbols: string[] = [];
const iconIds: string[] = [];

function processSvgFile(file: string) {
  if (!file.endsWith('.svg')) return;

  const id = file.replace('.svg', '');
  const fileData = fs.readFileSync(path.resolve(SVG_INPUT_DIR, file), 'utf-8');
  const optimizedSvg = SvgoOptimize(fileData, svgoConfig).data;
  const svgElement = parse(optimizedSvg).querySelector('svg');

  if (!svgElement) return;

  generateIconComponent(id, svgElement);
  const symbolElement = createSymbolElement(id, svgElement);

  iconIds.push(id);
  symbols.push(symbolElement.toString());
}

function generateIconComponent(id: string, svgElement: HTMLElement) {
  const iconPath = path.join(ICON_COMPONENTS_FOLDER, `${id}.tsx`);
  const iconContent = iconTemplate(id, svgElement);
  fs.writeFileSync(iconPath, iconContent);
}

function createSymbolElement(id: string, svgElement: HTMLElement): HTMLElement {
  const symbolElement = parse('<symbol/>').querySelector('symbol');

  if (!symbolElement) {
    throw new Error('Could not create symbol element, maybe try again?');
  }

  svgElement.childNodes.forEach((child) => symbolElement.appendChild(child));
  symbolElement.setAttribute('id', id);

  if (svgElement.attributes.viewBox) {
    symbolElement.setAttribute('viewBox', svgElement.attributes.viewBox);
  }

  return symbolElement;
}

function writeSpriteFile() {
  // As TSX for storybook f.e.
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'sprite.tsx'),
    spriteTemplate(symbols, { isJsx: true }),
  );
  // As SVG for web
  fs.writeFileSync(
    path.join(PUBLIC_FOLDER, 'icons.svg'),
    spriteTemplate(symbols, { isJsx: false }),
  );
}

function writeIconsTypeFile() {
  const typeFilePath = path.join(OUTPUT_DIR, 'index.tsx');
  const typeFileContent = `
    export const iconList = [${iconIds.map((name) => `'${name}'`).join(', ')}] as const\n
    export type IconName = (typeof iconList)[number]\n
  `;
  fs.writeFileSync(typeFilePath, typeFileContent);
}

function writeIconsIndexFile() {
  const indexPath = path.join(ICON_COMPONENTS_FOLDER, 'index.ts');
  const indexContent = iconIds
    .map((name) => `export * from './${name}'`)
    .join('\n');
  fs.writeFileSync(indexPath, indexContent);
}

function main() {
  // Delete files icon components folder
  fs.readdirSync(ICON_COMPONENTS_FOLDER).forEach((file) => {
    const filePath = path.join(ICON_COMPONENTS_FOLDER, file);
    fs.unlinkSync(filePath);
  });

  fs.readdirSync(SVG_INPUT_DIR).forEach(processSvgFile);

  writeSpriteFile();
  writeIconsTypeFile();
  writeIconsIndexFile();
}

main();
