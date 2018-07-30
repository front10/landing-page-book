import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Copyright } from '../../../components';
import Readme from '../../../components/Copyright/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Copyright', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Copyright
        showAllRightText={boolean('Show all right text', true)}
        showCopyRightSymbol={boolean('Show copy right symbol', true)}
        showCopyRightText={boolean('Show copy right text', true)}
        showYear={boolean('Show year', true)}
        allRightText={text('All right text', 'All rights reserved')}
        copyRightText={text('Copy right text', 'Copyright')}
        text={text('Text', 'Fron10, inc')}
      />
    </ThemeSelector>
  );
}));
