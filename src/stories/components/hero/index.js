import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Hero, Social} from '../../../components';
import Readme from '../../../components/Hero/README.md';

const stories = storiesOf('Components/Hero', module);

const buttons = [{
	text: "TELL ME MORE",
	onClick: ({button}) => {
		alert(`You has clicked ${button.text}`)
	}
}];

stories.addDecorator(withKnobs);

stories.add('Default', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Hero
				isFixed={boolean("Fixed", true)}
				isCentered={boolean("Centered", true)}
				particles={boolean("With particles", true)}
				image={text("Image", "https://front10.com/img/header-bg.jpg")}
				opacity={number("Opacity", 1)}
				parallaxOffset={number("Parallax offset", 0)}
				overlayColor={text("Overlay color", "#d43131")}
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

stories.add('Children', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Hero
				isFixed={boolean("Fixed", true)}
				isCentered={boolean("Centered", true)}
				particles={boolean("With particles", true)}
				image={text("Image", "https://front10.com/img/header-bg.jpg")}
				opacity={number("Opacity", 1)}
				parallaxOffset={number("Parallax offset", 0)}
				overlayColor={text("Overlay color", "#d43131")}
				minHeight={text("Min height", "100vh")}
				particlesParams={{"move": {"speed": 2}}}>
				<div className="container">
					<img
						className="w-75"
						alt="Cool car"
						src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-White-Car-PNG-Image.png"/>
					<h1 className="display-3 text-white">GET YOUR CAR</h1>
					<div className="mb-5">
						<button className="btn btn-success btn-lg">
							Go now
						</button>
					</div>
					<Social
						whatsapp={false}
						vk={false}
						viber={false}
						tumblr={false}
						telegram={false}
						reddit={false}
						pinterest={false}
						ok={false}
						livejournal={false}
						email={false}
						url="https://front10.com"
					/>
				</div>
			</Hero>
		</ThemeSelector>
	);
}));