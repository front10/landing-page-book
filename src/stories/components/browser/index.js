import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import jsxConfig from '../../mock/jsxConfig';
import { Browser } from '../../../components';
import Readme from '../../../components/Browser/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Browser',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Browser
        showText={boolean('Show text', true)}
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
    </ThemeSelector>
  )),
  jsxConfig
);
