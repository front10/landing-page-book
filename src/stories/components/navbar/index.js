import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';

import {
  Navbar,
  NavbarNav,
  Input,
  LanguageSwitcher,
  NavbarLink,
  Icon,
  Container,
  NavbarCollapse,
  NavbarBrand,
  Image,
  Code
} from '../../../components';
import Readme from '../../../components/Navbar/README.md';

import { def, container } from '../../mock/components/codes/navbar';

setAddon(JSXAddon);

const stories = storiesOf('Components/Navbar', module);

stories.addDecorator(withKnobs);

const leftItems = [
  {
    title: 'Google',
    href: 'https://google.com',
    target: '_blank',
    icon: 'fa fa-google'
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    target: '_blank',
    icon: 'fa fa-facebook-official'
  }
];

const rightItems = [
  {
    title: 'Services'
  },
  {
    title: 'Contact'
  }
];

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />

      <Code code={def} languageCode="jsx" readOnly collapsible collapsed showDeleteButton={false}>
        <Navbar
          transparent={boolean('Transparent', false)}
          fixed={boolean('Fixed', false)}
          brandName={text('Brand name', '')}
          brandLink={text('Brand link', 'https://front10.com')}
          brandLogo={text('Brand logo', 'images/logo/front10.png')}
          expand={select(
            'Expand',
            {
              sm: 'sm',
              md: 'md',
              lg: 'lg'
            },
            'md'
          )}
          rightItems={rightItems}
          leftItems={leftItems}
        />
      </Code>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Container Mode',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Container Mode"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <Navbar expand="md" className="mb-2">
        <Container>
          <NavbarCollapse>
            <NavbarBrand>
              <Image
                width="120"
                src={text(
                  'Brand logo',
                  'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
                )}
                alt="Webpack logo"
              />
            </NavbarBrand>
            <NavbarNav alignItems="right">
              <NavbarLink>Documentation</NavbarLink>
              <NavbarLink>Contribute</NavbarLink>
              <NavbarLink>Vote</NavbarLink>
              <NavbarLink>Blog</NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-search" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-github" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-stack-overflow" />
              </NavbarLink>
              <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Code code={container} languageCode="jsx" readOnly />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Reversed',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Reversed"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <Navbar expand="md">
        <Container>
          <NavbarCollapse>
            <NavbarNav>
              <LanguageSwitcher showArrow={false} selectedLanguage="US" />
              <NavbarLink>
                <Icon icon="fa fa-stack-overflow" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-github" />
              </NavbarLink>
              <NavbarLink>
                <Icon icon="fa fa-search" />
              </NavbarLink>
              <NavbarLink>Blog</NavbarLink>
              <NavbarLink>Vote</NavbarLink>
              <NavbarLink>Contribute</NavbarLink>
              <NavbarLink>Documentation</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
              <NavbarBrand>
                <Image
                  width="120"
                  src={text(
                    'Brand logo',
                    'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
                  )}
                  alt="Webpack logo"
                />
              </NavbarBrand>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Via children"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <Navbar expand="md">
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="120"
              src={text(
                'Brand logo',
                'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
              )}
              alt="Webpack logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>Documentation</NavbarLink>
            <NavbarLink>Contribute</NavbarLink>
            <NavbarLink>Vote</NavbarLink>
            <NavbarLink>Blog</NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-search" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-github" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-stack-overflow" />
            </NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With search',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="With search"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <Navbar
        transparent={boolean('Transparent', false)}
        fixed={boolean('Fixed', false)}
        brandName={text('Brand name', 'Front10')}
        brandLink={text('Brand link', 'https://front10.com')}
        brandLogo={text('Brand logo', 'images/logo/front10.png')}
        expand={select(
          'Expand',
          {
            sm: 'sm',
            md: 'md',
            lg: 'lg'
          },
          'md'
        )}
      >
        <NavbarNav alignItems="right">
          <Input placeholder="Search" icon="fa fa-search" />
        </NavbarNav>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'With user avatar',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="With user avatar"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <Navbar expand="md">
        <NavbarCollapse>
          <NavbarBrand>
            <Image
              width="120"
              src={text(
                'Brand logo',
                'https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg'
              )}
              alt="Webpack logo"
            />
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink>
              <Icon icon="fa fa-search" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-github" />
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-stack-overflow" />
            </NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            <NavbarLink href="https://twitter.com/ycgarrido">
              <Image
                className="mr-2"
                rounded
                width="30"
                src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"
              />
              ycgarrido
            </NavbarLink>
          </NavbarNav>
        </NavbarCollapse>
      </Navbar>
    </ThemeSelector>
  )),
  jsxConfig
);
