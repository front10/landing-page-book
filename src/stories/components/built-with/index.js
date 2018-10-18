import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { BuiltWith } from '../../../components';
import Readme from '../../../components/BuiltWith/README.md';

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
      <div className="container">
        <BuiltWith gray={boolean('Use gray', true)} companies={companies} />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
