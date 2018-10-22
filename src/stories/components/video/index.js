import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Video } from '../../../components';
import Readme from '../../../components/Video/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Video', module);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Video"
        description="Now you can show video of vimeo, youtube and many other platforms very easily on your website."
      />
      <PropsManager scope={{ React, Video }}>
        <Video source="https://youtu.be/dCrLwWdju68" />
      </PropsManager>
    </ThemeSelector>
  ))
);
