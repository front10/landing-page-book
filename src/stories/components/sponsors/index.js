import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Sponsors} from '../../../components';
import Readme from '../../../components/Features/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

stories.add('Sponsors', withReadme([Readme], () => {
return (
  <ThemeSelector>    
    <Sponsors />      
  </ThemeSelector>
);
}));