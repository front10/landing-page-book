import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';
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
      children,
      textAlign,
      icon
    } = this.props;
    let componentClassName = `${className}`;
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
   * Class name of header. Default `""`
   */
  className: PropTypes.string,
  /**
   * Type of tag element. Default `"h1"`, can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
   */
  type: PropTypes.string,
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
  icon: '',
  className: '',
  type: 'h1',
  children: null
};

const HeaderWithStyles = withStyles(Header);
export default HeaderWithStyles;
