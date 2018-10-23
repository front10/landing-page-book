import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      className,
      type,
      borderBottom,
      borderTop,
      children,
      color,
      textAlign,
      icon
    } = this.props;
    let componentClassName = `${className} text-${textAlign}`;
    if (color) componentClassName += ` text-${color}`;
    if (borderBottom) componentClassName += ` border-bottom`;
    if (borderTop) componentClassName += ` border-top`;
    return React.createElement(
      type,
      {
        className: componentClassName
      },
      [
        icon && textAlign === 'left' && <Icon icon={icon} className="mr-1" />,
        children,
        icon && textAlign === 'right' && <Icon icon={icon} className="ml-1" />
      ]
    );
  }
}

Header.propTypes = {
  borderBottom: PropTypes.bool,
  borderTop: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  textAlign: PropTypes.oneOf(['left', 'right']),
  icon: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Header.defaultProps = {
  borderTop: false,
  borderBottom: false,
  textAlign: 'left',
  icon: '',
  className: '',
  color: '',
  type: 'h1',
  children: null
};

export default Header;
