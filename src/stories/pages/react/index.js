import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarCollapse,
  NavbarLink,
  Icon,
  Image,
  Hero,
  Container
} from '../../../components';

const buttons = [
  {
    text: 'Get Started',
    onClick: () => {}
  },
  {
    text: 'Get the tutorial',
    onClick: () => {}
  }
];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('React', () => (
  <ThemeSelector>
    <Navbar expand="md">
      <Container>
        <NavbarCollapse>
          <NavbarBrand href="https://reactjs.org/">
            <Image
              width="24"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              alt="React logo"
            />
            React
          </NavbarBrand>
          <NavbarNav alignItems="right">
            <NavbarLink href="https://reactjs.org/docs/getting-started.html">Docs</NavbarLink>
            <NavbarLink href="https://reactjs.org/tutorial/tutorial.html">Tutorial</NavbarLink>
            <NavbarLink href="https://reactjs.org/community/support.html">Community</NavbarLink>
            <NavbarLink href="https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html">
              Blog
            </NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-search" />
            </NavbarLink>
            <NavbarLink>v16.4.2</NavbarLink>
            <NavbarLink>GitHub</NavbarLink>
            <NavbarLink>
              <Icon icon="fa fa-share" />
            </NavbarLink>
          </NavbarNav>
        </NavbarCollapse>
      </Container>
    </Navbar>
    <Hero
      overlayColor="#283A43"
      particles={false}
      opacity={1}
      subHeaderPosition="bottom"
      subHeader="A JavaScript library for building user interfaces"
      header="React"
      buttons={buttons}
    />
  </ThemeSelector>
));
