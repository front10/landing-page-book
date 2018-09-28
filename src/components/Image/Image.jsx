import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.image = React.createRef();
    this.onUpdate = this.onUpdate.bind(this);
    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  componentWillMount() {
    this.setState({
      loaded: false
    });
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
    const { alt, src, rounded, border, width, height, tooltip, className } = this.props;
    const { loaded } = this.state;
    let tempClass = className;
    if (rounded) tempClass += ` rounded-circle`;
    if (border) tempClass += ` img-thumbnail`;
    return (
      <React.Fragment>
        <img
          title={tooltip}
          alt={alt}
          src={src}
          className={tempClass}
          width={width}
          height={height}
          style={!loaded ? { display: 'none' } : {}}
          onLoad={this.handleImageLoaded}
          ref={this.image}
        />
        {!loaded && (
          <svg alt={alt} className={tempClass} width={width} height={height} viewBox="0 0 100 100">
            <rect width="100" height="100" fill="#CCC">
              <title>{tooltip}</title>
            </rect>
          </svg>
        )}
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
