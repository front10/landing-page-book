const getConfig = require('../storybook-utils/webpack-config/basic');

module.exports = (baseConfig, env) => {
  const rootDirName = __dirname;
  const config = getConfig(baseConfig, env, rootDirName);
  return config;
};
