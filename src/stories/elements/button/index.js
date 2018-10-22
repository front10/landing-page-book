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
        outline={boolean('Outline', false)}
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
  'By Semantic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <Button className={text('Class name', 'btn-primary')}>Primary</Button>
      <Button className={text('Class name', 'btn-secondary')}>Secondary</Button>
      <Button className={text('Class name', 'btn-success')}>Success</Button>
      <Button className={text('Class name', 'btn-danger')}>Danger</Button>
      <Button className={text('Class name', 'btn-primary')}>Warning</Button>
      <Button className={text('Class name', 'btn-info')}>Info</Button>
      <Button className={text('Class name', 'btn-light')}>Light</Button>
      <Button className={text('Class name', 'btn-dark')}>Dark</Button>
      <Button className={text('Class name', 'btn-link')}>Link</Button>
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
  'Outline',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Button"
        description="The <button> tag defines a clickable button.

        Inside a <button> element you can put content, like text or images. This is the difference between this element and buttons created with the <input> element.
        
        Tip: Always specify the type attribute for a <button> element. Different browsers use different default types for the <button> element."
      />
      <Button className={text('Class name', 'btn-primary')} outline={boolean('Outline', true)}>
        Primary
      </Button>
      <Button className={text('Class name', 'btn-secondary')} outline={boolean('Outline', true)}>
        Secondary
      </Button>
      <Button className={text('Class name', 'btn-success')} outline={boolean('Outline', true)}>
        Success
      </Button>
      <Button className={text('Class name', 'btn-danger')} outline={boolean('Outline', true)}>
        Danger
      </Button>
      <Button className={text('Class name', 'btn-primary')} outline={boolean('Outline', true)}>
        Warning
      </Button>
      <Button className={text('Class name', 'btn-info')} outline={boolean('Outline', true)}>
        Info
      </Button>
      <Button className={text('Class name', 'btn-light')} outline={boolean('Outline', true)}>
        Light
      </Button>
      <Button className={text('Class name', 'btn-dark')} outline={boolean('Outline', true)}>
        Dark
      </Button>
      <Button className={text('Class name', 'btn-link')} outline={boolean('Outline', true)}>
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
