import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Features} from '../../../components';
import Readme from '../../../components/Code/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

stories.add('Code', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <Features />
  </ThemeSelector>
);
}));