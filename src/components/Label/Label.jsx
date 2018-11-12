import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Label extends Component {
  render() {
    const { content, className, htmlFor, style } = this.props;
    return (
      <label style={style} htmlFor={htmlFor} className={`Label ${className}`}>
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
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Id of input.
   */
  htmlFor: PropTypes.string
};
Label.defaultProps = {
  content: '',
  className: '',
  style: null,
  htmlFor: ''
};

export default withStyles(Label);
