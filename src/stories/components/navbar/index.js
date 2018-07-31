import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Navbar, NavbarNav, Input, Button, NavbarLink, Icon } from '../../../components';
import Readme from '../../../components/Navbar/README.md';

const stories = storiesOf('Components/Navbar', module);

stories.addDecorator(withKnobs);

const leftItems = [{
  title: 'Google',
  href: 'https://google.com',
  target: '_blank',
  icon: 'fa fa-google',
}, {
  title: 'Facebook',
  href: 'https://facebook.com',
  target: '_blank',
  icon: 'fa fa-facebook-official',
}];

const rightItems = [{
  title: 'Services',
}, {
  title: 'What we do',
}, {
  title: 'Process',
}, {
  title: 'Founders',
}, {
  title: 'Contact',
}];

const onItemClick = () => {};


stories.add('Default', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Navbar
        transparent={boolean('Transparent', false)}
        fixed={boolean('Fixed', false)}
        companyName={text('Company name', 'Front10')}
        companyLink={text('Company link', 'https://front10.com')}
        companyLogo={text('Company logo', 'images/logo/front10.png')}
        expand={select('Expand', {
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        }, 'md')}
        rightItems={rightItems}
        leftItems={leftItems}
        onItemClick={onItemClick}
        className="mb-2"
      />
    </ThemeSelector>
  );
}));

stories.add('Children', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <Navbar
        transparent={boolean('Transparent', false)}
        fixed={boolean('Fixed', false)}
        companyName={text('Company name', 'Front10')}
        companyLink={text('Company link', 'https://front10.com')}
        companyLogo={text('Company logo', 'images/logo/front10.png')}
        expand={select('Expand', {
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        }, 'md')}
      >
        <NavbarNav>
          <NavbarLink>
            <Icon
              className="mr-1"
              icon="fa fa-google"
            />
            Google
          </NavbarLink>
          <NavbarLink>
            <Icon
              className="mr-1"
              icon="fa fa-facebook-official "
            />
            Facebook
          </NavbarLink>
        </NavbarNav>
        <form className="form-inline mt-2 mt-md-0">
          <Input className="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <Button className="btn-outline-warning my-2 my-sm-0">Search</Button>
        </form>
      </Navbar>
    </ThemeSelector>
  );
}));
