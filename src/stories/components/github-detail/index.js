import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { GithubDetail } from '../../../components';
import Readme from '../../../components/GithubDetail/README.md';

const stories = storiesOf('Components', module);

const options = {
  fork: 'Fork',
  follow: 'Follow',
  star: 'Star',
  download: 'Download',
  watch: 'Watch',
  issue: 'Issue',
};

stories.addDecorator(withKnobs);

stories.add('GithubDetail', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <GithubDetail
        username="chubin"
        repository="cheat.sh"
        btntype={select('Type of buton', options, 'follow')}
        btnText={text('Btn text', 'Follow')}
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
    </ThemeSelector>
  );
}));
