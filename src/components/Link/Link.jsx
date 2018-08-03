import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {disabled, className, tooltip, href, target, children} = this.props;
    return (
      <React.Fragment>
        {tooltip && <ReactTooltip />}
        <a
          data-tip={tooltip}
          disabled={disabled}
          className={className}
          href={href}
          target={target}
        >
          {children}
        </a>
      </React.Fragment>
    )
  }
}

Link.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  tooltip: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};
Link.defaultProps = {
  disabled: false,
  className: "",
  tooltip: "",
  href: undefined,
  target: ""
};

export default Link;
