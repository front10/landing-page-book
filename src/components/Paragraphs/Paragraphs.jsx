import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import withStyles from '../../helpers/WithStyles';

class Paragraphs extends Component {
  render() {
    const {
      text,
      className
    } = this.props;
    return <p className={className}>{ReactHtmlParser(text)}</p>;
  }
}

Paragraphs.propTypes = {
  /**
   * Text of the paragraphs,  this prop is required.
   */
  text: PropTypes.string.isRequired
};
Paragraphs.defaultProps = {
  text: ''
};

const ParagraphsWithStyles = withStyles(Paragraphs);
export default ParagraphsWithStyles;
