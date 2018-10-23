import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Sponsors } from '../../../components';
import Readme from '../../../components/Sponsors/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Sponsors', module);

const sponsors = [
  {
    image: 'images/sponsors/facebook.png'
  },
  {
    image: 'images/sponsors/google.png'
  },
  {
    image: 'images/sponsors/twitter.png'
  },
  {
    image: 'images/sponsors/salesforce.png'
  },
  {
    image: 'images/sponsors/amazon.png'
  }
];

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Sponsors"
        description="A person or organization that provides funds for you project or activity, give them an acknowledgment."
      />
      <PropsManager scope={{ React, Sponsors }}>
        <Sponsors ccsClassName="px-3" gray sponsors={sponsors} />
      </PropsManager>
    </ThemeSelector>
  ))
);
