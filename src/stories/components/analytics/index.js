import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Analytics } from '../../../components';
import Readme from '../../../components/Analytics/README.md';

const stories = storiesOf('Components/Analytics', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Analytics"
        description="Analytics makes it easy to understand how your site and app users are engaging with your content, so you know what’s working and what’s not. See how people are interacting with your sites and apps and the role that different channels play by viewing robust reports and dashboards. You can even connect systems used to measure CRM, points of sale, and other touchpoints with your customers for a more complete view."
      />
      <div>This component is embedded directly in the javascript and shows nothing.</div>
      <PropsManager scope={{ React, Analytics }}>
        {`<Analytics idTracking="UA-0000000-0" urlPath="/" debug /> `}
      </PropsManager>
    </ThemeSelector>
  ))
);
