import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { TextBox } from '../../../components';
import Readme from '../../../components/TextBox/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Elements/Typography', module);

stories.add(
  'TextBox',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="TextBox"
        description="The <TextBox> tag defines a multi-line text input control.
        A TextBox can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier).        
        The size of a TextBox can be specified by the cols and rows attributes, or even better; through CSS' height and width properties."
      />
      <PropsManager scope={{ React, TextBox }}>
        <TextBox
          title="Get many resources in a single request"
          text="GraphQL queries access not just the properties of one resource but also smoothly\n follow references between them. While typical REST APIs require loading from\n multiple URLs, GraphQL APIs get all the data your app needs in a single request.\n Apps using GraphQL can be quick even on slow mobile network connections."
        />
      </PropsManager>
    </ThemeSelector>
  ))
);
