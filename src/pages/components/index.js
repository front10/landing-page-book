import React from 'react';
import ContainerLayout from '../../gatsby-layouts/container';
import GridComponent from '../../../storybook-utils/components/GridComponents';
import components from '../../stories/mock/components/stories/index';

const ComponentList = () => (
  <ContainerLayout>
    <GridComponent components={components} />
  </ContainerLayout>
);

export default ComponentList;
