import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Link, Icon } from '../../../components';
import Readme from '../../../components/Link/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Link',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Link
        disabled={boolean('Disabled', false)}
        href={text('Link', 'https://front10.com')}
        className={text('Class name', '')}
        tooltip={text('Tooltip', 'This is a tooltip')}
        target={select(
          'Taget',
          {
            '': '',
            _blank: '_blank',
            _parent: '_parent',
            _self: '_self',
            _top: '_top'
          },
          ''
        )}
      >
        <Icon icon="fa fa-home" />
        This is a link
      </Link>
    </ThemeSelector>
  )),
  jsxConfig
);
