import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Card, Button } from '../../../components';
import Readme from '../../../components/Card/README.md';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

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
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Card"
        storyName="With childrens"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
      />
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <Card
            showBorder={boolean('Show border', true)}
            imageCircle={boolean('Image cilcle', true)}
            imageBorder={boolean('Image border', false)}
            title={text('Title', 'Front10 landing page')}
            subTitle={text('Sub title', 'This is a card example')}
            summary={text(
              'Summary',
              'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
            )}
            image={text('Image', 'https://www.softwarefx.com/products/images/icon-developer.png')}
            contentAlign={select('Content align', {
              center: 'center',
              left: 'left',
              right: 'right'
            })}
          >
            <Button className="mr-1" type="submit">
              See more...
            </Button>
          </Card>
        </div>
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
