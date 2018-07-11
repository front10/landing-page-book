import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {GithubDetail} from '../../../components';
import Readme from '../../../components/GithubDetail/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

stories.add('GithubDetail', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <GithubDetail />
  </ThemeSelector>
);
}));