import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Header} from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

const leftItems = [{
	title: "Google",
	href: "https://google.com",
	target: "_blank",
	icon: "fa fa-google"
}, {
	title: "Facebook",
	href: "https://facebook.com",
	target: "_blank",
	icon: "fa fa-facebook-official"
}];

const rightItems = [{
	title: "Our Services"
}, {
	title: "What we do"
}, {
	title: "The Process"
}, {
	title: "Founders"
}, {
	title: "Contact"
}];

stories.add('Header', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Header
				transparent={boolean("Transparent", false)}
				fixed={boolean("Fixed", false)}
				companyName={text("Company name", "Front10")}
				companyLink={text("Company link", "https://front10.com")}
				companyLogo={text("Company logo", "images/logo/front10.png")}
				rightItems={rightItems}
				leftItems={leftItems}
			/>
		</ThemeSelector>
	);
}));