import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { ImageList, Container, Code } from '../../../components';
import Readme from '../../../components/ImageList/README.md';
import def from '../../mock/components/codes/imagelist';

setAddon(JSXAddon);

const companies = [
  {
    image: 'images/image-list/react.png'
  },
  {
    image: 'images/image-list/graphql.png'
  },
  {
    image: 'images/image-list/apollo.png'
  },
  {
    image: 'images/image-list/storybook.png'
  },
  {
    image: 'images/image-list/angularjs.png'
  },
  {
    image: 'images/image-list/bootstrap.png'
  },
  {
    image: 'images/image-list/browserstack.png'
  },
  {
    image: 'images/image-list/jest.png'
  }
];

const stories = storiesOf('Components/ImageList', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image List"
        description="Easy way to show an image list on your website."
      />
      <Container>
        <ImageList
          gray={boolean('Use gray', true)}
          imageRounded={boolean('Rounded', false)}
          imageBordered={boolean('Bordered', false)}
          images={companies}
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
