import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Copyright } from '../../../components';
import Readme from '../../../components/Copyright/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Copyright', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Copyright"
        description="The exclusive legal right, given to an originator or an assignee to print, publish, perform, film, or record literary, artistic, or musical material, and to authorize others to do the same, Protect the content of your website."
      />
      <PropsManager scope={{ React, Copyright }}>{`<Copyright text="Fron10, LLC" />`}</PropsManager>
    </ThemeSelector>
  ))
);
