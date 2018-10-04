import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { TextBox } from '../../../components';
import Readme from '../../../components/TextBox/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'TextBox',
  withReadme([Readme], () => (
    <ThemeSelector>
      <TextBox
        className={text('CSS class', 'Example')}
        title={text('Title', 'Get many resources in a single request')}
        text={text(
          'Text',
          'GraphQL queries access not just the properties of one resource but also smoothly\n follow references between them. While typical REST APIs require loading from\n multiple URLs, GraphQL APIs get all the data your app needs in a single request.\n Apps using GraphQL can be quick even on slow mobile network connections.'
        )}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
