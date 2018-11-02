import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Paragraphs extends Component {
  render() {
    const {
      text,
      textAlign,
      textTransform,
      textTruncate,
      textMonoSpace,
      fontItalic,
      fontWeight,
      color
    } = this.props;
    let tempClass = '';
    if (textAlign) tempClass += `text-${textAlign} `;
    if (textTransform) tempClass += `text-${textTransform} `;
    if (textTruncate) tempClass += ` text-truncate `;
    if (fontItalic) tempClass += ` font-italic `;
    if (fontWeight) tempClass += ` font-weight-${fontWeight} `;
    if (textMonoSpace) tempClass += ` text-monospace `;
    if (color) tempClass += `text-${color}`;
    return <p className={tempClass}>{ReactHtmlParser(text)}</p>;
  }
}

Paragraphs.propTypes = {
  /**
   * Text of the paragraphs,  this prop is required.
   */
  text: PropTypes.string.isRequired,
  /**
   * Paragraph alignment. Default  `justify`, can be `left`, `center` and `right`
   */
  textAlign: PropTypes.oneOf(['center', 'right', 'left', 'justify']),
  /**
   * Paragraph text transform. Default `""` , can be `lowercase`, `uppercase`, `capitalize`
   */
  textTransform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize', '']),
  /**
   * Truncate the paragraph. Default `false`
   */
  textTruncate: PropTypes.bool,
  /**
   * Show content using mono spaced text. Default `false`
   */
  textMonoSpace: PropTypes.bool,
  /**
   * Show content using an italic font. Default `false`
   */
  fontItalic: PropTypes.bool,
  /**
   * Weight of the font. Default `normal`, can be `bold`, `normal`, `light`
   */
  fontWeight: PropTypes.oneOf(['bold', 'normal', 'light']),
  /**
   * Color of the paragraphs. Default `body`, can be `primary`, `secondary`,`success`, `danger`,`warning`,`info`, `light`, `dark`, `body`
   */
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'body'
  ])
};
Paragraphs.defaultProps = {
  textAlign: 'justify',
  textTransform: '',
  textTruncate: false,
  textMonoSpace: false,
  fontItalic: false,
  fontWeight: 'normal',
  color: 'body'
};

export default Paragraphs;
