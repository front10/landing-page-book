import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Team} from '../../../components';
import Readme from '../../../components/Team/README.md';

const members = [{
	image: "https://randomuser.me/api/portraits/men/11.jpg",
	name: "Sander Coleman",
	job: "CEO",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}, {
	image: "https://randomuser.me/api/portraits/women/2.jpg",
	name: "Rachel Lee",
	job: "Developer",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}, {
	image: "https://randomuser.me/api/portraits/men/11.jpg",
	name: "Sander Coleman",
	job: "CEO",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}, {
	image: "https://randomuser.me/api/portraits/women/2.jpg",
	name: "Rachel Lee",
	job: "Developer",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Team', withReadme([Readme], () => {
	return (
		<ThemeSelector>
			<Team
				showName={boolean("Show name", true)}
				showImage={boolean("Show image", true)}
				showJob={boolean("Show job", true)}
				showSummary={boolean("Show summary", true)}
				imageCircle={boolean("Image circle", true)}
				contentAlign={select("Content align", {
					"center": "center",
					"left": "left",
					"right": "right"
				}, "center")}
				members={members}
				socials={array("Socials", ["facebook", "linkedin", "google", "twitter"], ",")}
			/>
		</ThemeSelector>
	);
}));