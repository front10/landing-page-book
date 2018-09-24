import React from 'react';
import PropTypes from 'prop-types';

const TextBox = ({ className, title, text }) => (
  <div className={className}>
    <h3 className={`${className}__title`}>{title}</h3>
    <p className={`${className}__text`}>{text}</p>
  </div>
);

TextBox.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};
TextBox.defaultProps = {
  className: '',
  title: '',
  text: ''
};

export default TextBox;
