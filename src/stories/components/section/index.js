import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Section, Video } from '../../../components';
import Readme from '../../../components/Section/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add(
  'Section',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Section
        gray={boolean('Gray', false)}
        title={text('Title', 'WHAT WE DO')}
        subTitle={text('Subtitle', 'One Look Is Worth A Thousand Words.')}
      >
        <Video source="https://youtu.be/dCrLwWdju68" />
      </Section>
    </ThemeSelector>
  ))
);
