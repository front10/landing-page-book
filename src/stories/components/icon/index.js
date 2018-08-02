import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Icon } from '../../../components';
import Readme from '../../../components/Icon/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add(
  'Icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'text-danger')} />
    </ThemeSelector>
  ))
);
