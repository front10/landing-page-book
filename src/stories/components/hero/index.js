/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, select, color } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Hero,
  Container,
  Image,
  Header,
  GithubButton,
  Button,
  Link,
  Row,
  Column,
  Icon
} from '../../../components';
import Readme from '../../../components/Hero/README.md';

import particles from '../../mock/components/particles';

setAddon(JSXAddon);

const stories = storiesOf('Components/Hero', module);

const buttons = [
  {
    text: 'TELL ME MORE',
    onClick: () => {}
  }
];

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <Hero
        isFixed={boolean('Fixed', true)}
        isCentered={boolean('Centered', true)}
        particles={boolean('With particles', true)}
        image={text('Image', 'https://c1.staticflickr.com/2/1845/43895099105_7329ee6bba_c.jpg')}
        opacity={number('Opacity', 1)}
        parallaxOffset={number('Parallax offset', 0)}
        overlayColor={color('Overlay color', '#373D45')}
        minHeight={text('Min height', '100vh')}
        header={text('Header', 'Landing Page Book')}
        subHeader={text('Sub header', 'React components to build!')}
        subHeaderPosition={select(
          'Sub header position',
          { top: 'top', bottom: 'bottom' },
          'bottom'
        )}
        buttons={buttons}
        particlesParams={particles}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="Via children"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <Hero
        isFixed={boolean('Fixed', true)}
        isCentered={boolean('Centered', true)}
        particles={boolean('With particles', true)}
        image={text('Image', 'https://front10.com/img/header-bg.jpg')}
        opacity={number('Opacity', 1)}
        parallaxOffset={number('Parallax offset', 0)}
        overlayColor={color('Overlay color', '#373D45')}
        minHeight={text('Min height', '100vh')}
        particlesParams={particles}
      >
        <Container>
          <Image
            src="images/logo/front10.png"
            rounded
            width="160"
            alt="Front10 logo"
            className="main-logo"
          />
          <Header className="text-warning">Landing Page Book</Header>
          <Header type="h5" className="text-warning">
            React components to build!
          </Header>
          <div className="mt-5">
            <Button>Explore</Button>
            <GithubButton
              btnType="star"
              btnText="Stars"
              username="front10"
              repository="landing-page-book"
            />
          </div>
        </Container>
      </Hero>
    </ThemeSelector>
  )),
  jsxConfig
);

const ctaButtonStyles = {
  color: 'white',
  border: '2px solid white',
  padding: '5px',
  float: 'left'
};

stories.addWithJSX(
  'With image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <Hero
        isFixed={boolean('Fixed', true)}
        image={text('Image', 'images/hero/alone-architecture-buildings-220444.jpg')}
        opacity={number('Opacity', 0)}
        parallaxOffset={number('Parallax offset', 350)}
        minHeight={text('Min height', '100vh')}
        particles={false}
      >
        <Container>
          <Header type="h6" className="text-white text-left">
            LANDING PAGE BOOK
          </Header>
          <Header className="text-white text-left mt-4 mb-4">
            React UI Kit to easily build landing pages.
          </Header>
          <div className="">
            <Link
              disabled={boolean('Disabled', false)}
              href={text('Link', 'https://front10.com')}
              className={text('Class name', '')}
              tooltip={text('Tooltip', 'This is a tooltip')}
              style={ctaButtonStyles}
              target={select(
                'Target',
                {
                  '': '',
                  _blank: '_blank',
                  _parent: '_parent',
                  _self: '_self',
                  _top: '_top'
                },
                ''
              )}
            >
              READ MORE
            </Link>
          </div>
        </Container>
      </Hero>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With product',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Hero
        isFixed={boolean('Fixed', true)}
        backgroundColor={color('Overlay color', '#3A374F')}
        opacity={number('Opacity', 0)}
        parallaxOffset={number('Parallax offset', 350)}
        minHeight={text('Min height', '100vh')}
        particles={false}
      >
        <Container className="p-5">
          <Row>
            <Column className="col-sm-3 mt-5 d-none d-sm-block">
              <Image className="img-fluid" src="images/hero/iphone_320.png" />
            </Column>
            <Column className="col-sm-9 mt-5">
              <div className="pt-3">
                <Image
                  src="images/logo/front10.png"
                  rounded
                  width="30"
                  alt="Front10 logo"
                  className="float-left"
                />
                <Header type="h6" className="text-warning float-left pl-2 mt-2">
                  LANDING PAGE BOOK
                </Header>
              </div>
              <Header type="h1" className="text-white text-left d-block pt-5">
                You can use the platform you prefer, Create React, Gatsby and Next.
              </Header>
              <div className="text-left">
                <Link
                  href="https://front10.com/get-landing-page-book/"
                  tooltip="Search in NPM"
                  target="_blank"
                >
                  <span className="Button btn">
                    Explore library &nbsp;
                    <Icon icon="fa fa-arrow-right" />
                  </span>
                </Link>
              </div>
            </Column>
          </Row>
        </Container>
      </Hero>
    </ThemeSelector>
  )),
  jsxConfig
);
