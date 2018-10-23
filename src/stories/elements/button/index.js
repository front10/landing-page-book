import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Button, Code } from '../../../components';
import Readme from '../../../components/Button/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/button';

setAddon(JSXAddon);
const stories = storiesOf('Elements/Button', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <Button
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        disabled={boolean('Disabled', false)}
        loading={boolean('Loading', false)}
        tooltip={text('Tooltip', 'Tis is a button tooltip')}
        loadingClass={text('Loading class', 'fa fa-circle-o-notch fa-spin')}
        className={text('Class name', '')}
      >
        <i className="fa fa-home" />
        <span className="ml-1">Home</span>
      </Button>
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

stories.addWithJSX(
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
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="primary"
      >
        Primary
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="secondary"
      >
        Secondary
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="success"
      >
        Success
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="danger"
      >
        Danger
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="warning"
      >
        Warning
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="info"
      >
        Info
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="light"
      >
        Light
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="dark"
      >
        Dark
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="link"
      >
        Link
      </Button>
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

stories.addWithJSX(
  'Outline Buttons',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        storyName="Outline Buttons"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="primary"
      >
        Primary
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="secondary"
      >
        Secondary
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="success"
      >
        Success
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="danger"
      >
        Danger
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="warning"
      >
        Warning
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="info"
      >
        Info
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="light"
      >
        Light
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="dark"
      >
        Dark
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', true)}
        circle={boolean('Circle', false)}
        color="link"
      >
        Link
      </Button>
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
stories.addWithJSX(
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
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', false)}
        circle={boolean('Circle', false)}
        color="primary"
        size="sm"
      >
        Primary button
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', false)}
        circle={boolean('Circle', false)}
        color="secondary"
        size="sm"
      >
        Secondary button
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', false)}
        circle={boolean('Circle', false)}
        color="success"
        size="lg"
      >
        Success button
      </Button>
      <Button
        className={text('Class name', 'mr-1')}
        rounded={boolean('Rounded', true)}
        outline={boolean('Rounded', false)}
        circle={boolean('Circle', false)}
        color="danger"
        size="lg"
      >
        Danger button
      </Button>

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
