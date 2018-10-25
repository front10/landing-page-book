import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { ContactInfo } from '../../../components';
import Readme from '../../../components/ContactInfo/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/ContactInfo', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Contact Info"
        description="It is always important to have the most information of your contacts, our component provides it"
      />
      <PropsManager colColumn="col-12 col-md-5" scope={{ React, ContactInfo }}>
        {`<ContactInfo
    showBorder
    showIcons
    lat={26.5}
    lng={-80.2}
    locationApiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"
    address="9728 Birchwood St. Navarre, FL 32566"
    email="contact@front10.com"
    phone="+001 3521 4587"
    mobile="+001 3521 4587"
    fax="208-658744"
    website="www.front10.com"
    contentAlign="left"
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
