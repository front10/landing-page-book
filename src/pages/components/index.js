import React from 'react';

import ContainerLayout from '../../gatsby-layouts/container';
import GridComponent from '../../../storybook-utils/components/GridComponents';

// Importing data of the components
import * as components from '../../components/index';

const elements = [];
Object.keys(components).map(component => {
  if (component.includes('__') === false) {
    elements.push({
      title: component,
      image: `/images/components/${component.toLowerCase()}.svg`,
      link: `/components/${component.toLowerCase()}`
    });
  }
  return false;
});

const ComponentList = () => (
  <ContainerLayout>
    <GridComponent components={elements} />
  </ContainerLayout>
);

export default ComponentList;
