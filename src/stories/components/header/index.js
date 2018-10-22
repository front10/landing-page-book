import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Header } from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Elements', module);

stories.addWithJSX(
  'Header',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Header }}>
        <Header>This is a header</Header>
      </PropsManager>
    </ThemeSelector>
  ))
);
