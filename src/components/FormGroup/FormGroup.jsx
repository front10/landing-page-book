import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormGroup extends Component {
  render() {
    const { className, children } = this.props;
    return <div className={className}>{children}</div>;
  }
}

FormGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
FormGroup.defaultProps = {
  className: 'form-group',
  children: null
};

export default FormGroup;
