import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { alt, src, rounded, border, width, height, tooltip, className } = this.props;
    let tempClass = className;
    if (rounded) tempClass += ` rounded-circle`;
    if (border) tempClass += ` img-thumbnail`;
    return (
      <React.Fragment>
        {tooltip && <ReactTooltip />}
        <img
          data-tip={tooltip}
          alt={alt}
          src={src}
          className={tempClass}
          width={width}
          height={height}
        />
      </React.Fragment>
    );
  }
}

Image.propTypes = {
  border: PropTypes.bool,
  rounded: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  tooltip: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
Image.defaultProps = {
  border: false,
  rounded: false,
  className: 'img-fluid',
  width: undefined,
  height: undefined,
  tooltip: ''
};

export default Image;
