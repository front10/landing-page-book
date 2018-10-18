import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
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
      <StoryHeader
        name="Github Buttons"
        description="Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts."
      />
      <GithubButton
        username="front10"
        repository="landing-page-book"
        btnType={select('Type of buton', options, 'star')}
        btnText={text('Btn text', 'stars')}
        showCounter={boolean('Show count', true)}
        showBtnText={boolean('Show button text', true)}
        showGithubIcon={boolean('Show Github icon', false)}
        loadingClass={text('Loading class', 'fa fa-circle-o-notch fa-spin')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'All',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Github Buttons"
        storyName="All"
        description="Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts."
      />
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="fork"
          btnText="Fork"
          showCounter={boolean('Show count', true)}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="follow"
          btnText="Follow"
          showCounter={boolean('Show count', true)}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="star"
          btnText="Stars"
          showCounter={boolean('Show count', true)}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="watch"
          btnText="Watch"
          showCounter={boolean('Show count', true)}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="issue"
          btnText="Issues"
          showCounter={boolean('Show count', true)}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
      <div className="mb-3">
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="download"
          btnText="Download"
          showCounter={false}
          showBtnText={boolean('Show button text', true)}
          showGithubIcon={boolean('Show Github icon', false)}
        />
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
