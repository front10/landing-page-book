import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Label } from '../../../components';
import Readme from '../../../components/Label/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Elements/Form', module);

stories.add(
  'Label',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Label"
        description="The Label defines a label for an <Input> element.
      The <Label> element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the <Label> element, it toggles the control.      
      The for attribute of the <Label> should be equal to the id attribute of the related element to bind them together."
      />
      <PropsManager scope={{ React, Label }}>
        <Label colon={false} className="" label="This is a label" />
      </PropsManager>
    </ThemeSelector>
  ))
);
