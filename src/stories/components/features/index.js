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
const stories = storiesOf('Components/Features', module);

stories.addDecorator(withKnobs);
const featuress = [
  {
    image: 'images/features/responsive.png',
    title: 'Responsive',
    subtitle: 'Available in all resolutions',
    summary:
      'Our library is more responsive than the browser. All that you  needed is a web browser.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/themes.png',
    title: 'Theming',
    subtitle: 'Easy to create themes',
    summary: 'Library customization with Css variables for easy theming and component changes.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/browsers.png',
    title: 'Browsers',
    subtitle: 'Compatible with all browsers',
    summary: '@front10 / landing-page-book works in the main browsers. Try it and you will see.',
    link: 'https://front10.com',
    linktext: 'See more...'
  }
];

stories.addWithJSX(
  'Default',
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
