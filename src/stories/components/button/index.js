import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";
import {Button} from "../../../components";
import Readme from '../../../components/Button/README.md';

const story = storiesOf('Components', module);
story.addDecorator(withKnobs);
story.add('Buttons', withReadme(Readme, () => (
	<ThemeSelector>
		<div>
			<Button
				active={boolean("Active", false)}
				block={boolean("Block", false)}
				color={text("Color", "primary")}
				disabled={boolean("Disabled", false)}
				outline={boolean("Outline", false)}
				tooltip={text("Tooltip", "This is an tooltip example")}
				tooltipPosition={text("Tooltip position", "top")}
				size={text("Size", "md")}>
				Primary
			</Button>
		</div>
	</ThemeSelector>
)));
