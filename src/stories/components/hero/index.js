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
  Icon,
  Code
} from '../../../components';
import Readme from '../../../components/Hero/README.md';

import particles from '../../mock/components/particles';
import { def, children, image, products, minimal } from '../../mock/components/codes/hero';

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
      <div className="mt-4">
        <Code
          code={children}
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

stories.addWithJSX(
  'With product',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Hero
        isFixed={boolean('Fixed', true)}
        backgroundColor={color('Overlay color', 'rgba(57,55,77,0.9)')}
        opacity={number('Opacity', 0)}
        parallaxOffset={number('Parallax offset', 350)}
        minHeight={text('Min height', '100vh')}
        particles={false}
      >
        <Container className="p-5">
          <Row>
            <Column className="col-md-3 d-none d-md-block">
              <Image className="img-fluid" src="images/hero/front10-iphone.svg" />
            </Column>
            <Column className="col-md-9 mt-5">
              <div className="pt-3">
                <Image
                  src="images/logo/front10.png"
                  rounded
                  width="40"
                  alt="Front10 logo"
                  className="float-left"
                />
                <Header type="h5" className="text-warning float-left pl-2 mt-3">
                  LANDING PAGE BOOK
                </Header>
              </div>
              <div className="clearfix" />
              <Header type="h2" className="text-white text-left d-block pt-2">
                Use the platform you prefer, Create React App, Gatsby or Next.
              </Header>
              <div className="text-left mt-3">
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
      <div className="mt-4">
        <Code
          code={products}
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
  'Go minimal',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Hero
        backgroundColor={color('Overlay color', '#FFFFFF')}
        opacity={number('Opacity', 0)}
        parallaxOffset={number('Parallax offset', 350)}
        minHeight={text('Min height', '100vh')}
        particles={false}
      >
        <Container className="p-5">
          <Row>
            <Column className="col-12 col-md-7">
              <Image className="img-fluid" src="images/hero/persons.png" />
            </Column>
            <Column className="col-12 col-md-5">
              <h1
                style={{
                  color: '#392F4C',
                  fontSize: '3rem',
                  fontWeight: '600'
                }}
                className="float-left text-left mt-3"
              >
                Landing Page Book
              </h1>
              <div className="clearfix" />
              <p
                style={{ color: '#392F4C', lineHeight: '33px' }}
                className="text-black text-left d-block pt-2"
              >
                Landing page book it’s an react components library with more than 40 components and
                elements, is based en react 16.2 and was wrote with ES6.
              </p>
              <Row>
                <Column className="col-12 col-sm-8 mt-5 pl-1 pr-1">
                  <input
                    type="email"
                    placeholder="Email address"
                    style={{ display: 'block', width: '100%', padding: '1.03rem 1rem' }}
                  />
                </Column>
                <Column className="col-12 col-sm-4 mt-5 pl-1 pr-1">
                  <input
                    type="button"
                    className="Button"
                    style={{ padding: '1.15rem 1rem' }}
                    tooltip="Send email"
                    value="GET STARTED"
                  />
                </Column>
              </Row>
            </Column>
          </Row>
        </Container>
      </Hero>
      <div className="mt-4">
        <Code
          code={minimal}
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
