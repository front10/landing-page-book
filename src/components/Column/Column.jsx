import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Column extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

Column.propTypes = {
  className: PropTypes.string
};
Column.defaultProps = {
  className: 'col'
};

export default Column;
