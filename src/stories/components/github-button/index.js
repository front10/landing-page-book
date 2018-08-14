import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { GithubButton } from '../../../components';
import Readme from '../../../components/GithubButton/README.md';

setAddon(JSXAddon);
const stories = storiesOf('Components/GithubButton', module);

const options = {
  fork: 'Fork',
  follow: 'Follow',
  star: 'Star',
  download: 'Download',
  watch: 'Watch',
  issue: 'Issue'
};

stories.addDecorator(withKnobs);

stories.addWithJSX(
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
  )),
  jsxConfig
);

stories.addWithJSX(
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
  )),
  jsxConfig
);
