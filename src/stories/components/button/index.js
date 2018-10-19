import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Button } from '../../../components';
import Readme from '../../../components/Button/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

setAddon(JSXAddon);
const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Button',
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
    </ThemeSelector>
  )),
  jsxConfig
);
