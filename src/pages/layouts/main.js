import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import '../../components/Navbar/style.legacy_browsers.css';
import '../../components/Footer/style.legacy_browsers.css';

import Navbar from '../../components/Navbar';
import NavbarNav from '../../components/NavbarNav';
import NavbarLink from '../../components/NavbarLink';
import Footer from '../../components/Footer';
import GithubButton from '../../components/GithubButton';

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
            <iframe class="first-iframe mt-2" src="http://ghbtns.com/github-btn.html?user=front10&amp;repo=landing-page-book&amp;type=watch&amp;count=true" allowtransparency="true" frameborder="0" scrolling="0" width="86" height="30"></iframe>
            <a title="Github" class="text-secondary pull-right nav-link NavbarLink" href="https://github.com/front10/landing-page-book/tree/master/src/components/Button" target="_blank"><i class="fa fa-slack github-link-icon" title=""></i><span class="d-none d-sm-inline">Slack</span></a>
            <a title="Github" class="text-secondary pull-right nav-link NavbarLink" href="https://github.com/front10/landing-page-book/tree/master/src/components/Button" target="_blank"><i class="fa fa-github github-link-icon" title=""></i><span class="d-none d-sm-inline">Github</span></a>
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
