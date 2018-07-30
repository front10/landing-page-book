import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Input } from '../../../components';
import Readme from '../../../components/Input/README.md';

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.add('Input', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Input
        labelColon={boolean('Label colon', false)}
        className={text('Class name', '')}
        type={select('Type', {
          text: 'text',
          number: 'number',
          email: 'email',
          textarea: 'textarea',
        })}
        name={text('Name', 'myInput')}
        value={text('Value', 'This is an input')}
        placeholder={text('Placeholder', 'Enter a value')}
        label={text('Label', 'Input label')}
      />
    </ThemeSelector>
  );
}));
