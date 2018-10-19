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
      outline
    } = this.props;
    /* eslint-disable react/button-has-type */
    return (
      <button
        title={tooltip}
        disabled={disabled}
        className={`Button btn ${className} ${outline ? 'Button--outline' : ''}`}
        onClick={onClick}
        aria-label={ariaLabel}
        type={type}
      >
        {!loading && children}
        {loading && <Icon icon={loadingClass} />}
      </button>
    );
    /* eslint-enable react/button-has-type */
  }
}

Button.propTypes = {
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingClass: PropTypes.string,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};
Button.defaultProps = {
  outline: false,
  disabled: false,
  loading: false,
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  className: '',
  ariaLabel: '',
  tooltip: '',
  type: 'button',
  children: null,
  onClick: () => {}
};

export default Button;
