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
  /**
   * Class to apply to button. Default `""`
   */
  className: PropTypes.string,
  /**
   * Url to go when NavbarBrand is clicked. Default `""`
   */
  href: PropTypes.string,
  /**
   * Elements show into the NavbarBrand
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarBrand.defaultProps = {
  className: '',
  href: '#',
  children: null
};

export default NavbarBrand;
