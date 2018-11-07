import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';
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
    if (outline) cssclass += `${className} btn-outline-${color}`;
    if (size) cssclass += `${cssclass} btn-${size}`;
    if (active) cssclass += `${cssclass} ${active}`;

    /* eslint-disable react/button-has-type */
    return (
      <button
        title={tooltip}
        disabled={disabled}
        className={`Button btn ${cssclass}`}
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
  /**
   * Disable or enable button. Default `false`
   */
  disabled: PropTypes.bool,
  /**
   * Show loading mode. Default `false`
   */
  loading: PropTypes.bool,
  /**
   * Show rounded button. Default `true`
   */
  rounded: PropTypes.bool,
  /**
   * Show circle button. Default `false`
   */
  circle: PropTypes.bool,
  /**
   * Define if button is only with border. Default `false`
   */
  outline: PropTypes.bool,
  /**
   * Define if button is active. Default `false`
   */
  active: PropTypes.bool,
  /**
   * Class to show loading indicator. Default `"fa fa-circle-o-notch fa-spin"`
   */
  loadingClass: PropTypes.string,
  /**
   * Class to apply to button. Default `""`
   */
  className: PropTypes.string,
  /**
   * Aria label of the button. Default `""`
   */
  ariaLabel: PropTypes.string,
  /**
   * Button tooltip. Default `""`
   */
  tooltip: PropTypes.string,
  /**
   * Button size, can be `lg` or `sm`. Default `""`
   */
  size: PropTypes.string,
  /**
   * Type of the button. Default `"button"`
   */
  type: PropTypes.string,
  /**
   * Color to apply to button. Default `"default"`
   */
  color: PropTypes.string,
  /**
   * Button styles. Default `""`
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Called when button is clicked
   */
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
  children: null,
  onClick: () => {}
};

const ButtonWithStyles = withStyles(Button);

export default ButtonWithStyles;
