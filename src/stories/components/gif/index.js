import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Gif } from '../../../components';
import Readme from '../../../components/Gif/README.md';

const stories = storiesOf('Components/Gif', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Gif"
        description="A lossless format for image files that supports both animated and static images, Its one of the most used image format on web."
      />
      <PropsManager scope={{ React, Gif }}>
        {`<Gif image="images/gif/write.gif" preview="images/demo/develop.png" />`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Autoplay',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Gif"
        storyName="With Autoplay"
        description="A lossless format for image files that supports both animated and static images, Its one of the most used image format on web."
      />
      <PropsManager scope={{ React, Gif }}>
        {`<Gif image="images/gif/write.gif" preview="images/demo/develop.png" autoplay />`}
      </PropsManager>
    </ThemeSelector>
  ))
);
