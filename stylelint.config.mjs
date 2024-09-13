import { functionNames } from './postcss.config.mjs';

const BEMPattern =
  /^.[a-z]?(?:[a-z0-9-]+)?(?:__(?:[a-z0-9]+-?)+)?(?:--(?:[a-z0-9]+-?)+){0,2}$/;

export default {
  plugins: ['stylelint-prettier'],
  customSyntax: 'postcss-scss',
  ignoreFiles: ['./node_modules'],
  rules: {
    'prettier/prettier': true,
    'annotation-no-unknown': true,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin'],
      },
    ],
    'selector-class-pattern': BEMPattern,
    'block-no-empty': true,
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'custom-property-no-missing-var-function': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: functionNames,
      },
    ],
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'media-feature-name-no-unknown': true,
    'media-query-no-invalid': true,
    'named-grid-areas-no-invalid': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'no-irregular-whitespace': true,
    'property-no-unknown': true,
    'selector-anb-no-unmatchable': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
      },
    ],
    'string-no-newline': true,
    'unit-no-unknown': true,
  },
};
