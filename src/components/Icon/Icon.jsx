import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Icon extends Component {
  render() {
    const { className, icon, title, style, onClick } = this.props;
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return <i className={`${icon} ${className}`} style={style} title={title} onClick={onClick} />;
    /* eslint-enable jsx-a11y/click-events-have-key-events */
    /* eslint-enable jsx-a11y/no-static-element-interactions */
  }
}

Icon.propTypes = {
  /**
   * Class to apply to icon.
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   *  Icon name.
   */
  icon: PropTypes.string.isRequired,
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

export default withStyles(Icon);
