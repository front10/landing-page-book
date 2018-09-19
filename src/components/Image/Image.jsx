import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    this.setState({
      loaded: false
    });
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { src } = this.props;
    if (prevProps.src !== src) this.setState({ loaded: false });
  }

  render() {
    const { alt, src, rounded, border, width, height, tooltip, className } = this.props;
    const { loaded } = this.state;
    let tempClass = className;
    let widthTemp = width;
    if (rounded) tempClass += ` rounded-circle`;
    if (border) tempClass += ` img-thumbnail`;
    if (!width) widthTemp = 100;
    console.log(width);
    console.log(!width);
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
          onLoad={() => this.setState({ loaded: true })}
        />
        {!loaded && (
          <ContentLoader
            height={widthTemp / 4}
            width={widthTemp / 4}
            speed={1}
            className={tempClass}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="0" y="0" rx="0" ry="0" width={widthTemp} height={widthTemp} />
          </ContentLoader>
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
