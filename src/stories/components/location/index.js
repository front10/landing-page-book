import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Location } from '../../../components';
import Readme from '../../../components/Location/README.md';

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

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Location"
        description="A simple way to point out a place will be easier for users to locate."
      />
      <PropsManager scope={{ React, Location }}>
        <div style={{ height: '300px' }}>
          <Location
            apiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"
            lat={26.5}
            lng={-80.2}
            zoom={10}
            markers={markers}
          />
        </div>
      </PropsManager>
    </ThemeSelector>
  ))
);
