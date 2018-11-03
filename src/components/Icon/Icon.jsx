import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { className, icon, style, title, onClick } = this.props;
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return <i className={`${icon} ${className}`} style={style} title={title} onClick={onClick} />;
    /* eslint-enable jsx-a11y/click-events-have-key-events */
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

Icon.propTypes = {
  /**
   * Class to apply to icon. Default `""`
   */
  className: PropTypes.string,
  /**
   *  Icon name. Default `undefined`, this prop is required
   */
  icon: PropTypes.string.isRequired,
  /**
   * Custom styles to apply
   */
  style: PropTypes.objectOf(PropTypes.shape),
  /**
   *  callback function to call when onClick event is fire.
   */
  onClick: PropTypes.func,
  /**
   * Title of the icon.
   */
  title: PropTypes.string
};
Icon.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
  title: ''
};

export default Icon;
