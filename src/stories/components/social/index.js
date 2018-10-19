import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Social, Code } from '../../../components';
import Readme from '../../../components/Social/README.md';
import { def, all } from '../../mock/components/codes/social';

setAddon(JSXAddon);

const stories = storiesOf('Components/Social', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Social"
        description="Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks"
      />
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
        directLink={boolean('Direct Link', false)}
      />
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

stories.addWithJSX(
  'All',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Social"
        storyName="All social media buttons"
        description="Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks"
      />
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
      <div className="mt-4">
        <Code
          code={all}
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
