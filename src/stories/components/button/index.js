import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Button } from '../../../components';
import Readme from '../../../components/Button/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add(
  'Button',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Button
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        tooltip={text('Tooltip', 'Tis is a button tooltip')}
        className={text('Class name', 'btn-primary btn-block active')}
        btntype={text('Type', 'submit')}
      >
        <i className="fa fa-home" />
        Home
      </Button>
    </ThemeSelector>
  ))
);
