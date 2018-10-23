import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Button, Container, Row, Column } from '../../../components';
import Readme from '../../../components/Button/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Elements/Button', module);

stories.add(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button }}>
        <Button tooltip="Tis is a button tooltip">
          <i className="fa fa-home" />
          <span className="ml-1">Home</span>
        </Button>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Buttons',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Buttons"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button, Container }}>
        <Container>
          <Button className="mr-1" color="primary">
            Primary
          </Button>
          <Button className="mr-1" color="secondary">
            Secondary
          </Button>
          <Button className="mr-1" color="success">
            Success
          </Button>
          <Button className="mr-1" color="danger">
            Danger
          </Button>
          <Button className="mr-1" color="warning">
            Warning
          </Button>
          <Button className="mr-1" color="info">
            Info
          </Button>
          <Button className="mr-1" color="light">
            Light
          </Button>
          <Button className="mr-1" color="dark">
            Dark
          </Button>
          <Button className="mr-1" color="link">
            Link
          </Button>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Buttons Outline',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Outline Buttons"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button, Container }}>
        <Container>
          <Button className="mr-1" outline color="primary">
            Primary
          </Button>
          <Button className="mr-1" outline color="secondary">
            Secondary
          </Button>
          <Button className="mr-1" outline color="success">
            Success
          </Button>
          <Button className="mr-1" outline color="danger">
            Danger
          </Button>
          <Button className="mr-1" outline color="warning">
            Warning
          </Button>
          <Button className="mr-1" outline color="info">
            Info
          </Button>
          <Button className="mr-1" outline color="light">
            Light
          </Button>
          <Button className="mr-1" outline color="dark">
            Dark
          </Button>
          <Button className="mr-1" outline color="link">
            Link
          </Button>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Size',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Size"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button, Container }}>
        <div>
          <Button className="mr-1" rounded outline={false} circle={false} color="primary" size="sm">
            Small button
          </Button>
          <Button
            className="mr-1"
            rounded
            outline={false}
            circle={false}
            color="secondary"
            size="sm"
          >
            Small button
          </Button>
        </div>
      </PropsManager>
      <div className="mt-5">
        <PropsManager scope={{ React, Button, Container }}>
          <div>
            <Button
              className="mr-1"
              rounded
              outline={false}
              circle={false}
              color="primary"
              size="lg"
            >
              Large button
            </Button>
            <Button
              className="mr-1"
              rounded
              outline={false}
              circle={false}
              color="secondary"
              size="lg"
            >
              Large button
            </Button>
          </div>
        </PropsManager>
      </div>
    </ThemeSelector>
  ))
);
stories.add(
  'Active State',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Active State"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <Row>
        <Column className="col-12 col-md-6 pb-5">
          <PropsManager scope={{ React, Button, Container }}>
            <div>
              <Button
                className="mr-1"
                rounded
                outline={false}
                circle={false}
                color="primary"
                disabled
              >
                Disabled button
              </Button>
              <Button
                className="mr-1"
                rounded
                outline={false}
                circle={false}
                color="secondary"
                disabled
              >
                Disabled button
              </Button>
            </div>
          </PropsManager>
        </Column>
        <Column className="col-12 col-md-6 pb-5">
          <PropsManager scope={{ React, Button, Container }}>
            <div>
              <Button
                className="mr-1"
                rounded
                outline={false}
                circle={false}
                color="primary"
                active
              >
                Active button
              </Button>
              <Button
                className="mr-1"
                rounded
                outline={false}
                circle={false}
                color="secondary"
                active
              >
                Active button
              </Button>
            </div>
          </PropsManager>
        </Column>
      </Row>
    </ThemeSelector>
  ))
);
