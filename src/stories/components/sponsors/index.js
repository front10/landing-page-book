import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Sponsors, Code } from '../../../components';
import Readme from '../../../components/Sponsors/README.md';
import def from '../../mock/components/codes/sponsors';

setAddon(JSXAddon);

const stories = storiesOf('Components/Sponsors', module);

stories.addDecorator(withKnobs);

const sponsors = [
  {
    image: 'images/sponsors/facebook.png'
  },
  {
    image: 'images/sponsors/google.png'
  },
  {
    image: 'images/sponsors/twitter.png'
  },
  {
    image: 'images/sponsors/salesforce.png'
  },
  {
    image: 'images/sponsors/amazon.png'
  }
];

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Sponsors"
        description="A person or organization that provides funds for you project or activity, give them an acknowledgment."
      />
      <div className="container">
        <Sponsors
          ccsClassName={text('CssClassName', 'px-3')}
          gray={boolean('Use gray', true)}
          sponsors={sponsors}
        />
      </div>
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
