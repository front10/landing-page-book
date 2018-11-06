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
    const { alt, src, rounded, border, width, tooltip, className, imgFilter, shadow } = this.props;
    const { loaded } = this.state;
    let tempClass = className;
    tempClass += ` img-fluid`;
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
  /**
   * Show or hide image borders. Default `false`
   */
  border: PropTypes.bool,
  /**
   * Show circled image. Default `false`
   */
  rounded: PropTypes.bool,
  /**
   * Define if image is show with shadow. Default `false`
   */
  shadow: PropTypes.bool,
  /**
   * CSS class to apply to image. Default `"img-fluid"`
   */
  className: PropTypes.string,
  /**
   * Image width. Default `undefined`
   */
  width: PropTypes.string,
  /**
   * Image tooltip. Default `""`
   */
  tooltip: PropTypes.string,
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgFilter: PropTypes.string,
  /**
   *  Image alt. Default `undefined`, this field is required
   */
  alt: PropTypes.string.isRequired,
  /**
   *  Image source. Default `undefined`, this field is required
   */
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

export default withStyles(Image);
