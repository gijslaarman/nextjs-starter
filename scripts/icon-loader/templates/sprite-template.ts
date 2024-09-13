interface Options {
  isJsx?: boolean;
}

export function spriteTemplate(
  symbols: string[],
  options: Options | undefined,
) {
  if (options?.isJsx) {
    return `
  // prettier-ignore
  export const Sprite = () => <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>${symbols.join('')}</svg>\n
  `.trim();
  }

  // Default to SVG
  return `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">${symbols.join('')}</svg>`;
}
