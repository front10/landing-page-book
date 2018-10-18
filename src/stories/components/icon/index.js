import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Icon } from '../../../components';
import Readme from '../../../components/Icon/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'text-danger')} />
    </ThemeSelector>
  )),
  jsxConfig
);
