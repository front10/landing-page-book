import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Input } from '../../../components';
import Readme from '../../../components/Input/README.md';

const stories = storiesOf('Elements/Form', module);

stories.add(
  'Input',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Input"
        description="The Input specifies an input field where the user can enter data.
      <Input> elements are used within a <form> element to declare input controls that allow users to input data.      
      An input field can vary in many ways, depending on the type attribute."
      />
      <PropsManager scope={{ React, Input }}>
        <Input
          name="myInput"
          value="This is an input"
          placeholder="Enter a value"
          label="Input label"
          icon="fa fa-user"
        />
      </PropsManager>
    </ThemeSelector>
  ))
);
stories.add(
  'Size',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Input"
        storyName="Size"
        description="The Input specifies an input field where the user can enter data.
      <Input> elements are used within a <form> element to declare input controls that allow users to input data.      
      An input field can vary in many ways, depending on the type attribute."
      />
      <PropsManager scope={{ React, Input }}>
        <div>
          <div className="mb-2">
            <Input
              name="Large"
              value="This is an large input"
              placeholder="Enter a value"
              icon="fa fa-user"
              size="lg"
            />
          </div>
          <div className="mb-2">
            <Input
              name="Normal"
              value="This is an normal input"
              placeholder="Enter a value"
              icon="fa fa-user"
            />
          </div>
          <Input
            name="Small"
            value="This is an small input"
            placeholder="Enter a value"
            icon="fa fa-user"
            size="sm"
          />
        </div>
      </PropsManager>
    </ThemeSelector>
  ))
);
