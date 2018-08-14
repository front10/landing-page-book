import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Features } from '../../../components';
import Readme from '../../../components/Features/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);
const featuress = [
  {
    image: 'images/features/dashboard.png',
    title: 'Dashboard',
    subtitle: 'Dashboard for Admin',
    summary: 'Example of feature text, this component will allow to you to show all your features.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/react.png',
    title: 'ReactJS',
    subtitle: 'Build with ReactJS',
    summary: 'Example of feature text, this component will allow to you to show all your features.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/angular.png',
    title: 'AngularJS',
    subtitle: 'Powered by Angular 5',
    summary: 'Example of feature text, this component will allow to you to show all your features.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/graphql.png',
    title: 'GraphQL',
    subtitle: 'GraphQL API',
    summary: 'Example of feature text, this component will allow to you to show all your features.',
    link: 'https://front10.com',
    linktext: 'See more...'
  }
];

stories.addWithJSX(
  'Features',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Features
        showBorder={boolean('Show border', false)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', false)}
        imageBorder={boolean('Image border', false)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={featuress}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
