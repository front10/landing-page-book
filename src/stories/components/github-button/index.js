import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { GithubButton } from '../../../components';
import Readme from '../../../components/GithubButton/README.md';

const stories = storiesOf('Components/Github button', module);

const options = {
  fork: 'Fork',
  follow: 'Follow',
  star: 'Star',
  download: 'Download',
  watch: 'Watch',
  issue: 'Issue'
};

stories.addDecorator(withKnobs);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType={select('Type of buton', options, 'follow')}
        btnText={text('Btn text', 'Follow')}
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
    </ThemeSelector>
  ))
);

stories.add(
  'All',
  withReadme([Readme], () => (
    <ThemeSelector>
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="fork"
        btnText="Fork"
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="follow"
        btnText="Follow"
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="star"
        btnText="Stars"
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="watch"
        btnText="Watch"
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="issue"
        btnText="Issues"
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
      <GithubButton
        username="chubin"
        repository="cheat.sh"
        btnType="download"
        btnText="Download"
        showCounter={false}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
      />
    </ThemeSelector>
  ))
);
