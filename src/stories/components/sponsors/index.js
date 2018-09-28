import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Sponsors } from '../../../components';
import Readme from '../../../components/Sponsors/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Sponsors', module);

stories.addDecorator(withKnobs);

const sponsors = [
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Acer-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo1.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/ASUS-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Compaq-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/HP-Company-Logos.jpg'
  }
];

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div className="container">
        <Sponsors
          ccsClassName={text('CssClassName', 'px-3')}
          gray={boolean('Use gray', true)}
          sponsors={sponsors}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
