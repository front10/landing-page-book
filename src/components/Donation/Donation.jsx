import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Link from '../Link/Link';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class Donation extends Component {
  render() {
    const { url, image, imageAlt, imageWidth, className } = this.props;
    return (
      <Link className={className} href={url} target="_blank">
        <Image
          alt={imageAlt}
          src={image}
          width={imageWidth}
          {...extractProps('image', this.props)}
        />
      </Link>
    );
  }
}

Donation.propTypes = {
  /**
   * Image width
   */
  imageWidth: PropTypes.string,
  /**
   * Url of the project to donate
   */
  url: PropTypes.string.isRequired,
  /**
   * Link image
   */
  image: PropTypes.string,
  /**
   * Image alt to accessibility
   */
  imageAlt: PropTypes.string,
  /**
   * Class to apply to icon
   */
  className: PropTypes.string
};
Donation.defaultProps = {
  image: 'https://opencollective.com/webpack/donate/button@2x.png?color=blue',
  imageAlt: 'Open collective logo',
  imageWidth: '300',
  className: ''
};

export default withStyles(Donation);
