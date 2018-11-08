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
    const { className, type, children, textAlign, icon } = this.props;
    const componentClassName = `${className}`;
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
   * Class name of header
   */
  className: PropTypes.string,
  /**
   * Type of tag element. Can be <code>'h1'</code>, <code>'h2'</code>, <code>'h3'</code>, <code>'h4'</code>, <code>'h5'</code> and <code>'h6'</code>
   */
  type: PropTypes.string,
  /**
   * Icon to show in component
   */
  icon: PropTypes.string,
  /**
   * List of element to show inside as childrens.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Icon to show in component
   */
  textAlign: PropTypes.string
};
Header.defaultProps = {
  icon: '',
  className: '',
  type: 'h1',
  children: null,
  textAlign: null
};

const HeaderWithStyles = withStyles(Header);
export default HeaderWithStyles;
