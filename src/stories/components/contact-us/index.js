import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { ContactUs, Column, Container, Row, Code } from '../../../components';
import Readme from '../../../components/ContactUs/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/contactus';

setAddon(JSXAddon);
const stories = storiesOf('Components/ContactUs', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Contact Us"
        description="Simple contact form, so that your users communicate easily through your website."
      />
      <Container>
        <Row>
          <Column className="col-sm-8 col-md-6 col-lg-4">
            <ContactUs
              showText={boolean('Show text', true)}
              showPlaceholder={boolean('Show placeholder', false)}
              loading={boolean('Sending', false)}
              name={text('Name value', '')}
              mail={text('Email value', '')}
              phone={text('Phone value', '')}
              message={text('Message value', '')}
              nameText={text('Name placeholder', 'Your Name')}
              mailText={text('Email placeholder', 'Your email')}
              messageText={text('Message placeholder', 'Your Message')}
              phoneText={text('Phone placeholder', 'Your Phone')}
              submitButtonText={text('Submit placeholder', 'Submit')}
              submitButtonAlign={select(
                'Submit align',
                {
                  center: 'center',
                  left: 'left',
                  right: 'right'
                },
                'center'
              )}
              apiUrl={text(
                'Api url',
                'https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno'
              )}
              onSubmit={() => {}}
              onApiSuccess={() => {}}
              onApiFail={() => {}}
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
