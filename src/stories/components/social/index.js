import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Social} from '../../../components';
import Readme from '../../../components/Social/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Social', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Social
				type={text("Button type", "facebook")}
				rounded={boolean("Rounded", true)}
				url={text("Url", "https://front10.com")}
			/>
		</ThemeSelector>
	);
}));