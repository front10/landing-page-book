import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

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
    const { alt, src, rounded, border, width, tooltip, className, shadow, style } = this.props;
    const { loaded } = this.state;
    let tempClass = className;
    tempClass += ` img-fluid`;
    if (rounded) tempClass += ` rounded-circle`;
    if (border) tempClass += ` img-thumbnail`;
    const styles = Object.assign({}, { display: !loaded ? 'none' : '' }, style);
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
  /**
   * Show or hide image borders.
   */
  border: PropTypes.bool,
  /**
   * Show circled image.
   */
  rounded: PropTypes.bool,
  /**
   * Define if image is show with shadow.
   */
  shadow: PropTypes.bool,
  /**
   * CSS class to apply to image.
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Image width.
   */
  width: PropTypes.string,
  /**
   * Image tooltip.
   */
  tooltip: PropTypes.string,
  /**
   *  Image alt.
   */
  alt: PropTypes.string.isRequired,
  /**
   *  Image source.
   */
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};
Image.defaultProps = {
  border: false,
  rounded: false,
  shadow: false,
  className: 'img-fluid',
  style: null,
  width: undefined,
  tooltip: ''
};

export default withStyles(Image);
