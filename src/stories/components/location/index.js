import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Location } from '../../../components';
import Readme from '../../../components/Location/README.md';

setAddon(JSXAddon);

const markers = [
  {
    icon: 'fa fa-map-marker',
    color: '#d20000',
    lat: 26.5,
    lng: -80.2
  },
  {
    icon: 'fa fa-map-marker',
    color: '#d2a430',
    lat: 26.6,
    lng: -80.3
  }
];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Location',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div style={{ height: '300px' }}>
        <Location
          apiKey={text('Api key', 'AIzaSyAP5ycGdpjGBUU-u6vZ8fwx_ybbyzgYXfM')}
          lat={number('Latitude', 26.5)}
          lng={number('Longitude', -80.2)}
          zoom={number('Zoom', 10)}
          markers={markers}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
