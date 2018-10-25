import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Header, Container } from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Elements/Typography/Header', module);

stories.add(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Container, Header }}>
        {`<React.Fragment>
    <Header type="h1">h1. Landing Page Heading</Header>
    <Header type="h2">h2. Landing Page Heading</Header>
    <Header type="h3">h3. Landing Page Heading</Header>
    <Header type="h4">h4. Landing Page Heading</Header>
    <Header type="h5">h5. Landing Page Heading</Header>
    <Header type="h6">h6. Landing Page Heading</Header>
</React.Fragment>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Colors',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Container, Header }}>
        {`<React.Fragment>
    <Header color="primary">Landing Page Heading</Header>
    <Header color="secondary">Landing Page Heading</Header>
    <Header color="success">Landing Page Heading</Header>
    <Header color="danger">Landing Page Heading</Header>
    <Header color="warning">Landing Page Heading</Header>
    <Header color="info">Landing Page Heading</Header>
    <Header color="light">Landing Page Heading</Header>
    <Header color="dark">Landing Page Heading</Header>
</React.Fragment>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Borders',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Container, Header }}>
        {`<Header borderTop borderBottom>Landing Page Heading</Header>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Align',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Container, Header }}>
        {`<React.Fragment>
    <Header> Landing Page Heading </Header>
    <Header textAlign="right"> Landing Page Heading </Header>
</React.Fragment>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <PropsManager scope={{ React, Header }}>
        {`<Header icon="fa fa-home"> Landing Page Heading </Header>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
