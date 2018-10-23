import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { ContactUs, Column, Container, Row } from '../../../components';
import Readme from '../../../components/ContactUs/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/ContactUs', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Contact Us"
        description="Simple contact form, so that your users communicate easily through your website."
      />
      <PropsManager scope={{ React, Row, Container, Column, ContactUs }}>
        <Container>
          <Row>
            <Column className="col-sm-8 col-md-6 col-lg-4">
              <ContactUs
                showText
                showPlaceholder
                apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"
              />
            </Column>
          </Row>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);
