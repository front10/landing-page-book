import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { className, icon, style } = this.props;
    return <i className={`${icon} ${className}`} style={style} />;
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  style: PropTypes.object
};
Icon.defaultProps = {
  className: '',
  icon: undefined,
  style: {}
};

export default Icon;
