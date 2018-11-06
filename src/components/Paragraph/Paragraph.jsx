import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import withStyles from '../../helpers/WithStyles';

class Paragraph extends Component {
  render() {
    const { text, className } = this.props;
    return <p className={className}>{ReactHtmlParser(text)}</p>;
  }
}

Paragraph.propTypes = {
  /**
   * Text of the Paragraph,  this prop is required.
   */
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};
Paragraph.defaultProps = {
  className: null
};

const ParagraphWithStyles = withStyles(Paragraph);
export default ParagraphWithStyles;
