import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

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
      <StoryHeader
        name="Link"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <Link
        disabled={boolean('Disabled', false)}
        href={text('Link', 'https://front10.com')}
        className={text('Class name', '')}
        tooltip={text('Tooltip', 'This is a tooltip')}
        target={select(
          'Target',
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
        <span>This is a link</span>
      </Link>
    </ThemeSelector>
  )),
  jsxConfig
);
