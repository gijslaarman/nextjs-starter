import vercelPrettierOptions from '@vercel/style-guide/prettier';

/**
 *
 * @param {import('prettier').Config} config
 * @returns
 */
const extendConfig = (config) => {
  config.plugins.push('prettier-plugin-css-order');
  return config;
};

export default extendConfig(vercelPrettierOptions);
