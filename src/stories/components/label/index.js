import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Label } from '../../../components';
import Readme from '../../../components/Label/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Label',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Label"
        description="The Label defines a label for an <Input> element.
      The <Label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <Label> element, it toggles the control.      
      The for attribute of the <Label> should be equal to the id attribute of the related element to bind them together."
      />
      <Label
        colon={boolean('Colon', false)}
        className={text('Class name', '')}
        label={text('Label', 'This is a label')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
