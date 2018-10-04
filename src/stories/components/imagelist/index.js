import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { ImageList } from '../../../components';
import Readme from '../../../components/ImageList/README.md';

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
      <div className="container">
        <ImageList
          gray={boolean('Use gray', true)}
          imageRounded={boolean('Rounded', false)}
          imageBordered={boolean('Bordered', false)}
          images={companies}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
