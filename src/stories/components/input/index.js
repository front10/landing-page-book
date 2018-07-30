import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Input} from '../../../components';
import Readme from '../../../components/Input/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Input', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Input/>
  </ThemeSelector>
	);
}));