import React from 'react';
import {storiesOf} from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import {NavItem, NavLink} from 'reactstrap';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";
import {Navbar} from "../../../components";
import Readme from '../../../components/Navbar/README.md';

const story = storiesOf('Components', module);
story.addDecorator(withKnobs);
story.add('Navbar', withReadme(Readme, () => (
	<ThemeSelector>
		<div>
			<Navbar
				color={text("Color", "dark")}
				dark={boolean("Dark", true)}
				expand={text("Expand", "md")}
				fixed={text("Fixed", "none")}
				light={boolean("Light", false)}
				logo="images/logo/front10.png"
				logoRef={text("logo ref", "https://front10.com")}
				role={text("Role", "Navigation bar")}
				shadow={boolean("Shadow", true)}>
				<NavItem>
					<NavLink
						href="https://landing-page-book.front10.com">Book</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="https://gitlab.com/front10-devs/landing-page-book">GitLab</NavLink>
				</NavItem>
			</Navbar>
		</div>
	</ThemeSelector>
)));
