import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, children, alignItems } = this.props;
    return (
      <ul className={`navbar-nav ${alignItems === 'right' ? 'ml-auto' : 'mr-auto'}`}>{children}</ul>
    );
  }
}

NavbarNav.propTypes = {
  alignItems: PropTypes.string
};
NavbarNav.defaultProps = {
  alignItems: 'left'
};

export default NavbarNav;
