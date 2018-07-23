import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, array, text, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {LanguageSwitcher} from '../../../components';
import Readme from '../../../components/LanguageSwitcher/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('LanguageSwitcher', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <LanguageSwitcher
      showLabel={boolean("Show label", true)}
      showOptionLabel={boolean("Show option label", true)}
      showFlag={boolean("Show option flag", true)}
      disabled={boolean("Disabled", false)}
      placeholder={text("Placeholder", "Language")}
      selectedLanguage={text("Selected language", "DE")}
      languages={array("Languages", ["US", "FR", "ES", "DE"], ",")}
      customLabels={{
        US: "English",
        FR: "Français",
        ES: "Español",
        DE: "Deutsch"
      }}
    />
  </ThemeSelector>
	);
}));