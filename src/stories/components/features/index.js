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
    image: 'images/features/themes.png',
    title: 'Theming',
    subtitle: 'Easy to create themes',
    summary: 'Library customization with Css variables for easy theming and component changes.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/testing.png',
    title: 'Unit test',
    subtitle: 'Robust components',
    summary: 'All our components tested, like a Swiss watch. With code coverage above 50%',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/speed.png',
    title: 'Faster dev',
    subtitle: 'Fast like Usain Bolt',
    summary:
      'With our components you can develop a wep app faster than Usain Bolt in 100 meters flat.',
    link: 'https://front10.com',
    linktext: 'See more...'
  },
  {
    image: 'images/features/code.png',
    title: 'Simple',
    subtitle: 'Easy to use',
    summary: 'Very easy to use, you can do a lot in your wep application with little code.',
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
