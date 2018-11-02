import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavbarLink extends Component {
  render() {
    const { href, target, onClick, children } = this.props;
    return (
      <li className="nav-item">
        <a className="nav-link NavbarLink" href={href} target={target} onClick={onClick}>
          {children}
        </a>
      </li>
    );
  }
}

NavbarLink.propTypes = {
  /**
   * Url to redirect on intem click. Default `"#"`
   */
  href: PropTypes.string,
  /**
   * Link target. Default `""`
   */
  target: PropTypes.string,
  /**
   * Called when link is clicked
   */
  onClick: PropTypes.func,
  /**
   * Elements show into the NavbarLink
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarLink.defaultProps = {
  href: '#',
  target: '',
  onClick: () => {},
  children: null
};

export default NavbarLink;
