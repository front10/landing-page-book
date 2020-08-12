import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';
import Helmet from 'react-helmet';
import TemeSwitcher from '../../storybook-utils/components/ThemeSwitcher';
import logo from '../../assets/images/logo/logoMainBLACK.png';

import {
  Navbar,
  NavbarNav,
  Social,
  Footer,
  Copyright,
  Image,
  Row,
  Column,
  Analytics,
  Link
} from '../components';

import 'font-awesome/css/font-awesome.min.css';
import '../themes/default/index.css';
import '../pages/app.css';

import faviconApple from './favicons/apple-touch-icon.png';
import favicon from './favicons/favicon.ico';
import favicon32 from './favicons/favicon-32x32.png';
import favicon16 from './favicons/favicon-16x16.png';
import faviconSafari from './favicons/safari-pinned-tab.svg';
import faviconMstile from './favicons/mstile-144x144.png';

class MainLayout extends React.Component {
  componentDidMount() {
    const usrc = document.createElement('script');
    usrc.setAttribute('src', 'https://cdn.front10.net/front10/runtime/last-version/usrc/index.js');
    usrc.setAttribute('data-usrc', '5e94925aae8a1b6b4bc98824');
    document.body.appendChild(usrc);
  }

  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Helmet defaultTitle="Landing Page Book">
          <meta property="og:title" content="Landing Page Book" />
          <meta
            property="og:image"
            content="https://front10.com/landing-page-book/images/logo/facebook.png"
          />
          <meta
            property="og:description"
            content="Landing page book it’s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6 and is compatible with Create React App, Gatsby and Next plataforms."
          />
          <meta
            name="description"
            content="Landing page book it’s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6 and is compatible with Create React App, Gatsby and Next plataforms."
          />
          <meta property="og:url" content="https://front10.com/landing-page-book/" />
          <link rel="canonical" href="https://front10.com/landing-page-book/index.html" />
          <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="mask-icon" href={faviconSafari} color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-TileImage" content={faviconMstile} />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href={favicon} />
        </Helmet>
        <Analytics idTracking="UA-44521541-9" />
        <Navbar
          brandLink=""
          expand="md"
          brandLogo={logo}
          fixed
          bgColor="light"
          imageRoundedCircle
          className="main-navbar"
        >
          <NavbarNav>
            <GatsbyLink className="nav-link NavbarLink" to="/" activeClassName="activeLink" exact>
              Introduction
            </GatsbyLink>
            <GatsbyLink
              className="nav-link NavbarLink"
              to="/components"
              activeClassName="activeLink"
              exact
            >
              Components
            </GatsbyLink>
          </NavbarNav>
          <NavbarNav alignItems="right">
            {/* eslint-disable */}
            <iframe
              className="first-iframe mt-2"
              src="//ghbtns.com/github-btn.html?user=front10&amp;repo=landing-page-book&amp;type=watch&amp;count=true"
              frameBorder="0"
              scrolling="0"
              width="86"
              height="30"
            />
            <a
              title="Github issues"
              className="text-secondary pull-right nav-link NavbarLink"
              href="https://github.com/front10/landing-page-book/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-question-circle github-link-icon" title="" />
              <span>Support</span>
            </a>
            <a
              title="Github"
              className="text-secondary pull-right nav-link NavbarLink"
              href="https://github.com/front10/landing-page-book/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github github-link-icon" title="" />
              <span>Github</span>
            </a>
            {/* eslint-enable */}
          </NavbarNav>
        </Navbar>
        <div className="github-show-xs">
          <iframe
            title="iframe-github"
            src="//ghbtns.com/github-btn.html?user=front10&amp;repo=landing-page-book&amp;type=watch&amp;count=true"
            frameBorder="0"
            scrolling="0"
            width="86"
            height="30"
          />
        </div>
        {children}
        <Footer>
          <Row>
            <Column className="col-sm-12 col-md">
              <Copyright textColor="light" showAllRightText={false} text="Front10, LLC" />
            </Column>
            <Column className="col-sm-12 col-md mt-3 mt-md-0">
              <span className="text-light">With ♥ by </span>
              <Link href="https://front10.com/" target="_blank">
                <Image
                  alt="Front 10 logo"
                  src="https://front10.com/img/logos/logo-main.png"
                  width="100"
                />
              </Link>
            </Column>
            <Column className="col-sm-12 col-md mt-3 mt-md-0">
              <Social type="twitter" url="https://twitter.com/front10hello" />
              <Social type="linkedin" url="https://www.linkedin.com/company/front10/" />
            </Column>
          </Row>
        </Footer>
        <TemeSwitcher />
      </React.Fragment>
    );
  }
}

MainLayout.propTypes = {
  // route: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
MainLayout.defaultProps = {
  // route: '',
  children: null
};

export default MainLayout;
