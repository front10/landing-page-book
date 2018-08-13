import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { images, gray, imageRounded, imageWidth, imageHeight, imageBordered } = this.props;
    /* eslint-disable react/no-array-index-key */
    return (
      <div className="ImageList">
        {images.map((imag, key) => (
          <div
            className={`ImageList__Container ${gray ? 'ImageList__Container--grayScale' : ''}`}
            key={key}
          >
            <a href={imag.url}>
              <Image
                tooltip={imag.tooltip}
                alt="This is an image example"
                src={imag.image}
                rounded={imageRounded}
                width={imageWidth}
                height={imageHeight}
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
  gray: PropTypes.bool,
  imageRounded: PropTypes.bool,
  imageBordered: PropTypes.bool,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};
ImageList.defaultProps = {
  gray: false,
  imageRounded: false,
  imageBordered: false,
  imageWidth: '100',
  imageHeight: '100',
  images: []
};

export default ImageList;
