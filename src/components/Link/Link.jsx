import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tooltip: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Link.defaultProps = {
  disabled: false,
  className: '',
  tooltip: '',
  target: '',
  children: null
};

export default Link;
