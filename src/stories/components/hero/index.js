/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, select, color } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Hero, Link, Container, Image, Header, GithubButton } from '../../../components';
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
      <Hero
        isFixed={boolean('Fixed', true)}
        isCentered={boolean('Centered', true)}
        particles={boolean('With particles', true)}
        image={text('Image', 'https://c1.staticflickr.com/2/1845/43895099105_7329ee6bba_c.jpg')}
        opacity={number('Opacity', 1)}
        parallaxOffset={number('Parallax offset', 0)}
        overlayColor={color('Overlay color', '#373D45', 'GROUP-ID1')}
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
  'Children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Hero
        isFixed={boolean('Fixed', true)}
        isCentered={boolean('Centered', true)}
        particles={boolean('With particles', true)}
        image={text('Image', 'https://front10.com/img/header-bg.jpg')}
        opacity={number('Opacity', 1)}
        parallaxOffset={number('Parallax offset', 0)}
        overlayColor={color('Overlay color', '#373D45', 'GROUP-ID1')}
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
            <Link
              className="btn btn-primary btn-started"
              href="https://front10.com/landing-page-book"
              target="_blank"
            >
              Explore
            </Link>
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
