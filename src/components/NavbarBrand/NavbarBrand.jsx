import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarBrand extends Component {
  render() {
    const { className, href, children } = this.props;
    return (
      <a className={`NavbarBrand d-flex align-items-center navbar-brand ${className}`} href={href}>
        {children}
      </a>
    );
  }
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarBrand.defaultProps = {
  className: '',
  href: '#',
  children: null
};

export default NavbarBrand;
