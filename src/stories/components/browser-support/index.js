import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { BrowserSupport, Code } from '../../../components';
import Readme from '../../../components/BrowserSupport/README.md';

const browsers = [
  {
    vendor: 'firefox',
    version: '> 56'
  },
  {
    vendor: 'chrome',
    version: '= 62'
  },
  {
    vendor: 'iexplore',
    version: '> 9'
  },
  {
    vendor: 'safari',
    version: '> 25'
  },
  {
    vendor: 'netscape',
    version: '> 42.6'
  },
  {
    vendor: 'opera',
    version: '< 15.6'
  },
  {
    vendor: 'maxthon',
    version: '>= 10'
  },
  {
    vendor: 'flock',
    version: '>= 11'
  }
];

const stories = storiesOf('Components/BrowsersSupport', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <PropsManager scope={{ React, BrowserSupport }}>
        <BrowserSupport browsers={browsers} />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Without texts',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        storyName="Without texts"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <PropsManager scope={{ React, BrowserSupport }}>
        <BrowserSupport browsers={browsers} showBrowserVendor={false} showBrowserVersion={false} />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Gray',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        storyName="Gray"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <PropsManager scope={{ React, BrowserSupport }}>
        <BrowserSupport
          browsers={browsers}
          showBrowserVendor={false}
          showBrowserVersion={false}
          imgFilter="grayscale(90%)"
        />
      </PropsManager>
    </ThemeSelector>
  ))
);
