import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import {ThemeSelector} from "../../../addons/ThemeSwitcher";

import {Header} from '../../../components';
import Readme from '../../../components/Header/README.md';

const stories = storiesOf('Components/Header', module);

stories.addDecorator(withKnobs);

const leftItems = [{
	title: "Google",
	href: "https://google.com",
	target: "_blank",
	icon: "fa fa-google"
}, {
	title: "Facebook",
	href: "https://facebook.com",
	target: "_blank",
	icon: "fa fa-facebook-official"
}];

const rightItems = [{
	title: "Services"
}, {
	title: "What we do"
}, {
	title: "Process"
}, {
	title: "Founders"
}, {
	title: "Contact"
}];

const onItemClick = ({item}) => {
	alert(`Item ${JSON.stringify(item)} has clicked`);
};


stories.add('Default', withReadme([Readme], () => {
	return (
  <ThemeSelector>
    <Header
      transparent={boolean("Transparent", false)}
      fixed={boolean("Fixed", false)}
      companyName={text("Company name", "Front10")}
      companyLink={text("Company link", "https://front10.com")}
      companyLogo={text("Company logo", "images/logo/front10.png")}
      expand={select("Expand", {
        "sm": "sm",
        "md": "md",
        "lg": "lg",
      }, "md")}
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
    <Header
      transparent={boolean("Transparent", false)}
      fixed={boolean("Fixed", false)}
      companyName={text("Company name", "Front10")}
      companyLink={text("Company link", "https://front10.com")}
      companyLogo={text("Company logo", "images/logo/front10.png")}
      expand={select("Expand", {
        "sm": "sm",
        "md": "md",
        "lg": "lg",
      }, "md")}
    >
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a
            className="nav-link text-light"
          >
            <i className="fa fa-google mr-1" />
            Google
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" >
            <i className="fa fa-facebook-official mr-1" />
            Facebook
          </a>
        </li>
      </ul>
      <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
      </form>
    </Header>
  </ThemeSelector>
	);
}));