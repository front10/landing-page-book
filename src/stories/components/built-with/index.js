import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { BuiltWith, Container } from '../../../components';
import Readme from '../../../components/BuiltWith/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/BuiltWith', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Built With"
        description="Libraries or projects that you used to achieve your goals."
      />
      <Container>
        <PropsManager scope={{ React, BuiltWith }}>
          {`<BuiltWith
    gray
    companies={[
        { image: 'images/buildwith/bootstrap.png' },
        { image: 'images/buildwith/browserstack.png' },
        { image: 'images/buildwith/jest.png' },
        { image: 'images/buildwith/react.png' },
        { image: 'images/buildwith/storybook.png' }
    ]}
/>`}
        </PropsManager>
      </Container>
    </ThemeSelector>
  ))
);
