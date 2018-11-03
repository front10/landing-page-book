import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Label extends Component {
  render() {
    const { label, className, htmlFor, colon } = this.props;
    return (
      <label htmlFor={htmlFor} className={`Label ${className}`}>
        {label}
        {colon && ':'}
      </label>
    );
  }
}

Label.propTypes = {
  /**
   * Show or hide colon. Default `false`
   */
  colon: PropTypes.bool,
  /**
   * Text of label. Default `""`
   */
  label: PropTypes.string,
  /**
   * CSS Class to apply to label. Default `""`
   */
  className: PropTypes.string,
  /**
   * Id of input. Default `""`
   */
  htmlFor: PropTypes.string
};
Label.defaultProps = {
  colon: false,
  label: '',
  className: '',
  htmlFor: ''
};

export default Label;
