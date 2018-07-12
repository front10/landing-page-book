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
				email={boolean("Email", true)}
				facebook={boolean("Facebook", true)}
				google={boolean("Google", true)}
				linkedin={boolean("Linkedin", true)}
				livejournal={boolean("Livejournal", true)}
				ok={boolean("Ok", true)}
				pinterest={boolean("Pinterest", true)}
				reddit={boolean("Reddit", true)}
				telegram={boolean("Telegram", true)}
				tumblr={boolean("Tumblr", true)}
				twitter={boolean("Twitter", true)}
				viber={boolean("Viber", true)}
				vk={boolean("Vk", true)}
				whatsapp={boolean("Whatsapp", true)}
				rounded={boolean("Rounded", true)}
				url={text("Url", "https://front10.com")}
			/>
		</ThemeSelector>
	);
}));