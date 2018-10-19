import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { BuiltWith, Code, Container } from '../../../components';
import Readme from '../../../components/BuiltWith/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/buildwith';

const companies = [
  {
    image: 'images/buildwith/bootstrap.png'
  },
  {
    image: 'images/buildwith/browserstack.png'
  },
  {
    image: 'images/buildwith/jest.png'
  },
  {
    image: 'images/buildwith/react.png'
  },
  {
    image: 'images/buildwith/storybook.png'
  }
];

setAddon(JSXAddon);
const stories = storiesOf('Components/BuiltWith', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Built With"
        description="Libraries or projects that you used to achieve your goals."
      />
      <Container>
        <BuiltWith gray={boolean('Use gray', true)} companies={companies} />
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
