import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { BackersOpenCollective, Container } from '../../../components';
import Readme from '../../../components/BackersOpenCollective/README.md';

const stories = storiesOf('Components/BackersOpenCollective', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Backers Open Collective"
        description="A person, institution, or country that supports something, especially financially throw opencollective platform. Its important show the people who support your idea."
      />
      <Container>
        <PropsManager scope={{ React, BackersOpenCollective }}>
          <BackersOpenCollective collective="webpack" />
        </PropsManager>
      </Container>
    </ThemeSelector>
  ))
);
