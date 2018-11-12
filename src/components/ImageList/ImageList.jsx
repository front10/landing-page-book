import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { images, imageWidth, className, style } = this.props;
    /* eslint-disable react/no-array-index-key */
    return (
      <div className="ImageList">
        {images.map((imag, key) => (
          <div className={`ImageList__Container ${className} `} style={style} key={key}>
            <a href={imag.url}>
              <Image
                tooltip={imag.tooltip}
                alt="This is an image example"
                src={imag.image}
                width={imageWidth}
                {...extractProps('image', this.props)}
              />
            </a>
          </div>
        ))}
      </div>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

ImageList.propTypes = {
  /**
   * CSS class name for custom styles
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Image width
   */
  imageWidth: PropTypes.string,
  /**
   *  Padding to apply to Footer.
   */
  padding: PropTypes.string,
  /**
   * Images to show
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};
ImageList.defaultProps = {
  className: '',
  style: {},
  padding: '2',
  imageWidth: '100',
  images: []
};

export default withStyles(ImageList);
