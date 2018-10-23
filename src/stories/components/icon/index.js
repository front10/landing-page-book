import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Icon, Column, Row, Container } from '../../../components';
import Readme from '../../../components/Icon/README.md';

const stories = storiesOf('Elements', module);

stories.add(
  'Icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column>
            <PropsManager scope={{ React, Icon }}>
              <Icon icon="fa fa-home" className="text-danger fa-5x" />
            </PropsManager>
          </Column>
        </Row>
      </Container>
    </ThemeSelector>
  ))
);
