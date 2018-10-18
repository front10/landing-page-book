import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { BackersOpenCollective, Container } from '../../../components';
import Readme from '../../../components/BackersOpenCollective/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/BackersOpenCollective', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="BackersOpenCollective"
        description="A person, institution, or country that supports something, especially financially throw opencollective platform. Its important show the people who support your idea."
      />
      <Container>
        <BackersOpenCollective
          imageRounded={boolean('Image rounded', true)}
          imageBordered={boolean('Image border', true)}
          imageGray={boolean('Gray', false)}
          sortDirection={select('Sort direction', { asc: 'asc', desc: 'desc' }, 'desc')}
          collective={text('Collective', 'webpack')}
        />
      </Container>
    </ThemeSelector>
  )),
  jsxConfig
);
