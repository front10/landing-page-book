import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Section, Video, Button, Container, Code } from '../../../components';
import Readme from '../../../components/Section/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Section', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />

      <Section
        gray={boolean('Gray', false)}
        title={text('Title', 'WHAT WE DO')}
        subTitle={text('Subtitle', 'One Look Is Worth A Thousand Words.')}
      >
        <Container className="text-center">
          <Video source="https://youtu.be/dCrLwWdju68" />
          <Button className="mt-5">Explore</Button>
        </Container>
      </Section>
      <Code
        code={`
      <Section
        subTitle="One Look Is Worth A Thousand Words."
        title="WHAT WE DO"
      >
        <Container className="text-center">
          <Video source="https://youtu.be/dCrLwWdju68" />
          <Button className="mt-5">
            Explore
          </Button>
        </Container>
      </Section>`}
        languageCode="jsx"
        readOnly
        collapsible
        collapsed
        showDeleteButton={false}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
