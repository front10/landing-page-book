import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Header, Container } from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Elements/Typography', module);

stories.add(
  'Header',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Container, Header }}>
        <Container>
          <Header type="h1">h1. Landing Page Heading</Header>
          <Header type="h2">h2. Landing Page Heading</Header>
          <Header type="h3">h3. Landing Page Heading</Header>
          <Header type="h4">h4. Landing Page Heading</Header>
          <Header type="h5">h5. Landing Page Heading</Header>
          <Header type="h6">h6. Landing Page Heading</Header>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);
