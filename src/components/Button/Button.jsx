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
      color,
      outline,
      size,
      active
    } = this.props;
    let cssclass = `${className} btn-${color}`;
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
   * Disable or enable button
   */
  disabled: PropTypes.bool,
  /**
   * Show loading mode
   */
  loading: PropTypes.bool,
  /**
   * Define if button is only with border
   */
  outline: PropTypes.bool,
  /**
   * Define if button is active
   */
  active: PropTypes.bool,
  /**
   * Class to show loading indicator
   */
  loadingClass: PropTypes.string,
  /**
   * Class to apply to button
   */
  className: PropTypes.string,
  /**
   * Aria label of the button
   */
  ariaLabel: PropTypes.string,
  /**
   * Button tooltip
   */
  tooltip: PropTypes.string,
  /**
   * Button size. Can be <code>'lg'</code>, <code>'sm'</code>
   */
  size: PropTypes.string,
  /**
   * Type of the button
   */
  type: PropTypes.string,
  /**
   * Color to apply to button
   */
  color: PropTypes.string,
  /**
   * Button styles
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
