import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    const { className, icon, style } = this.props;
    return <i className={`${icon} ${className}`} style={style} />;
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.objectOf(PropTypes.shape)
};
Icon.defaultProps = {
  className: '',
  style: {}
};

export default Icon;
