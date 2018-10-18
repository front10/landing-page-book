import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { Code } from '../../../components';
import Readme from '../../../components/Code/README.md';
import jsxConfig from '../../mock/jsxConfig';

import def from '../../mock/components/codes/code';

setAddon(JSXAddon);
const stories = storiesOf('Components/Code', module);

stories.addDecorator(withKnobs);

const langoptions = {
  javascript: 'javascript',
  markdown: 'markdown',
  jsx: 'jsx',
  css: 'css',
  sass: 'sass'
};

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Code"
        description="Show code chunks can help to quickly explain the most complicated stuff ;)"
      />
      <Code
        code={text('Code', def)}
        languageCode={select('Language', langoptions, 'jsx')}
        readOnly={boolean('Read Only', false)}
        lineNumbers={boolean('Show line numbers', true)}
        showheader={boolean('Show header', true)}
        collapsible={boolean('Collapsible', true)}
        showCopyButton={boolean('Show copy button', true)}
        showDeleteButton={boolean('Show delete button', true)}
        codeLink={text('Code link', 'https://codesandbox.io/s/pmjvk5wl27')}
        updateCode={() => {}}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
