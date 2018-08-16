import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import ThemeBuilderService from '../../../service/ThemeBuilder.services';

import { ThemeBuilder } from '../../../components';
import Readme from '../../../components/ThemeBuilder/README.md';

const onUpdateTheme = ({ variables }) => {
  ThemeBuilderService.compile({ variables, theme: 'default' }).then(response => {
    alert(response);
  });
};

setAddon(JSXAddon);

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Theme builder',
  withReadme([Readme], () => (
    <ThemeSelector>
      <ThemeBuilder
        theme={select(
          'Theme',
          { default: 'default', graphql: 'graphql', react: 'react', webpack: 'webpack' },
          'default'
        )}
        onUpdateTheme={onUpdateTheme}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
