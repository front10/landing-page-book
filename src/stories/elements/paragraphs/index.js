import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Paragraph, Container } from '../../../components';
import Readme from '../../../components/Paragraph/README.md';

const stories = storiesOf('Elements/Typography', module);

stories.add(
  'Paragraph',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Paragraph"
        description="<p> element represents a paragraph. Paragraph are usually represented in 
        visual media as blocks of text separated from adjacent blocks by blank lines and/or 
        first-line indentation, but HTML Paragraph can be any structural grouping of related
        content, such as images or form fields."
      />
      <PropsManager scope={{ React, Container, Paragraph }}>
        {`<Paragraph
    text="We are a group of talented software developers with more than 10 years of experience creating front-end applications. We are tired to see how many brilliant minds are reworking in the same thing because there are not standar and defined processes. We are tired of seeing how many companies are struggling to find good programmers. We are tired of seeing how there a lot of software in a trash because somebody does not defined the requirements at the right time." 
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
