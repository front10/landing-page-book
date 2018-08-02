import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Header } from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Header', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Header
        borderBottom={boolean("Border bottom", false)}
        className={text("Class name", "")}
        type={select("Type",{"h1": "h1","h2": "h2","h3": "h3","h4": "h4","h5": "h5","h6": "h6"}, "h1")}
      >
          This is a header
      </Header>
    </ThemeSelector>
  );
}));
