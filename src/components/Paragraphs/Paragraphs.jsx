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
  text: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(['center', 'right', 'left', 'justify']),
  textTransform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize', '']),
  textTruncate: PropTypes.bool,
  textMonoSpace: PropTypes.bool,
  fontItalic: PropTypes.bool,
  fontWeight: PropTypes.oneOf(['bold', 'normal', 'light']),
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
