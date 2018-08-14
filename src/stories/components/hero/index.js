/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean, select, color } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Hero, Social, Container, Image, Header, Button } from '../../../components';
import Readme from '../../../components/Hero/README.md';

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
        image={text('Image', 'https://front10.com/img/header-bg.jpg')}
        opacity={number('Opacity', 1)}
        parallaxOffset={number('Parallax offset', 0)}
        overlayColor={color('Overlay color', '#d43131', 'GROUP-ID1')}
        minHeight={text('Min height', '100vh')}
        header={text('Header', 'REACT & ANGULARJS COMPONENTS')}
        subHeader={text('Sub header', 'Leverage your process!')}
        subHeaderPosition={select('Sub header position', { top: 'top', bottom: 'bottom' }, 'top')}
        buttons={buttons}
        particlesParams={{ move: { speed: 2 } }}
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
        overlayColor={color('Overlay color', '#d43131', 'GROUP-ID1')}
        minHeight={text('Min height', '100vh')}
        particlesParams={{ move: { speed: 2 } }}
      >
        <Container>
          <Image
            className="w-25"
            alt="Cool car"
            src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Html-512.png"
          />
          <Header className="display-3 text-white">Landing Page Book</Header>
          <div className="mb-5 mt-5">
            <Button
              href="https://front10.com/"
              className="btn btn-primary btn-lg pl-5 pr-5 pt-2 pb-2"
            >
              Go now
            </Button>
          </div>
          <Social type="facebook" url="https://landing-page-book.front10.com/" />
          <Social type="twitter" url="https://landing-page-book.front10.com/" />
          <Social type="linkedin" url="https://landing-page-book.front10.com/" />
        </Container>
      </Hero>
    </ThemeSelector>
  )),
  jsxConfig
);
