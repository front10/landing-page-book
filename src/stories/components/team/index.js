import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, color } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { def, tb, shadow, ishadow } from '../../mock/components/codes/team';

import { Team, Code } from '../../../components';
import Readme from '../../../components/Team/README.md';

import members from '../../mock/components/team';

setAddon(JSXAddon);

const stories = storiesOf('Components/Team', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <Team
        showBorder={boolean('Show border', false)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', false)}
        socialGray={boolean('Social gray', false)}
        shadow={boolean('Shadow', false)}
        imageShadow={boolean('Image shadow', false)}
        topColor={color('Top color', 'transparent')}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
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
  'Top background',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <Team
        showBorder={boolean('Show border', true)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', true)}
        socialGray={boolean('Social gray', false)}
        shadow={boolean('Shadow', false)}
        imageShadow={boolean('Image shadow', false)}
        topColor={color('Top color', '#E47070')}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
      />
      <div className="mt-4">
        <Code
          code={tb}
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
  'With shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <Team
        showBorder={boolean('Show border', true)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', true)}
        socialGray={boolean('Social gray', false)}
        shadow={boolean('Shadow', true)}
        imageShadow={boolean('Image shadow', false)}
        topColor={color('Top color', '#E47070')}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
      />
      <div className="mt-4">
        <Code
          code={shadow}
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
  'With image shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Team"
        description="Teamwork helps solve problems. Collaboration within a group can help solve difficult problems. do not forget to recognize the members of your team"
      />
      <Team
        showBorder={boolean('Show border', true)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', true)}
        socialGray={boolean('Social gray', false)}
        shadow={boolean('Shadow', false)}
        imageShadow={boolean('Image shadow', true)}
        topColor={color('Top color', '#E47070')}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
      />
      <div className="mt-4">
        <Code
          code={ishadow}
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
