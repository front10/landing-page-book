import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class NavbarLink extends Component {
  render() {
    const { href, target, onClick, children, className } = this.props;
    return (
      <li className="nav-item">
        <a
          className={`${className} nav-link NavbarLink`}
          href={href}
          target={target}
          onClick={onClick}
        >
          {children}
        </a>
      </li>
    );
  }
}

NavbarLink.propTypes = {
  /**
   * Url to redirect on intem click.
   */
  href: PropTypes.string,
  /**
   * Link target.
   */
  target: PropTypes.string,
  /**
   * Called when link is clicked
   */
  onClick: PropTypes.func,
  /**
   * Elements show into the NavbarLink
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Class of the component.
   */
  className: PropTypes.string
};
NavbarLink.defaultProps = {
  // eslint-disable-next-line react/default-props-match-prop-types
  textColor: 'light',
  href: '#',
  target: '',
  onClick: () => {},
  children: null,
  className: ''
};

export default withStyles(NavbarLink);
