import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Copyright } from '../../../components';
import Readme from '../../../components/Copyright/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

setAddon(JSXAddon);
const stories = storiesOf('Components/Copyright', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Copyright"
        description="the exclusive legal right, given to an originator or an assignee to print, publish, perform, film, or record literary, artistic, or musical material, and to authorize others to do the same, Protect the content of your website."
      />
      <Copyright
        showAllRightText={boolean('Show all right text', true)}
        showCopyRightSymbol={boolean('Show copy right symbol', true)}
        showCopyRightText={boolean('Show copy right text', true)}
        showYear={boolean('Show year', true)}
        allRightText={text('All right text', 'All rights reserved')}
        copyRightText={text('Copy right text', 'Copyright')}
        text={text('Text', 'Fron10, LLC')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
