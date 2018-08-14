import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Label } from '../../../components';
import Readme from '../../../components/Label/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Label',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Label
        colon={boolean('Colon', false)}
        className={text('Class name', '')}
        label={text('Label', 'This is a label')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
