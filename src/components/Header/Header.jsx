import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { className, type, borderBottom, children } = this.props;
    return React.createElement(
      type,
      {
        className: `${className} ${borderBottom ? 'border-bottom' : ''}`
      },
      children
    );
  }
}

Header.propTypes = {
  borderBottom: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Header.defaultProps = {
  borderBottom: false,
  className: '',
  type: 'h1',
  children: null
};

export default Header;
