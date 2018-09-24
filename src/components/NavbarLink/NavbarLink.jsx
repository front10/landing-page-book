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
  href: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
NavbarLink.defaultProps = {
  href: '#',
  target: '',
  onClick: () => {},
  children: null
};

export default NavbarLink;
