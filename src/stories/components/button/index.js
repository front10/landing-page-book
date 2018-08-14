import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Button } from '../../../components';
import Readme from '../../../components/Button/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Button',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Button
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        tooltip={text('Tooltip', 'Tis is a button tooltip')}
        className={text('Class name', 'btn-primary btn-block active')}
      >
        <i className="fa fa-home" />
        Home
      </Button>
    </ThemeSelector>
  )),
  jsxConfig
);
