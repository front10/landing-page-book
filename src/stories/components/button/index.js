import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, select} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Button} from '../../../components';
import Readme from '../../../components/Button/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Button', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Button
      disabled={boolean("Disabled", false)}
      loading={boolean("Loading", false)}
      className={text("Class name", "btn-primary btn-block active")}
    >
      <i className="fa fa-home" />
      Home
    </Button>
  </ThemeSelector>
	);
}));