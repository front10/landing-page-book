import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarCollapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isOpen, children } = this.props;
    return <div className={`${!isOpen ? 'collapse' : ''} navbar-collapse`}>{children}</div>;
  }
}

NavbarCollapse.propTypes = {
  isOpen: PropTypes.bool
};
NavbarCollapse.defaultProps = {
  isOpen: true
};

export default NavbarCollapse;
