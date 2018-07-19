import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, color, number} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Location} from '../../../components';
import Readme from '../../../components/Location/README.md';

const markers = [{
	icon: "fa-map-marker",
	color: "#d20000",
	lat: 26.5,
	lng: -80.2
}, {
	icon: "fa-map-marker",
	color: "#d2a430",
	lat: 26.6,
	lng: -80.3
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Location', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <div style={{height: "300px"}}>
      <Location
        apiKey="AIzaSyAP5ycGdpjGBUU-u6vZ8fwx_ybbyzgYXfM"
        lat={26.5}
        lng={-80.2}
        zoom={10}
        markers={markers}
      />
    </div>
  </ThemeSelector>
	);
}));