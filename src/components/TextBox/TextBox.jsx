import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

const TextBox = ({ className, title, text, style }) => (
  <div className={className} style={style}>
    <h3 className="TextBox__title">{title}</h3>
    <p className="TextBox__content">{text}</p>
  </div>
);

TextBox.propTypes = {
  /**
   * Text to show as title.
   */
  title: PropTypes.string,
  /**
   * Text to show as content.
   */
  text: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Class to applay to component
   */
  className: PropTypes.string
};

TextBox.defaultProps = {
  title: '',
  text: '',
  style: null,
  className: null
};

const TextBoxWithStyles = withStyles(TextBox);
export default TextBoxWithStyles;
