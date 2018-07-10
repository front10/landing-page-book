import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Hero} from '../../../components';
import Readme from '../../../components/Hero/README.md';

const stories = storiesOf('Components', module);

const buttons = [{
	text: "TELL ME MORE",
	onClick: ({button}) => {
		alert(`You has clicked ${button.text}`)
	}
}];

stories.addDecorator(withKnobs);

stories.add('Hero', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Hero
				isFixed={boolean("Fixed", true)}
				isCentered={boolean("Centered", true)}
				particles={boolean("With particles", true)}
				image={text("Image", "https://front10.com/img/header-bg.jpg")}
				opacity={number("Opacity", 0)}
				parallaxOffset={number("Parallax offset", 0)}
				overlayColor={text("Overlay color", "black")}
				minHeight={text("Min height", "100vh")}
				header={text("Header", "REACT & ANGULARJS COMPONENTS")}
				subHeader={text("Sub header", "Leverage your process!")}
				subHeaderPosition={text("Sub header position", "top")}
				buttons={buttons}
				particlesParams={{"move": {"speed": 2}}}
			/>
		</ThemeSelector>
	);
}));