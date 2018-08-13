import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={`row ${className}`}>{children}</div>;
  }
}

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Row.defaultProps = {
  className: '',
  children: null
};

export default Row;
