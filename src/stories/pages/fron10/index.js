import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Header, Hero} from '../../../components';

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

const buttons = [{
	text: "TELL ME MORE",
	onClick: ({button}) => {
		alert(`You has clicked ${button.text}`)
	}
}];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('Front10', () => {
	return (
		<ThemeSelector>
			<Header
				companyName="Front10"
				companyLink="https://front10.com"
				companyLogo="images/logo/front10.png"
				rightItems={rightItems}
			/>
			<Hero
				overlayColor="#383d45"
				opacity={1}
				subHeaderPosition="top"
				subHeader="Leverage your process!"
				header="REACT & ANGULARJS COMPONENTS"
				buttons={buttons}
			/>
		</ThemeSelector>
	);
});