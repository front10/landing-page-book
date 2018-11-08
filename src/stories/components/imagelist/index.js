import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { ImageList } from '../../../components';
import Readme from '../../../components/ImageList/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/ImageList', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image List"
        description="Easy way to show an image list on your website."
      />
      <PropsManager scope={{ React, ImageList }}>
        {`<ImageList 
    gray
    imageRounded={false}
    imageBordered={false}
    images={[
      {image: 'images/image-list/react.png'},
      {image: 'images/image-list/graphql.png'},
      {image: 'images/image-list/apollo.png'},
      {image: 'images/image-list/storybook.png'},
      {image: 'images/image-list/angularjs.png'},
      {image: 'images/image-list/bootstrap.png'},
      {image: 'images/image-list/browserstack.png'},
      {image: 'images/image-list/jest.png'}
    ]}
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
