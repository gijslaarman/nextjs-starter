import { pascalCase } from 'change-case';
import { type HTMLElement } from 'node-html-parser';

export function iconTemplate(id: string, svg: HTMLElement) {
  const componentName = `${pascalCase(id)}Icon`;

  // Add children to the new react-svg element
  const innerSvg = svg.childNodes.map((child) => child.toString()).join('');
  const viewbox = svg.attributes.viewBox;

  return /* html */ `
import React, { forwardRef, type SVGProps } from 'react';

export const ${componentName} = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>((props, ref) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" ${viewbox ? `viewBox="${viewbox}"` : ''} fill="none" ref={ref}>
      ${innerSvg}
    </svg>
  ))

${componentName}.displayName = '${componentName}';
  `.trim();
}
