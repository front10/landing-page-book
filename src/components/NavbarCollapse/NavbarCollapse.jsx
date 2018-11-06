import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class NavbarCollapse extends Component {
  render() {
    const { isOpen, children, className } = this.props;
    return (
      <div className={`${className} ${!isOpen ? 'collapse' : ''} navbar-collapse`}>{children}</div>
    );
  }
}

NavbarCollapse.propTypes = {
  /**
   * Open or close component. Default `true`
   */
  isOpen: PropTypes.bool,
  /**
   * Elements show into the NavbarCollapse
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Class of the component. Default `""`
   */
  className: PropTypes.string
};
NavbarCollapse.defaultProps = {
  isOpen: true,
  children: null,
  className: ''
};

export default withStyles(NavbarCollapse);
