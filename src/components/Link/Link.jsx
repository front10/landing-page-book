import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Link extends Component {
  render() {
    const { disabled, className, tooltip, href, target, children } = this.props;
    return (
      <React.Fragment>
        <a title={tooltip} disabled={disabled} className={className} href={href} target={target}>
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Link.defaultProps = {
  disabled: false,
  className: '',
  tooltip: '',
  target: '',
  children: null
};

const LinkWithStyles = withStyles(Link);
export default LinkWithStyles;
