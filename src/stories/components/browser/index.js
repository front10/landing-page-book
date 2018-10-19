import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { Browser, Code } from '../../../components';
import Readme from '../../../components/Browser/README.md';
import def from '../../mock/components/codes/browser';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Browser',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Browser" description="Show the browser logo with the version." />
      <Browser
        showBrowserVendor={boolean('Show browser vendor', true)}
        showBrowserVersion={boolean('Show browser version', true)}
        vendor={select(
          'Vendor',
          {
            firefox: 'firefox',
            chrome: 'chrome',
            iexplore: 'iexplore',
            safari: 'safari',
            opera: 'opera',
            maxthon: 'maxthon',
            flock: 'flock'
          },
          'chrome'
        )}
        version={text('Version', '>= 20.0')}
      />
      <div className="mt-4">
        <Code
          code={def}
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
