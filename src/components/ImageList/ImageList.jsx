import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { images, gray, imageRounded, imageWidth, imageBordered, ccsClassName } = this.props;
    /* eslint-disable react/no-array-index-key */
    return (
      <div className="ImageList">
        {images.map((imag, key) => (
          <div
            className={`ImageList__Container ${ccsClassName} ${
              gray ? 'ImageList__Container--grayScale' : ''
            }`}
            key={key}
          >
            <a href={imag.url}>
              <Image
                tooltip={imag.tooltip}
                alt="This is an image example"
                src={imag.image}
                rounded={imageRounded}
                width={imageWidth}
                border={imageBordered}
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
  ccsClassName: PropTypes.string,
  /**
   * Define if image is gray scale. Default `false`
   */
  gray: PropTypes.bool,
  /**
   * Define if image is rounded. Default `false`
   */
  imageRounded: PropTypes.bool,
  /**
   * Define if image is borded. Default `false`
   */
  imageBordered: PropTypes.bool,
  /**
   * Image width. Default `"100"`
   */
  imageWidth: PropTypes.string,
  /**
   * Images to show. Default `[]`
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};
ImageList.defaultProps = {
  ccsClassName: 'px-2',
  gray: false,
  imageRounded: false,
  imageBordered: false,
  imageWidth: '100',
  images: []
};

export default ImageList;
