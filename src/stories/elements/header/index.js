import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/header';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Header, Code } from '../../../components';
import Readme from '../../../components/Header/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements/Typography', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Header',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Header"
        description="Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure."
      />
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h1"
      >
        h1. Landing Page Heading
      </Header>
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h2"
      >
        h2. Landing Page Heading
      </Header>
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h3"
      >
        h3. Landing Page Heading
      </Header>
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h4"
      >
        h4. Landing Page Heading
      </Header>
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h5"
      >
        h5. Landing Page Heading
      </Header>
      <Header
        borderBottom={boolean('Border bottom', false)}
        className={text('Class name', '')}
        type="h6"
      >
        h6. Landing Page Heading
      </Header>
      <div className="mt-4">
        <Code
          code={def}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
