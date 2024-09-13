import type { Config } from 'svgo';

const svgoConfig: Config = {
  plugins: [
    {
      name: 'convertColors',
      params: {
        currentColor: true,
      },
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          // viewBox is required to resize SVGs with CSS.
          // @see https://github.com/svg/svgo/issues/1128
          removeViewBox: false,
        },
      },
    },
    'removeDimensions',
    'removeUselessDefs',
    'removeUnusedNS',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(mask|maskUnits|mask-type|maskContentUnits|maskTransform)',
      },
    },
    'removeHiddenElems',
    'removeEmptyContainers',
    'collapseGroups',
  ],
  js2svg: {
    pretty: true,
  },
};

export default svgoConfig;
