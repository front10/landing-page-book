import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { LanguageSwitcher } from '../../../components';
import Readme from '../../../components/LanguageSwitcher/README.md';

const stories = storiesOf('Components/LanguageSwitcher', module);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Language Switcher"
        description="Website translation, the process of converting text from a source language into a target language, is also known as website globalization. In order to translate a website into other languages, you may need both website internationalization (I18N) and website localization (L10N). This component allow you to easy change the language on your website"
      />
      <PropsManager scope={{ React, LanguageSwitcher }}>
        <LanguageSwitcher
          showLabel
          placeholder="Select language..."
          languages={['US', 'FR', 'ES', 'DE']}
          customLabels={{
            US: 'English',
            FR: 'Français',
            ES: 'Español',
            DE: 'Deutsch'
          }}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);
