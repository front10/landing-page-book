import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { ContactInfo, Row, Column } from '../../../components';
import Readme from '../../../components/ContactInfo/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'ContactInfo',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Row>
        <Column className="col col-md-5">
          <ContactInfo
            showBorder={boolean('Show border', true)}
            showIcons={boolean('Show icons', true)}
            lat={number('Latitude', 26.5)}
            lng={number('Longitude', -80.2)}
            locationApiKey={text('Location api key', 'AIzaSyAP5ycGdpjGBUU-u6vZ8fwx_ybbyzgYXfM')}
            address={text('Address', '9728 Birchwood St. Navarre, FL 32566')}
            email={text('Email', 'contact@front10.com')}
            phone={text('Phone', '+001 3521 4587')}
            mobile={text('Mobile', '+001 3521 4587')}
            fax={text('Fax', '208-658744')}
            website={text('Website', 'www.front10.com')}
            contentAlign={select(
              'Content align',
              { left: 'left', center: 'center', right: 'right' },
              'left'
            )}
          />
        </Column>
      </Row>
    </ThemeSelector>
  )),
  jsxConfig
);
