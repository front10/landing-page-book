import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Header } from '../../../components';
import Readme from '../../../components/Header/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Header',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Header" description="Any type of HTML headers, h1, h2, h3, h4, h5, h6" />
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type={select('Type', { h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6' }, 'h1')}
      >
        This is a header
      </Header>
    </ThemeSelector>
  )),
  jsxConfig
);
