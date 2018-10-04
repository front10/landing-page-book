import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarNav extends Component {
  render() {
    const { children, alignItems } = this.props;
    return (
      <ul className={`navbar-nav ${alignItems === 'right' ? 'ml-auto' : 'mr-auto'}`}>{children}</ul>
    );
  }
}

NavbarNav.propTypes = {
  alignItems: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarNav.defaultProps = {
  alignItems: 'left',
  children: null
};

export default NavbarNav;
