import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import withStyles from '../../helpers/WithStyles';

class Paragraph extends Component {
  render() {
    const { text, className, style } = this.props;
    return (
      <p style={style} className={className}>
        {ReactHtmlParser(text)}
      </p>
    );
  }
}

Paragraph.propTypes = {
  /**
   * Text of the Paragraph.
   */
  text: PropTypes.string.isRequired,
  /**
   * CSS class to apply to image.
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};
Paragraph.defaultProps = {
  className: null,
  style: null
};

export default withStyles(Paragraph);
