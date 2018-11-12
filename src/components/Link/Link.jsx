import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Link extends Component {
  render() {
    const { disabled, className, tooltip, href, target, children, style } = this.props;
    return (
      <React.Fragment>
        <a
          title={tooltip}
          disabled={disabled}
          className={className}
          href={href}
          target={target}
          style={style}
        >
          {children}
        </a>
      </React.Fragment>
    );
  }
}

Link.propTypes = {
  /**
   * Disable or enable button.
   */
  disabled: PropTypes.bool,
  /**
   * CSS Class to apply to button.
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Button tooltip.
   */
  tooltip: PropTypes.string,
  /**
   * Link to open.
   */
  href: PropTypes.string.isRequired,
  /**
   * Target of link.
   */
  target: PropTypes.string,
  /**
   * Elements to show inside of Links
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Link.defaultProps = {
  disabled: false,
  className: '',
  style: null,
  tooltip: '',
  target: '',
  children: null
};

export default withStyles(Link);
