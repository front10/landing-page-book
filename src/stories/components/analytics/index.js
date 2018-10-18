import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Analytics } from '../../../components';
import Readme from '../../../components/Analytics/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Analytics', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Analytics"
        description="Analytics makes it easy to understand how your site and app users are engaging with your content, so you know what’s working and what’s not. See how people are interacting with your sites and apps and the role that different channels play by viewing robust reports and dashboards. You can even connect systems used to measure CRM, points of sale, and other touchpoints with your customers for a more complete view."
      />
      <Analytics
        idTracking={text('idTracking', 'UA-0000000-0')}
        urlPath={text('URL to track', '/')}
        debug={boolean('Debug Mode', true)}
      />
      <div>This component is embedded directly in the javascript and shows nothing.</div>
    </ThemeSelector>
  )),
  jsxConfig
);
