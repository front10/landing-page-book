import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import { Backers, Container, Code } from '../../../components';
import Readme from '../../../components/Backers/README.md';

import backers from '../../mock/components/backers';
import def from '../../mock/components/codes/backers';

setAddon(JSXAddon);

const stories = storiesOf('Components/Backers', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Backers"
        description="A person, institution, or country that supports something, especially financially. Its important show the people who support your idea."
      />
      <Container>
        <Backers
          imageRounded={boolean('Image rounded', true)}
          imageBordered={boolean('Image border', false)}
          imageGray={boolean('Gray', false)}
          backers={backers}
        />
      </Container>
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
