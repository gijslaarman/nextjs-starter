import { example } from './src/css/functions/example.mjs';

const functions = { example };
export const functionNames = Object.keys(functions);

export default {
  plugins: {
    stylelint: {},
    '@csstools/postcss-global-data': { files: ['./src/css/custom-media.css'] },
    'postcss-mixins': { mixinsFiles: ['./src/css/{mixins/,mixins/**}'] },
    'postcss-functions': { functions },
    'postcss-preset-env': {
      autoprefixer: { grid: false },
      stage: 2,
      features: {
        clamp: false,
        'logical-properties-and-values': false,
        'media-query-ranges': {
          preserve: true,
        },
        'custom-properties': false,
      },
    },
    'css-declaration-sorter': {
      order: 'smacss',
    },
    'postcss-discard-duplicates': {},
  },
};
