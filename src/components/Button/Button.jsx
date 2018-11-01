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
      onClick,
      loadingClass,
      style,
      rounded,
      circle,
      color,
      outline,
      size,
      active
    } = this.props;
    let cssclass = `${className} btn-${color}`;
    if (circle) cssclass += ` rounded-circle`;
    if (!rounded) cssclass += ` rounded-0`;
    if (outline) {
      cssclass = `${className} btn-outline-${color}`;
    }
    if (size) {
      cssclass = `${cssclass} btn-${size}`;
    }
    if (active) {
      cssclass = `${cssclass} ${active}`;
    }

    /* eslint-disable react/button-has-type */
    return (
      <button
        title={tooltip}
        disabled={disabled}
        className={`Button btn ${cssclass}`}
        onClick={onClick}
        aria-label={ariaLabel}
        type={type}
        style={style}
      >
        {!loading && children}
        {loading && <Icon icon={loadingClass} />}
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  outline: PropTypes.bool,
  active: PropTypes.bool,
  loadingClass: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  tooltip: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};
Button.defaultProps = {
  disabled: false,
  loading: false,
  rounded: true,
  circle: false,
  outline: false,
  active: false,
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  className: '',
  ariaLabel: '',
  tooltip: '',
  size: '',
  type: 'button',
  color: 'light',
  style: {},
  children: null,
  onClick: () => {}
};

export default Button;
