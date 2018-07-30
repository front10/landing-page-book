import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Image} from '../../../components';
import Readme from '../../../components/Image/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Image', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Image
      border={boolean("Border", false)}
      rounded={boolean("Rounded", false)}
      alt={text("Alt", "This is an image example")}
      src={text("Source", "https://sbforge.org/images/icons/profilepics/default.png")}
      width={number("Width", 100)}
      height={number("Height", 100)}
    />
  </ThemeSelector>
	);
}));