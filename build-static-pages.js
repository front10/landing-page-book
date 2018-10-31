const fs = require('fs');
const path = require('path');

const componentFolder = './src/components/';

function filewalker(dir, done) {
  let results = [];

  fs.readdir(dir, async (err, list) => {
    if (err) return done(err);

    let pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(file => {
      file = path.resolve(dir, file);

      fs.stat(file, async (err, stat) => {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          filewalker(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          // Check if is a Javascript file
          // And not a story or test
          if (file.endsWith('.jsx') && !file.endsWith('.test.js')) {
            await results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

function generateTemplate(name) {
  return `import React from 'react';

import MainLayout from '../../gatsby-layouts/main';
import DetailsComponent from '../../../storybook-utils/components/DetailsComponent';
import component from '../../stories/mock/components/stories/${name.toLowerCase()}';
import map from '../../components/${name}/map.json';

class ComponentView extends React.Component {
  render() {
    return (
      <MainLayout pagePushedFunction={this.handlepushedPageLayout}>
        {component && (
          <DetailsComponent
            name={component.name}
            linkGithub="https://github.com/front10/landing-page-book/tree/master/src/components/${name}"
            description={component.summary}
            stories={component.stories}
            importCode={component.import}
            propsDescription={map.props}
          />
        )}
      </MainLayout>
    );
  }
}

export default ComponentView;
`;
}

function getComponentName(component) {
  let pathArray = component.split('/');
  pathArray = pathArray[pathArray.length - 1];
  return pathArray.split('.jsx')[0];
}

filewalker(componentFolder, (err, data) => {
  if (err) {
    throw err;
  }
  data.map(component => {
    const name = getComponentName(component);
    const content = generateTemplate(name);
    fs.writeFile(
      `${__dirname}/src/pages/components/${name.toLowerCase()}.js`,
      content,
      'utf8',
      () => {}
    );
    return component;
  });
});
