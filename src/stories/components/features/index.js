import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import jsxConfig from '../../mock/jsxConfig';
import { Features, Code } from '../../../components';
import Readme from '../../../components/Features/README.md';

import { def, shadow, image } from '../../mock/components/codes/features';
import features from '../../mock/components/features';

setAddon(JSXAddon);
const stories = storiesOf('Components/Features', module);
const bcolors = {
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info',
  light: 'light',
  dark: 'dark',
  white: 'white'
};
stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <Features
        shadow={boolean('Shadow', false)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', false)}
        imageBorder={boolean('Image border', false)}
        imageShadow={boolean('Image shadow', false)}
        showFooter={boolean('Show footer', true)}
        outlineButton={boolean('Outline button', true)}
        buttonColor={select('Color', bcolors, 'primary')}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={features}
      />
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
  'Image & title',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="Image & title"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <Features
        shadow={boolean('Shadow', false)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', false)}
        imageCircle={boolean('Image circle', false)}
        imageBorder={boolean('Image border', false)}
        imageShadow={boolean('Image shadow', false)}
        showFooter={boolean('Show footer', false)}
        outlineButton={boolean('Outline button', true)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={features}
      />
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
  'With shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="With shadow"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <Features
        shadow={boolean('Shadow', true)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', false)}
        imageBorder={boolean('Image border', false)}
        imageShadow={boolean('Image shadow', false)}
        showFooter={boolean('Show footer', false)}
        outlineButton={boolean('Outline button', true)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={features}
      />
      <div className="mt-4">
        <Code
          code={shadow}
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
  'With image shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="With image shadow"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <Features
        shadow={boolean('Shadow', false)}
        showTitle={boolean('Show Title', true)}
        showImage={boolean('Show image', true)}
        showSubtitle={boolean('Show Subtitle', false)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', true)}
        imageShadow={boolean('Image shadow', true)}
        showFooter={boolean('Show footer', false)}
        outlineButton={boolean('Outline button', true)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        features={features}
      />
      <div className="mt-4">
        <Code
          code={image}
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
