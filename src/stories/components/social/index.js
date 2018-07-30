import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Social } from '../../../components';
import Readme from '../../../components/Social/README.md';

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('Social', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Social
        gray={boolean('Use gray', false)}
        type={select('Button type', {
          email: 'email',
          facebook: 'facebook',
          google: 'google',
          linkedin: 'linkedin',
          livejournal: 'livejournal',
          ok: 'ok',
          pinterest: 'pinterest',
          reddit: 'reddit',
          telegram: 'telegram',
          tumblr: 'tumblr',
          twitter: 'twitter',
          viber: 'viber',
          vk: 'vk',
          whatsapp: 'whatsapp',
        }, 'facebook')}
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
    </ThemeSelector>
  );
}));
