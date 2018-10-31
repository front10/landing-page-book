import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { Code } from '../../../components';
import Readme from '../../../components/Code/README.md';

const stories = storiesOf('Components/Code', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Code"
        description="Show code chunks can help to quickly explain the most complicated stuff ;)"
      />
      <PropsManager scope={{ React, Code }}>
        {`<Code
    languageCode="jsx"
    collapsible
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Code Simple',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Code"
        storyName="Code Simple"
        description="Show code chunks can help to quickly explain the most complicated stuff ;)"
      />
      <PropsManager scope={{ React, Code }}>
        {`<Code
    languageCode="jsx"
    lineNumbers
    showheader
    collapsible={false}
    showCopyButton={false}
    showDeleteButton={false}
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Code Css',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Code"
        storyName="Code Css"
        description="Show code chunks can help to quickly explain the most complicated stuff ;)"
      />
      <PropsManager scope={{ React, Code }}>
        {`<Code
    languageCode="css"
    readOnly={false}
    lineNumbers
    showheader={false}
    collapsible
    showCopyButton
    showDeleteButton
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
