import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Video, Code } from '../../../components';
import Readme from '../../../components/Video/README.md';
import def from '../../mock/components/codes/video';

setAddon(JSXAddon);

const stories = storiesOf('Components/Video', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Video"
        description="Now you can show video of vimeo, youtube and many other platforms very easily on your website."
      />
      <Video
        playing={boolean('Playing', false)}
        loop={boolean('Loop', false)}
        controls={boolean('Controls', false)}
        muted={boolean('Muted', false)}
        volume={number('Volume', 1)}
        source={text('Source', 'https://youtu.be/dCrLwWdju68')}
      />
      <div className="mt-4 pt-4">
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
