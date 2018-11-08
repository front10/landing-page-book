import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Donation } from '../../../components';
import Readme from '../../../components/Donation/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Donation', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Donation"
        description="Something that is given to a charity, especially a sum of money. Allow your users to donate easily and safely."
      />
      <PropsManager scope={{ React, Donation }}>
        {`<Donation url="https://opencollective.com/webpack/donate" />`}
      </PropsManager>
    </ThemeSelector>
  ))
);
