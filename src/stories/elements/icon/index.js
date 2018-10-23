import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Icon, Column, Row, Container } from '../../../components';
import Readme from '../../../components/Icon/README.md';

const stories = storiesOf('Elements/Icon', module);

stories.add(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <PropsManager scope={{ React, Row, Column, Container, Icon }}>
        <Container>
          <Row>
            <Column className="text-center">
              <Icon icon="fa fa-cubes" className="text-secondary fa-3x" />
            </Column>
          </Row>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Different Sizes',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <PropsManager scope={{ React, Row, Column, Container, Icon }}>
        <Container>
          <Row>
            <Column className="text-center">
              <Icon icon="fa fa-home" className="fa-1x" />
              <Icon icon="fa fa-home" className="fa-2x" />
              <Icon icon="fa fa-home" className="fa-3x" />
              <Icon icon="fa fa-home" className="fa-4x" />
              <Icon icon="fa fa-home" className="fa-5x" />
            </Column>
          </Row>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Different Colors',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <PropsManager scope={{ React, Row, Column, Container, Icon }}>
        <Container>
          <Row>
            <Column className="text-center">
              <Icon icon="fa fa-home" className="fa-1x text-primary" />
              <Icon icon="fa fa-home" className="fa-2x text-secondary" />
              <Icon icon="fa fa-home" className="fa-3x text-success" />
              <Icon icon="fa fa-home" className="fa-4x text-danger" />
              <Icon icon="fa fa-home" className="fa-5x text-warning" />
            </Column>
          </Row>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'All Icons',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <PropsManager scope={{ React, Row, Column, Container, Icon }}>
        <Container>
          <Row>
            <Column className="text-left">
              <Icon icon="fa fa-home" className="fa-2x mr-3" />
              <Icon icon="fa fa-cubes" className="fa-2x mr-3" />
              <Icon icon="fa fa-shower" className="fa-2x mr-3" />
              <Icon icon="fa fa-user-o" className="fa-2x mr-3" />
              <Icon icon="fa fa-anchor" className="fa-2x mr-3" />
            </Column>
          </Row>
        </Container>
      </PropsManager>
    </ThemeSelector>
  ))
);
