import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Image, Container, Row, Column } from '../../../components';
import Readme from '../../../components/Image/README.md';

const stories = storiesOf('Elements', module);

stories.addWithJSX(
  'Image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image"
        description="Simple element image to use on your website. Images can improve the design and the appearance of a web page."
      />
      <Container>
        <Row>
          <Column>
            <PropsManager scope={{ React, Image }}>
              <Image
                alt="This is an image example"
                src="images/backers/woman.svg"
                tooltip="This is a woman"
                width="200"
              />
            </PropsManager>
          </Column>
        </Row>
      </Container>
    </ThemeSelector>
  ))
);
