import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, array, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { LanguageSwitcher } from '../../../components';
import Readme from '../../../components/LanguageSwitcher/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'LanguageSwitcher',
  withReadme([Readme], () => (
    <ThemeSelector>
      <LanguageSwitcher
        showLabel={boolean('Show label', true)}
        showOptionLabel={boolean('Show option label', true)}
        showFlag={boolean('Show option flag', true)}
        disabled={boolean('Disabled', false)}
        showArrow={boolean('Show arrow', true)}
        placeholder={text('Placeholder', 'Language')}
        selectedLanguage={text('Selected language', 'DE')}
        languages={array('Languages', ['US', 'FR', 'ES', 'DE'], ',')}
        customLabels={{
          US: 'English',
          FR: 'Français',
          ES: 'Español',
          DE: 'Deutsch'
        }}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
