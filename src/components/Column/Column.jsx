import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Column extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={`col ${className}`}>{children}</div>;
  }
}

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Column.defaultProps = {
  className: '',
  children: null
};

export default Column;
