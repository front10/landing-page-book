import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { ContactInfo, Row, Column, Container, Code } from '../../../components';
import Readme from '../../../components/ContactInfo/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/contactinfo';

setAddon(JSXAddon);
const stories = storiesOf('Components/ContactInfo', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Contact Info"
        description="It is always important to have the most information of your contacts, our component provides it"
      />
      <Container>
        <Row>
          <Column className="col col-md-5">
            <ContactInfo
              showBorder={boolean('Show border', true)}
              showIcons={boolean('Show icons', true)}
              lat={number('Latitude', 26.5)}
              lng={number('Longitude', -80.2)}
              locationApiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"
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
      </Container>
      <div className="mt-4">
        <Code
          code={def}
          languageCode="jsx"
          readOnly
          collapsible
          collapsed
          showDeleteButton={false}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
