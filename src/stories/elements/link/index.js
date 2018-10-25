import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Link, Icon, Container } from '../../../components';
import Readme from '../../../components/Link/README.md';

const stories = storiesOf('Elements/Typography/Link', module);

stories.add(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Link"
        storyName="Basic"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <PropsManager scope={{ React, Link }}>
        {`<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">This is a link</Link>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Disabled',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Link"
        storyName="Disabled"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <PropsManager scope={{ React, Link }}>
        {`<Link disabled href="https://front10.com">This is disabled</Link>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Link"
        storyName="With icon"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <PropsManager scope={{ React, Link, Icon }}>
        {`<Link href="https://front10.com" tooltip="This is a tooltip" target="_blank">
    <Icon icon="fa fa-home" />
    <span>This is disabled</span>
</Link>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Like a button',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Link"
        storyName="Like  a button"
        description="Link are hyperlink. You can click on a link and jump to another document. When you move the mouse over a link, the mouse arrow will turn into a little hand."
      />
      <PropsManager scope={{ React, Link, Icon, Container }}>
        {`<React.Fragment>
    <Link className="btn btn-primary mr-1" href="https://github.com/front10/landing-page-book" tooltip="This is a tooltip" target="_blank">
        <Icon icon="fa fa-github" /> View code on Github
    </Link>
    <Link className="btn btn-outline-success mr-1" href="https://front10.com/#contactForm" tooltip="Contact us" target="_blank">
        <Icon icon="fa fa-info-circle" /> Contact us
    </Link>
</React.Fragment>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
