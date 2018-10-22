import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import def from '../../mock/components/codes/image';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Image, Code, Container, Row, Column } from '../../../components';
import Readme from '../../../components/Image/README.md';

setAddon(JSXAddon);

const stories = storiesOf('Elements/Image', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Image"
        description="Simple element image to use on your website. Images can improve the design and the appearance of a web page."
      />
      <Container>
        <Row>
          <Column className="text-center">
            <Image
              border={boolean('Border', false)}
              rounded={boolean('Rounded', false)}
              shadow={boolean('Shadow', false)}
              alt={text('Alt', 'This is an image example')}
              src={text('Source', 'images/backers/woman.svg')}
              tooltip={text('Tooltip', 'This is a woman')}
              width={text('Width', '200')}
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
