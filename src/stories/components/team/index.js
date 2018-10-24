import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { Team } from '../../../components';
import Readme from '../../../components/Team/README.md';
import members from '../../mock/components/team';

const stories = storiesOf('Components/Team', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <PropsManager scope={{ React, Team }}>
        {`<Team members={${JSON.stringify(members, null, 8)}} />`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Top background',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        storyName="Top background"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <PropsManager scope={{ React, Team }}>
        <Team topColor="#E47070" members={members} />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        storyName="With shadow"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <PropsManager scope={{ React, Team }}>
        <Team shadow topColor="#E47070" members={members} />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        storyName="With image shadow"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <PropsManager scope={{ React, Team }}>
        <Team imageShadow topColor="#E47070" members={members} />
      </PropsManager>
    </ThemeSelector>
  ))
);
