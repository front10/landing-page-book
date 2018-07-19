import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {BrowserSupport} from '../../../components';
import Readme from '../../../components/BrowserSupport/README.md';

const browsers = [{
	type: "firefox",
	version: "> 56"
}, {
	type: "chrome",
	version: "= 62"
}, {
	type: "iexplore",
	version: "> 9"
}, {
	type: "safari",
	version: "> 25"
}, {
	type: "netscape",
	version: "> 42.6"
}, {
	type: "opera",
	version: "< 15.6"
}, {
	type: "maxthon",
	version: ">= 10"
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Browsers support', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <BrowserSupport
      items={browsers}
      showText={boolean("Show text", true)}
    />
  </ThemeSelector>
	);
}));