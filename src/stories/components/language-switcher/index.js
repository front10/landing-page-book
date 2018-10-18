import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, array, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { LanguageSwitcher } from '../../../components';
import Readme from '../../../components/LanguageSwitcher/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/LanguageSwitcher', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="LanguageSwitcher"
        description="Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website"
      />
      <LanguageSwitcher
        showLabel={boolean('Show label', true)}
        showOptionLabel={boolean('Show option label', true)}
        showFlag={boolean('Show option flag', true)}
        disabled={boolean('Disabled', false)}
        showArrow={boolean('Show arrow', true)}
        placeholder={text('Placeholder', 'Select language...')}
        selectedLanguage={text('Selected language', '')}
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
