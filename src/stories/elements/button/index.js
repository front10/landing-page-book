import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Button, Container } from '../../../components';
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
  'Bootstrap',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Bootstrap style"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button }}>
        <Button tooltip="Tis is a button tooltip" color="primary">
          <i className="fa fa-home" />
          <span className="ml-1">Home</span>
        </Button>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'All Bootstrap',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="All Bootstrap"
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
  'All Bootstrap Outline',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="All Bootstrap Outline"
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
