import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Card, Link, Row, Column, Code } from '../../../components';
import Readme from '../../../components/Card/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import { def, subtitle, summary, footer, floating } from '../../mock/components/codes/card';

setAddon(JSXAddon);
const stories = storiesOf('Elements/Card', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', false)}
            imageBorder={boolean('Image border', false)}
            shadow={boolean('Shadow', false)}
            imageShadow={boolean('Image shadow', true)}
            summaryJustified={boolean('Summary justified', false)}
            title={text('Title', 'Sky')}
            subTitle={text('Sub title', '')}
            summary={text(
              'Summary',
              'Sky is often defined as the space in which the stars move and by visual effect seems to surround the Earth. In astronomy, sky is synonymous with the celestial sphere: an imaginary vault on which the Sun, stars, planets and the Moon are distributed.'
            )}
            image={text('Image', 'images/card/image1.jpg')}
            contentAlign={select(
              'Content align',
              {
                center: 'center',
                left: 'left',
                right: 'right'
              },
              'left'
            )}
          />
        </div>
      </div>
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
  'With Subtitle',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="With Subtitle"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', false)}
            imageBorder={boolean('Image border', false)}
            shadow={boolean('Shadow', false)}
            imageShadow={boolean('Image shadow', true)}
            summaryJustified={boolean('Summary justified', false)}
            title={text('Title', 'Neil Armstrong')}
            subTitle={text('Sub title', 'First man in the moon')}
            summary={text(
              'Summary',
              'American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor.'
            )}
            image={text('Image', 'images/card/image2.jpg')}
            contentAlign={select(
              'Content align',
              {
                center: 'center',
                left: 'left',
                right: 'right'
              },
              'left'
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        <Code
          code={subtitle}
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
  'Only summary',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="Only summary"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', false)}
            imageBorder={boolean('Image border', false)}
            shadow={boolean('Shadow', true)}
            imageShadow={boolean('Image shadow', true)}
            summaryJustified={boolean('Summary justified', true)}
            title={text('Title', '')}
            subTitle={text('Sub title', '')}
            summary={text(
              'Summary',
              'The galaxy of the Milky Way, or simply the Milky Way, is a spiral galaxy where the solar system is located and in turn the Earth is located. According to the observations, it has a mass of 10¹² solar masses and is a barred spiral.'
            )}
            image={text('Image', 'images/card/image3.jpg')}
            contentAlign={select(
              'Content align',
              {
                center: 'center',
                left: 'left',
                right: 'right'
              },
              'left'
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        <Code
          code={summary}
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
  'With Footer',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="With Footer"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', false)}
            imageBorder={boolean('Image border', false)}
            shadow={boolean('Shadow', false)}
            imageShadow={boolean('Image shadow', true)}
            summaryJustified={boolean('Summary justified', true)}
            title={text('Title', 'Saturn')}
            subTitle={text('Sub title', '')}
            summary={text(
              'Summary',
              'Saturn is the sixth planet in the solar system, the second in size and mass after Jupiter and the only one with a ring system visible from Earth. Its name comes from the Roman god Saturn. It is part of the so-called outer or gaseous planets.'
            )}
            image={text('Image', 'images/card/image4.jpg')}
            contentAlign={select(
              'Content align',
              {
                center: 'center',
                left: 'left',
                right: 'right'
              },
              'left'
            )}
          >
            <Row>
              <Column className="text-left">
                <Link href="https://es.wikipedia.org/wiki/Saturno_(planeta)" target="_blank">
                  See more
                </Link>
              </Column>
              <Column className="text-right">
                <span className="text-muted">21 views</span>
              </Column>
            </Row>
          </Card>
        </div>
      </div>
      <div className="mt-4">
        <Code
          code={footer}
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
  'Floating image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="Floating image"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', false)}
            imageCircle={boolean('Image cilcle', false)}
            imageBorder={boolean('Image border', false)}
            shadow={boolean('Shadow', false)}
            imageShadow={boolean('Image shadow', true)}
            summaryJustified={boolean('Summary justified', false)}
            title={text('Title', '')}
            subTitle={text('Sub title', '')}
            summary={text(
              'Summary',
              'A star is a luminous plasma sphere that maintains its shape thanks to its own gravity. The closest star to Earth is the Sun.'
            )}
            image={text('Image', 'images/card/image5.jpg')}
            contentAlign={select(
              'Content align',
              {
                center: 'center',
                left: 'left',
                right: 'right'
              },
              'center'
            )}
          />
        </div>
      </div>
      <div className="mt-4">
        <Code
          code={floating}
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
