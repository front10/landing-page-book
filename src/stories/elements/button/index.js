import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Button, Container, Icon } from '../../../components';
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
      <PropsManager scope={{ React, Button, Icon }}>
        {`<Button tooltip="Tis is a button tooltip">
    <Icon icon="fa fa-home" /> Home
</Button>`}
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
      <PropsManager scope={{ React, Button }}>
        {`<React.Fragment>
    <Button className="mr-1" color="primary"> Primary </Button>
    <Button className="mr-1" color="secondary"> Secondary </Button>
    <Button className="mr-1" color="success"> Success </Button>
    <Button className="mr-1" color="danger"> Danger </Button>
    <Button className="mr-1" color="warning"> Warning </Button>
    <Button className="mr-1" color="info"> Info </Button>
    <Button className="mr-1" color="light"> Light </Button>
    <Button className="mr-1" color="dark"> Dark </Button>
    <Button className="mr-1" color="link"> Link </Button>
</React.Fragment>`}
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
        {`<React.Fragment>
    <Button className="mr-1" outline color="primary">Primary</Button>
    <Button className="mr-1" outline color="secondary">Secondary</Button>
    <Button className="mr-1" outline color="success">Success</Button>
    <Button className="mr-1" outline color="danger">Danger</Button>
    <Button className="mr-1" outline color="warning">Warning</Button>
    <Button className="mr-1" outline color="info">Info</Button>
    <Button className="mr-1" outline color="light">Light</Button>
    <Button className="mr-1" outline color="dark">Dark</Button>
    <Button className="mr-1" outline color="link">Link</Button>
</React.Fragment>`}
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
        {`<React.Fragment>
    <Button className="mr-1" color="primary" size="sm">Small button</Button>
    <Button className="mr-1" color="secondary" size="sm">Small button</Button>
</React.Fragment>`}
      </PropsManager>
      <div className="mt-5">
        <PropsManager scope={{ React, Button, Container }}>
          {`<React.Fragment>
    <Button className="mr-1" color="primary" size="lg">Large button</Button>
    <Button className="mr-1" color="secondary" size="lg">Large button</Button>
</React.Fragment>`}
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
        description="The <button> tag defines a clickable button. Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <PropsManager scope={{ React, Button, Container }}>
        {`<React.Fragment>
    <Button className="mr-1" color="primary" disabled>Disabled button</Button>
    <Button className="mr-1" color="secondary" disabled>Disabled button</Button>
</React.Fragment>`}
      </PropsManager>
      <div className="mt-5">
        <PropsManager scope={{ React, Button, Container }}>
          {`<React.Fragment>
    <Button className="mr-1" color="primary" active>Active button</Button>
    <Button className="mr-1" color="secondary" active>Active button</Button>
</React.Fragment>`}
        </PropsManager>
      </div>
    </ThemeSelector>
  ))
);
