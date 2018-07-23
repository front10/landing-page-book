import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Gif} from '../../../components';
import Readme from '../../../components/Gif/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Gif', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Gif
      image={text("Image", "images/gif/write.gif")}
      preview={text("Preview", "images/demo/develop.png")}
    />
  </ThemeSelector>
	);
}));