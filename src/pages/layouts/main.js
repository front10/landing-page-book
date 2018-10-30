import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import '../../components/Navbar/style.legacy_browsers.css';
import '../../components/Footer/style.legacy_browsers.css';

import Navbar from '../../components/Navbar';
import NavbarNav from '../../components/NavbarNav';
import NavbarLink from '../../components/NavbarLink';
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
            <NavbarLink>Services</NavbarLink>
            <NavbarLink>Contact</NavbarLink>
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
