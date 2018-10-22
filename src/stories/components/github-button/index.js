import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { GithubButton, Code } from '../../../components';
import Readme from '../../../components/GithubButton/README.md';

const stories = storiesOf('Components/GithubButton', module);

const options = {
  fork: 'Fork',
  follow: 'Follow',
  star: 'Star',
  download: 'Download',
  watch: 'Watch',
  issue: 'Issue'
};

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Github Buttons"
        description="Showcase the success of any GitHub repo or user with these simple, static buttons with dynamic counts."
      />
      <PropsManager scope={{ React, GithubButton }}>
        <GithubButton
          username="front10"
          repository="landing-page-book"
          btnType="star"
          btnText="stars"
        />
      </PropsManager>
    </ThemeSelector>
  ))
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
      <PropsManager scope={{ React, GithubButton }}>
        <div>
          <div className="mb-3">
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="fork"
              btnText="Fork"
            />
          </div>
          <div className="mb-3">
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="follow"
              btnText="Follow"
            />
          </div>
          <div className="mb-3">
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="star"
              btnText="Stars"
            />
          </div>
          <div className="mb-3">
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="watch"
              btnText="Watch"
            />
          </div>
          <div className="mb-3">
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="issue"
              btnText="Issues"
            />
          </div>
          <div>
            <GithubButton
              username="front10"
              repository="landing-page-book"
              btnType="download"
              btnText="Download"
              showCounter={false}
            />
          </div>
        </div>
      </PropsManager>
    </ThemeSelector>
  ))
);
