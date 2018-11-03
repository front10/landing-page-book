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
  /**
   * Define a border bottom in header. Default `false`
   */
  borderBottom: PropTypes.bool,
  /**
   * Define if header have border on top. Default `false`
   */
  borderTop: PropTypes.bool,
  /**
   * Class name of header. Default `""`
   */
  className: PropTypes.string,
  /**
   * Type of tag element. Default `"h1"`, can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
   */
  type: PropTypes.string,
  /**
   *  Color of header, can by [undefined, '', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']. Default `""`
   */
  color: PropTypes.oneOf([
    undefined,
    '',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
  ]),
  /**
   * Aligment of component. Default `"left"`, can be `center`, `right` and `left`.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * Icon to show in component. Default `""`
   */
  icon: PropTypes.string,
  /**
   * List of element to show inside as childrens.
   */
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
