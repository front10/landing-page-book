import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, number, boolean, array} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {GithubDetail} from '../../../components';
import Readme from '../../../components/GithubDetail/README.md';

const stories = storiesOf('Components', module);


stories.addDecorator(withKnobs);

stories.add('GithubDetail', withReadme([Readme], () => {
return (
  <ThemeSelector>
    <GithubDetail 
      username={text("Username", "chubin")}
      repository={text("Repository", "cheat.sh")}
      showFollow={boolean("Show Followers", true)}
      showWatch={boolean("Show Watchers", true)}
      showStar={boolean("Show Stars", true)}
      showFork={boolean("Show Forks", true)}
      showIssue={boolean("Show Issues", true)}
      showDownload={boolean("Show Downloads", true)}
      FollowText={text("Follow Text", "Follow")}
      WatchText={text("Watch Text", "Watch")}
      StarText={text("Start Text", "Start")}
      ForkText={text("Fork Text", "Fork")}
      IssueText={text("Issue text", "Issue")}
      DownloadText={text("Download Text", "Download")}
      showFollowCount={boolean("Show Followers count", true)}
      showWatchCount={boolean("Show Watchers count", true)}
      showStarCount={boolean("Show Stars count", true)}
      showForkCount={boolean("Show Forks count", true)}
      showIssueCount={boolean("Show Issues count", true)}
      showDownloadCount={boolean("Show Downloads count", true)}
    />
  </ThemeSelector>
);
}));
