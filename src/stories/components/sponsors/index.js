import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Sponsors } from '../../../components';
import Readme from '../../../components/Features/README.md';

const stories = storiesOf('Components', module);

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

stories.add(
  'Sponsors',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div className="container">
        <Sponsors gray={boolean('Use gray', true)} sponsors={sponsors} />
      </div>
    </ThemeSelector>
  ))
);
