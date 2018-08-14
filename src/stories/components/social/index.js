import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Social } from '../../../components';
import Readme from '../../../components/Social/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Components/Social', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Social
        gray={boolean('Use gray', false)}
        type={select(
          'Button type',
          {
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
            whatsapp: 'whatsapp'
          },
          'facebook'
        )}
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'All',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Social
        gray={boolean('Use gray', false)}
        type="email"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="facebook"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="google"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="linkedin"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="livejournal"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="ok"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="pinterest"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="reddit"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="telegram"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="tumblr"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="twitter"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="viber"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="vk"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
      <Social
        gray={boolean('Use gray', false)}
        type="whatsapp"
        rounded={boolean('Rounded', true)}
        url={text('Url', 'https://front10.com')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
