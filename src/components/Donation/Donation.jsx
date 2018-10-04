import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Link from '../Link/Link';

class Donation extends Component {
  render() {
    const { url, image, imageAlt, imageWidth } = this.props;
    return (
      <Link href={url} target="_blank">
        <Image alt={imageAlt} src={image} width={imageWidth} />
      </Link>
    );
  }
}

Donation.propTypes = {
  imageWidth: PropTypes.string,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};
Donation.defaultProps = {
  image: 'https://opencollective.com/webpack/donate/button@2x.png?color=blue',
  imageAlt: 'Open collective logo',
  imageWidth: '300'
};

export default Donation;
