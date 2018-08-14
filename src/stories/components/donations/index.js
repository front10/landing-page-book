import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Donation } from '../../../components';
import Readme from '../../../components/Donation/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Donation',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Donation
        url={text('Url', 'https://opencollective.com/webpack/donate')}
        image={text('Image', 'https://opencollective.com/webpack/donate/button@2x.png?color=blue')}
        imageWidth={text('Image width', '300')}
        imageAlt={text('Image alt', 'Open collective logo')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
