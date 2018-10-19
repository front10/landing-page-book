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

const stories = storiesOf('Elements', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Icon',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader name="Icon" description="Icon element." />
      <Container>
        <Row>
          <Column className="text-center">
            <Icon
              icon={text('Icon', 'fa fa-home')}
              className={text('Class name', 'text-danger fa-5x')}
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
