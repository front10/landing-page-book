import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import Icon from '../Icon/Icon';

class Button extends Component {
  render() {
    const {
      disabled,
      className,
      loading,
      tooltip,
      children,
      btntype,
      ariaLabel,
      onClick
    } = this.props;
    return (
      <React.Fragment>
        {tooltip && <ReactTooltip />}
        <button
          data-tip={tooltip}
          disabled={disabled}
          className={`Button btn ${className}`}
          onClick={onClick}
          type={btntype}
          aria-label={ariaLabel}
        >
          {!loading && children}
          {loading && <Icon icon="fa fa-circle-o-notch fa-spin" />}
        </button>
      </React.Fragment>
    );
  }
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
  tooltip: PropTypes.string,
  btntype: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onClick: PropTypes.func
};
Button.defaultProps = {
  disabled: false,
  loading: false,
  className: '',
  ariaLabel: '',
  tooltip: '',
  btntype: 'submit',
  children: null,
  onClick: () => {}
};

export default Button;
