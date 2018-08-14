import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Video } from '../../../components';
import Readme from '../../../components/Video/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Video',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Video
        playing={boolean('Playing', false)}
        loop={boolean('Loop', false)}
        controls={boolean('Controls', false)}
        muted={boolean('Muted', false)}
        volume={number('Volume', 1)}
        width={text('Width', '640px')}
        height={text('Height', '360px')}
        source={text('Source', 'https://youtu.be/dCrLwWdju68')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
