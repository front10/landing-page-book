import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import def from '../../mock/components/codes/icon';

import { Icon, Code, Column, Row, Container } from '../../../components';
import Readme from '../../../components/Icon/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements/Icon', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Basic',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column className="text-center">
            <Icon
              icon={text('Icon', 'fa fa-cubes')}
              className={text('Class name', 'text-secondary fa-3x')}
            />
          </Column>
        </Row>
      </Container>
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
  'Different Sizes',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column className="text-center">
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-1x')} />
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-2x')} />
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-3x')} />
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-4x')} />
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-5x')} />
          </Column>
        </Row>
      </Container>
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
  'Different Colors',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column className="text-center">
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'fa-1x text-primary')}
            />
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'fa-2x text-secondary')}
            />
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'fa-3x text-success')}
            />
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'fa-4x text-danger')}
            />
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'fa-5x text-warning')}
            />
          </Column>
        </Row>
      </Container>
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
  'All Icons',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column className="text-left">
            <Icon icon={text('Icon', 'fa fa-home')} className={text('Class name', 'fa-2x mr-3')} />
            <Icon icon={text('Icon', 'fa fa-cubes')} className={text('Class name', 'fa-2x mr-3')} />
            <Icon
              icon={text('Icon', 'fa fa-shower')}
              className={text('Class name', 'fa-2x mr-3')}
            />
            <Icon
              icon={text('Icon', 'fa fa-user-o')}
              className={text('Class name', 'fa-2x mr-3')}
            />
            <Icon
              icon={text('Icon', 'fa fa-anchor')}
              className={text('Class name', 'fa-2x mr-3')}
            />
          </Column>
        </Row>
      </Container>
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
