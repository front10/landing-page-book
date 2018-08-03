import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from '../../../addons/ThemeSwitcher';

import {Donation} from '../../../components';
import Readme from '../../../components/Donation/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Donation', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Donation
        url={text("Url", "https://opencollective.com/webpack/donate")}
        image={text("Image", "https://opencollective.com/webpack/donate/button@2x.png?color=blue")}
        imageWidth={text("Image width", "300")}
        imageAlt={text("Image alt", "Open collective logo")}
      />
    </ThemeSelector>
  );
}));
