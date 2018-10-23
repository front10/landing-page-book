import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import { Features } from '../../../components';
import Readme from '../../../components/Features/README.md';
import features from '../../mock/components/features';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

const stories = storiesOf('Components/Features', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <PropsManager scope={{ React, Features }}>
        <Features
          shadow={false}
          showTitle
          showImage
          showSubtitle={false}
          showSummary
          imageCircle={false}
          imageBorder={false}
          imageShadow={false}
          showFooter
          outlineButton
          contentAlign="center"
          features={features}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Image & title',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="Image & title"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <PropsManager scope={{ React, Features }}>
        <Features
          shadow={false}
          showTitle
          showImage
          showSubtitle={false}
          showSummary={false}
          imageCircle={false}
          imageBorder={false}
          imageShadow={false}
          showFooter={false}
          outlineButton
          contentAlign="center"
          features={features}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="With shadow"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <PropsManager scope={{ React, Features }}>
        <Features
          shadow
          showTitle
          showImage
          showSubtitle={false}
          showSummary
          imageCircle={false}
          imageBorder={false}
          imageShadow={false}
          showFooter={false}
          outlineButton
          contentAlign="center"
          features={features}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image shadow',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Features"
        storyName="With image shadow"
        description="Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service."
      />
      <PropsManager scope={{ React, Features }}>
        <Features
          shadow={false}
          showTitle
          showImage
          showSubtitle={false}
          showSummary
          imageCircle
          imageBorder
          imageShadow
          showFooter={false}
          outlineButton
          contentAlign="center"
          features={features}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);
