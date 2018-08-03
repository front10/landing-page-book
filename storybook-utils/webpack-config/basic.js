const path = require('path');
const fs = require('fs');

// load the default config generator.
const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');

module.exports = (baseConfig, env, rootDirName) => {
  const config = genDefaultConfig(baseConfig, env);

  // SASS
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: [
      path.resolve(rootDirName, '../src'),
      path.resolve(rootDirName, '../storybook-utils'),
      fs.realpathSync(`${rootDirName}/../node_modules`)
    ]
  });

  config.resolve.extensions.push('.scss');

  // Markdown

  config.module.rules.push({
    test: /\.md$/,
    loaders: ['raw-loader'],
    include: []
  });
  config.resolve.extensions.push('.md');

  return config;
};
