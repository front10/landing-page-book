import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Image } from '../../../components';
import Readme from '../../../components/Image/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Image
        border={boolean('Border', false)}
        rounded={boolean('Rounded', false)}
        alt={text('Alt', 'This is an image example')}
        src={text('Source', 'https://sbforge.org/images/icons/profilepics/default.png')}
        width={text('Width', 100)}
        height={text('Height', 100)}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
