import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class Button extends Component {
  render() {
    const {
      disabled,
      className,
      loading,
      tooltip,
      children,
      ariaLabel,
      type,
      onClick
    } = this.props;
    /* eslint-disable react/button-has-type */
    return (
      <button
        title={tooltip}
        disabled={disabled}
        className={`Button btn ${className}`}
        onClick={onClick}
        aria-label={ariaLabel}
        type={type}
      >
        {!loading && children}
        {loading && <Icon icon="fa fa-circle-o-notch fa-spin" />}
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};
Button.defaultProps = {
  disabled: false,
  loading: false,
  className: '',
  ariaLabel: '',
  tooltip: '',
  type: 'button',
  children: null,
  onClick: () => {}
};

export default Button;
