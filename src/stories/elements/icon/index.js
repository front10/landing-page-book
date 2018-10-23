import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Icon, Column, Row, Container, Link } from '../../../components';
import Readme from '../../../components/Icon/README.md';
import icons from '../../mock/components/icons';

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
              <Icon icon="fa fa-cubes" className="fa-3x" />
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
      <Link
        href="https://fontawesome.com/v4.7.0/icons/"
        tooltip="View all icons"
        target="_blank"
        className="btn btn-primary float-right m-3"
      >
        View all icons
      </Link>
      <div className="clearfix" />
      <Container>
        <Row>
          {icons.map(icon => (
            <Column key={icon} className="col col-xs-3 col-sm-2 text-center">
              <div className="p-2 float-left">
                <Icon icon={icon} className="fa-2x" />
                <span style={{ fontSize: '12px' }} className="d-block">
                  {icon}
                </span>
              </div>
            </Column>
          ))}
        </Row>
      </Container>
    </ThemeSelector>
  ))
);
