import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Backers, Container } from '../../../components';
import Readme from '../../../components/Backers/README.md';

import backers from '../../mock/components/backers';

setAddon(JSXAddon);

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Backers',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Container>
        <Backers
          imageRounded={boolean('Image rounded', true)}
          imageBordered={boolean('Image border', true)}
          imageGray={boolean('Gray', false)}
          backers={backers}
        />
      </Container>
    </ThemeSelector>
  )),
  jsxConfig
);
