import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Label extends Component {
  render() {
    const { content, className, htmlFor } = this.props;
    return (
      <label htmlFor={htmlFor} className={`Label ${className}`}>
        {content}
      </label>
    );
  }
}

Label.propTypes = {
  /**
   * Content of label.
   */
  content: PropTypes.string,
  /**
   * CSS Class to apply to label.
   */
  className: PropTypes.string,
  /**
   * Id of input.
   */
  htmlFor: PropTypes.string
};
Label.defaultProps = {
  content: '',
  className: '',
  htmlFor: ''
};

const LabelWithStyles = withStyles(Label);
export default LabelWithStyles;
