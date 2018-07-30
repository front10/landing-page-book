import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Browser} from '../../../components';
import Readme from '../../../components/Browser/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Browser', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Browser
      showText={boolean("Show text", true)}
      vendor={select("Vendor", {
        "firefox": "firefox",
        "chrome": "chrome",
        "iexplore": "iexplore",
        "safari": "safari",
        "opera": "opera",
        "maxthon": "maxthon",
        "flock": "flock"
      }, "chrome")}
      version={text("Version", ">= 20.0")}
    />
  </ThemeSelector>
	);
}));