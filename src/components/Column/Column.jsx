import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Column extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={`col ${className}`}>{children}</div>;
  }
}

Column.propTypes = {
  /**
   * Class name of the column
   */
  className: PropTypes.string,
  /**
   * Array of element to show inside the column
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Column.defaultProps = {
  className: '',
  children: null
};

export default withStyles(Column);
