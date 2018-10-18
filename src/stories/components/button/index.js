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
        description="Buttons allow users to take actions, and make choices, with a single tap."
      />
      <Button
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
