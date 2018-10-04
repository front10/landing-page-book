import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Gif } from '../../../components';
import Readme from '../../../components/Gif/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components/Gif', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Gif
        image={text('Image', 'images/gif/write.gif')}
        preview={text('Preview', 'images/demo/develop.png')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Autoplay',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Gif
        image={text('Image', 'images/gif/write.gif')}
        preview={text('Preview', 'images/demo/develop.png')}
        autoplay
      />
    </ThemeSelector>
  )),
  jsxConfig
);
