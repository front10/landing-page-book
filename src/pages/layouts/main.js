import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import '../../components/Navbar/style.legacy_browsers.css';
import '../../components/Footer/style.legacy_browsers.css';

import Navbar from '../../components/Navbar';
import NavbarNav from '../../components/NavbarNav';
import Footer from '../../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../../themes/default/index.legacy_browsers.css';

import '../app.css';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Navbar brandLogo="/images/logo/logoMainBLACK.png" fixed>
          <NavbarNav>
            <Link className="nav-link NavbarLink" to="/" activeClassName="activeLink" exact>
              Introduction
            </Link>
            <Link
              className="nav-link NavbarLink"
              to="/components"
              activeClassName="activeLink"
              exact
            >
              Components
            </Link>
          </NavbarNav>
          <NavbarNav alignItems="right">
            {/* eslint-disable */}
            <iframe className="first-iframe mt-2" src="http://ghbtns.com/github-btn.html?user=front10&amp;repo=landing-page-book&amp;type=watch&amp;count=true" allowTransparency="true" frameBorder="0" scrolling="0" width="86" height="30"></iframe>
            <a title="Github" className="text-secondary pull-right nav-link NavbarLink" href="https://github.com/front10/landing-page-book/tree/master/src/components/Button" target="_blank" rel="noopener noreferrer"><i className="fa fa-slack github-link-icon" title=""></i><span className="d-none d-sm-inline">Slack</span></a>
            <a title="Github" className="text-secondary pull-right nav-link NavbarLink" href="https://github.com/front10/landing-page-book/tree/master/src/components/Button" target="_blank" rel="noopener noreferrer"><i className="fa fa-github github-link-icon" title=""></i><span className="d-none d-sm-inline">Github</span></a>
            {/* eslint-enable */}
          </NavbarNav>
        </Navbar>
        {children}
        <Footer
          socialUrl="https://front10.com"
          copyright="Front10, LLC"
          socials={['facebook', 'linkedin', 'google', 'twitter']}
        />
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
