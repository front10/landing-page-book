import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { BrowserSupport, Code } from '../../../components';
import Readme from '../../../components/BrowserSupport/README.md';

import { browses, browserWithoutText } from '../../mock/components/codes/browser-support';

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

setAddon(JSXAddon);
const stories = storiesOf('Components/BrowsersSupport', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <BrowserSupport
        browsers={browsers}
        showBrowserVendor={boolean('Show browser vendor', true)}
        showBrowserVersion={boolean('Show browser version', true)}
      />
      <div className="mt-4">
        <Code
          code={browses}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Without texts',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <BrowserSupport
        browsers={browsers}
        showBrowserVendor={boolean('Show browser vendor', false)}
        showBrowserVersion={boolean('Show browser version', false)}
      />
      <div className="mt-4">
        <Code
          code={browserWithoutText}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Gray',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Browser Support"
        description="Browser compatibility is the capability or flexibility of a website, web application, script or HTML design to function on different web browsers available in the market. Showing this information to your users will help them to save valuable time."
      />
      <BrowserSupport
        browsers={browsers}
        showBrowserVendor={boolean('Show browser vendor', false)}
        showBrowserVersion={boolean('Show browser version', false)}
        imgFilter={text('Img Filter', 'grayscale(90%)')}
      />
      <div className="mt-4">
        <Code
          code={browserWithoutText}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
