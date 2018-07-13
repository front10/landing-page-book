import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Code} from '../../../components';
import Readme from '../../../components/Code/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

const updateCode = ({item}) => {
	alert(`Code changed`);
};

stories.add('Code', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <Code 
      code={text("Code", 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};')}
      languageCode={text("Language", 'javascript')}
      readOnly={boolean("Read Only", false)}
      lineNumbers={boolean("Show line numbers", true)}
      updateCode={updateCode}
    />
  </ThemeSelector>
);
}));