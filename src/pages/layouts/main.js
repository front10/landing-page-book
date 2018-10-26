import React from 'react';
import Link from 'gatsby-link';

import '../../components/Navbar/style.legacy_browsers.css';
import '../../components/Footer/style.legacy_browsers.css';

import Navbar from '../../components/Navbar';
import NavbarNav from '../../components/NavbarNav';
import NavbarLink from '../../components/NavbarLink';
import Footer from '../../components/Footer';

export default ({ children, route }) => (
  <React.Fragment>
    <Navbar brandLogo="images/logo/front10.png">
      <NavbarNav>
        <Link className="nav-link NavbarLink" to="/">
          Introduction
        </Link>
        <Link className="nav-link NavbarLink" to="/components">
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
