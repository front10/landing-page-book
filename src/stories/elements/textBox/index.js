import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { TextBox, Code } from '../../../components';
import Readme from '../../../components/TextBox/README.md';
import def from '../../mock/components/codes/textbox';

setAddon(JSXAddon);

const stories = storiesOf('Elements/Typography', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'TextBox',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="TextBox"
        description="The <TextBox> tag defines a multi-line text input control.
        A TextBox can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).        
        The size of a TextBox can be specified by the cols and rows attributes, or even better; through CSS' height and width properties."
      />
      <TextBox
        className={text('CSS class', 'Example')}
        title={text('Title', 'Get many resources in a single request')}
        text={text(
          'Text',
          'GraphQL queries access not just the properties of one resource but also smoothly\n follow references between them. While typical REST APIs require loading from\n multiple URLs, GraphQL APIs get all the data your app needs in a single request.\n Apps using GraphQL can be quick even on slow mobile network connections.'
        )}
      />
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
