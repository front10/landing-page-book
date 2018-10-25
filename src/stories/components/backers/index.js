import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { Backers, Container } from '../../../components';
import Readme from '../../../components/Backers/README.md';

import backers from '../../mock/components/backers';

const stories = storiesOf('Components/Backers', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Backers"
        description="A person, institution, or country that supports something, especially financially. Its important show the people who support your idea."
      />
      <Container>
        <PropsManager scope={{ React, Backers }}>
          {`<Backers backers={${JSON.stringify(backers, null, 8)}} />`}
        </PropsManager>
      </Container>
    </ThemeSelector>
  ))
);
