import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Link, Icon } from '../../../components';
import Readme from '../../../components/Link/README.md';

const stories = storiesOf('Elements', module);

stories.addWithJSX(
  'Link',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Link"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <PropsManager scope={{ React, Link, Icon }}>
        <Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">
          <Icon icon="fa fa-home" />
          <span>This is a link</span>
        </Link>
      </PropsManager>
    </ThemeSelector>
  ))
);
