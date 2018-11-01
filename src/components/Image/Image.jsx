import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.image = React.createRef();
    this.onUpdate = this.onUpdate.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentDidMount() {
    this.handleImageLoaded();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { src } = this.props;
    if (prevProps.src !== src) this.setState({ loaded: false });
  }

  handleImageLoaded() {
    const img = this.image.current;
    if (img && img.complete) {
      this.setState({ loaded: true });
    }
  }

  render() {
    const { alt, src, rounded, border, width, tooltip, className, imgFilter, shadow } = this.props;
    const { loaded } = this.state;
    let tempClass = className;
    if (rounded) tempClass += ` rounded-circle`;
    if (border) tempClass += ` img-thumbnail`;
    const styles = {
      filter: imgFilter && imgFilter,
      display: !loaded ? 'none' : ''
    };
    if (shadow) tempClass += ` img-shadow`;
    return (
      <React.Fragment>
        <img
          title={tooltip}
          alt={alt}
          src={src}
          className={tempClass}
          width={width}
          style={styles}
          onLoad={this.handleImageLoaded}
          ref={this.image}
        />
        {!loaded && (
          <svg alt={alt} className={tempClass} width={width} viewBox="0 0 100 100">
            <g>
              {tooltip && <title>{tooltip}</title>}
              <rect width="100" height="100" fill="#CCC" />
            </g>
          </svg>
        )}
      </React.Fragment>
    );
  }
}

Image.propTypes = {
  border: PropTypes.bool,
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  tooltip: PropTypes.string,
  imgFilter: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
Image.defaultProps = {
  border: false,
  rounded: false,
  shadow: false,
  className: 'img-fluid',
  width: undefined,
  tooltip: '',
  imgFilter: null
};

export default Image;
