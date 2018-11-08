import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Image, Container, Row, Column } from '../../../components';
import Readme from '../../../components/Image/README.md';

const stories = storiesOf('Elements/Image', module);

stories.add(
  'Image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image"
        description="Simple element image to use on your website. Images can improve the design and the appearance of a web page."
      />
      <PropsManager scope={{ React, Image }}>
        {`<Image alt="This is an image example" src="images/backers/woman.svg" tooltip="This is a woman" width="200"/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Responsive Image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image"
        storyName="Responsive Image"
        description="Images in Bootstrap are made responsive with .img-fluid. max-width: 100%; and height: auto; are applied to the image so that it scales with the parent element."
      />

      <PropsManager scope={{ React, Image }}>
        {`<Image alt="Responsive image example" src="images/image/214210-P0L8ES-375.jpg" tooltip="This is our galaxy" width="100%"/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Aligning images',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image"
        storyName="Aligning images"
        description="Align images with the helper float classes or text alignment classes. block-level images can be centered using the .mx-auto margin utility class."
      />
      <Container>
        <Row>
          <Column>
            <PropsManager scope={{ React, Image }}>
              {`<React.Fragment>
      <Image
          alt="This is an image example"
          src="images/backers/astronaut.svg"
          tooltip="Float left"
          width="150"
          className="float-left"
      />
      <Image
          alt="This is an image example"
          src="images/backers/doctor.svg"
          tooltip="Float right"
          width="150"
          className="float-right"
      />
      <div className="clearfix"/>
</React.Fragment>`}
            </PropsManager>
          </Column>
        </Row>
        <Row>
          <Column className="mt-5">
            <PropsManager scope={{ React, Image }}>
              {`<React.Fragment>
      <Image 
          alt="This is an image example" src="images/backers/astronaut.svg" 
          tooltip="Centered with MX-AUTO" width="150" className="mx-auto d-block"
      />
      <div className="text-center mt-5">
          <Image 
              alt="This is an image example" src="images/backers/doctor.svg" 
              tooltip="Centered with TEXT-CENTER" width="150"
          />
      </div>
</React.Fragment>`}
            </PropsManager>
          </Column>
        </Row>
      </Container>
    </ThemeSelector>
  ))
);
