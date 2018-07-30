import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Label} from '../../../components';
import Readme from '../../../components/Label/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Label', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Label
				colon={boolean("Colon", false)}
				className={text("Class name", "")}
				label={text("Label", "This is a label")}
			/>
		</ThemeSelector>
	);
}));