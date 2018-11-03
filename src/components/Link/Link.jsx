import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    const { disabled, className, tooltip, href, target, children, style } = this.props;
    return (
      <React.Fragment>
        <a
          style={style}
          title={tooltip}
          disabled={disabled}
          className={className}
          href={href}
          target={target}
        >
          {children}
        </a>
      </React.Fragment>
    );
  }
}

Link.propTypes = {
  /**
   * Disable or enable button. Default `false`
   */
  disabled: PropTypes.bool,
  /**
   * CSS Class to apply to button. Default `""`
   */
  className: PropTypes.string,
  /**
   * Button tooltip. Default `""`
   */
  tooltip: PropTypes.string,
  /**
   * Link to open. Default `undefined`, this prop is required
   */
  href: PropTypes.string.isRequired,
  /**
   * Target of link. Default `""`
   */
  target: PropTypes.string,
  /**
   * Elements to show inside of Links
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * In case you wanted to pass custom styles `""`
   */
  style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Link.defaultProps = {
  disabled: false,
  className: '',
  tooltip: '',
  target: '',
  children: null,
  style: null
};

export default Link;
