import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Input } from '../../../components';
import Readme from '../../../components/Input/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Input',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Input"
        description="The Input specifies an input field where the user can enter data.
      <Input> elements are used within a <form> element to declare input controls that allow users to input data.      
      An input field can vary in many ways, depending on the type attribute."
      />
      <Input
        labelColon={boolean('Label colon', false)}
        className={text('Class name', '')}
        type={select(
          'Type',
          {
            color: 'color',
            text: 'text',
            number: 'number',
            email: 'email',
            textarea: 'textarea'
          },
          'text'
        )}
        name={text('Name', 'myInput')}
        value={text('Value', 'This is an input')}
        placeholder={text('Placeholder', 'Enter a value')}
        label={text('Label', 'Input label')}
        icon={text('Icon', 'fa fa-user')}
        iconAlign={select('Icon align', { left: 'left', right: 'right' }, 'left')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
