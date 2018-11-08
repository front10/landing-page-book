const fs = require('fs');
const path = require('path');

const { resolve } = path;
const absolute = resolve();

const componentFolder = `${absolute}/src/components/`;
const exclude = [
  'Column',
  'Container',
  'FormGroup',
  'LocationMarker',
  'NavbarBrand',
  'NavbarCollapse',
  'NavbarLink',
  'NavbarNav',
  'Row'
];

function filewalker(dir, done) {
  const results = [];

  fs.readdir(dir, async (err, list) => {
    if (err) return done(err);

    let pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(file => {
      const fileRoute = path.resolve(dir, file);

      fs.stat(fileRoute, async (err, stat) => {
        if (exclude.indexOf(file) === -1 && stat && stat.isDirectory()) {
          await results.push(fileRoute);
        }
        if (!--pending) done(null, results);
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
            withStyles={component.withStyles}
            extractProps={component.extractProps}
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
      `${absolute}/src/pages/components/${name.toLowerCase()}.js`,
      content,
      'utf8',
      () => {}
    );
    return component;
  });
});
