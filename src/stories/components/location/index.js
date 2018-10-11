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

const stories = storiesOf('Components/Location', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <div style={{ height: '300px' }}>
        <Location
          apiKey='AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc'
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
