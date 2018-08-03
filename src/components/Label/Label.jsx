import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  render() {
    const { label, className, htmlFor, colon } = this.props;
    return (
      <label className={`Label ${className}`} htmlFor={htmlFor}>
        {label}
        {colon && ':'}
      </label>
    );
  }
}

Label.propTypes = {
  colon: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string
};
Label.defaultProps = {
  colon: false,
  label: '',
  className: '',
  htmlFor: ''
};

export default Label;
