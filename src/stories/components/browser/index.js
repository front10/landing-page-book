import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { Browser } from '../../../components';
import Readme from '../../../components/Browser/README.md';

const stories = storiesOf('Elements', module);

stories.add(
  'Browser',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Browser" description="Show the browser logo with the version." />
      <PropsManager scope={{ React, Browser }}>
        <Browser vendor="chrome" version=">= 20.0" />
      </PropsManager>
    </ThemeSelector>
  ))
);
