import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Wizard, Container, Video, Gif, FormGroup, Input, Social } from '../../../components';
import Readme from '../../../components/Wizard/README.md';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const steps = [
  {
    name: 'Step 1',
    component: (
      <Container>
        <Video source="https://youtu.be/dCrLwWdju68" />
      </Container>
    )
  },
  {
    name: 'Step 2',
    component: (
      <Container>
        <Gif autoplay image="images/gif/write.gif" />
      </Container>
    )
  },
  {
    name: 'Step 3',
    component: (
      <form>
        <FormGroup>
          <Input label="Name" labelColon />
        </FormGroup>
        <FormGroup>
          <Input label="Email" labelColon type="email" />
        </FormGroup>
        <FormGroup>
          <Input label="Address" labelColon type="textarea" />
        </FormGroup>
        <Social url="https://front10.com" type="twitter" />
        <Social url="https://front10.com" type="linkedin" />
        <Social url="https://front10.com" type="google" />
        <Social url="https://front10.com" type="pinterest" />
      </form>
    )
  }
];

const stories = storiesOf('Components/Wizard', module);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Wizard"
        description="Easy way to make a wizard on your website. you can guide your users step by step."
      />
      <PropsManager scope={{ React, Wizard, Container, Gif, Social, FormGroup, Input, Video }}>
        <Wizard contentAlign="center" steps={steps} />
      </PropsManager>
    </ThemeSelector>
  )),
  jsxConfig
);
