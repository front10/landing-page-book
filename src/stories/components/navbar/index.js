import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

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
  Image
} from '../../../components';
import Readme from '../../../components/Navbar/README.md';

const stories = storiesOf('Components/Navbar', module);

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar
        }}
      >
        {`<Navbar
    transparent={false}
    fixed={false}
    brandName=""
    brandLink="https://front10.com"
    brandLogo="images/logo/front10.png"
    expand="md"
    rightItems={[
        {title: 'Services'},
        {title: 'Contact'}
    ]}
    leftItems={[
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
    ]}
/>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Container Mode',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Container Mode"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar,
          NavbarNav,
          Input,
          LanguageSwitcher,
          NavbarLink,
          Icon,
          Container,
          NavbarCollapse,
          NavbarBrand,
          Image
        }}
      >
        {`<Navbar expand="md" className="mb-2">
    <Container>
        <NavbarCollapse>
            <NavbarBrand>
                <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>
              </NavbarBrand>
              <NavbarNav alignItems="right">
                <NavbarLink>Documentation</NavbarLink>
                <NavbarLink>Contribute</NavbarLink>
                <NavbarLink>Vote</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
                <NavbarLink><Icon icon="fa fa-github" /></NavbarLink>
                <NavbarLink><Icon icon="fa fa-stack-overflow" /></NavbarLink>
                <LanguageSwitcher showArrow={false} selectedLanguage="US" />
              </NavbarNav>
            </NavbarCollapse>
          </Container>
        </Navbar>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Reversed',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Reversed"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar,
          NavbarNav,
          Input,
          LanguageSwitcher,
          NavbarLink,
          Icon,
          Container,
          NavbarCollapse,
          NavbarBrand,
          Image
        }}
      >
        {`< Navbar expand="md">
    <Container>
          <NavbarCollapse>
            <NavbarNav>
              <LanguageSwitcher showArrow={false} selectedLanguage="US" />
              <NavbarLink><Icon icon="fa fa-stack-overflow" /></NavbarLink>
              <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
              <NavbarLink><Icon icon="fa fa-search" /></NavbarLink>
              <NavbarLink>Blog</NavbarLink>
              <NavbarLink>Vote</NavbarLink>
              <NavbarLink>Contribute</NavbarLink>
              <NavbarLink>Documentation</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
              <NavbarBrand>
                <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo" />
              </NavbarBrand>
            </NavbarNav>
          </NavbarCollapse>
        </Container>
</Navbar>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="Via children"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar,
          NavbarNav,
          Input,
          LanguageSwitcher,
          NavbarLink,
          Icon,
          Container,
          NavbarCollapse,
          NavbarBrand,
          Image
        }}
      >
        {`<Navbar expand="md">
    <NavbarCollapse>
        <NavbarBrand>
            <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>
        </NavbarBrand>
        <NavbarNav alignItems="right">
            <NavbarLink>Documentation</NavbarLink>
            <NavbarLink>Contribute</NavbarLink>
            <NavbarLink>Vote</NavbarLink>
            <NavbarLink>Blog</NavbarLink>
            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
        </NavbarNav>
    </NavbarCollapse>
</Navbar>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With search',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="With search"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar,
          NavbarNav,
          Input,
          LanguageSwitcher,
          NavbarLink,
          Icon,
          Container,
          NavbarCollapse,
          NavbarBrand,
          Image
        }}
      >
        {`<Navbar 
    transparent={false} fixed={false} brandName="Front10" 
    brandLink="https://front10.com" brandLogo="images/logo/front10.png" expand="md"
>
    <NavbarNav alignItems="right">
        <Input placeholder="Search" icon="fa fa-search" />
    </NavbarNav>
</Navbar>`}
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With user avatar',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Navbar"
        storyName="With user avatar"
        description="A navigation bar is intended to aid visitors in accessing information.  These sections of the webpage will include links to the most important sections of the site. "
      />
      <PropsManager
        scope={{
          React,
          Navbar,
          NavbarNav,
          Input,
          LanguageSwitcher,
          NavbarLink,
          Icon,
          Container,
          NavbarCollapse,
          NavbarBrand,
          Image
        }}
      >
        {`<Navbar expand="md">
    <NavbarCollapse>
        <NavbarBrand>
            <Image width="120" src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg" alt="Webpack logo"/>
        </NavbarBrand>
        <NavbarNav alignItems="right">
            <NavbarLink><Icon icon="fa fa-search"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-github"/></NavbarLink>
            <NavbarLink><Icon icon="fa fa-stack-overflow"/></NavbarLink>
            <LanguageSwitcher showArrow={false} selectedLanguage="US" />
            <NavbarLink href="https://twitter.com/ycgarrido">
                <Image className="mr-2" rounded width="30" src="https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg"/>
                  ycgarrido
            </NavbarLink>
        </NavbarNav>
    </NavbarCollapse>
</Navbar>`}
      </PropsManager>
    </ThemeSelector>
  ))
);
