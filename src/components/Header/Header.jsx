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
  type: PropTypes.string
};
Header.defaultProps = {
  borderBottom: false,
  className: '',
  type: 'h1'
};

export default Header;
