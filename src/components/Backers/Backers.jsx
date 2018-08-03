import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList/ImageList';

class Backers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formatData = this.formatData.bind(this);
  }

  componentWillMount() {
    this.formatData();
  }

  formatData() {
    let { backers } = this.props;
    backers = backers.map(backer => ({
      image: backer.image,
      tooltip: `$${backer.contributionAmount} by ${backer.name}`,
      url: backer.profile
    }));
    this.setState({ backers });
  }

  render() {
    const { imageWidth, imageHeight, imageRounded, imageGray, imageBordered } = this.props;
    const { backers } = this.state;
    return (
      <div className="Backers">
        <ImageList
          imageRounded={imageRounded}
          gray={imageGray}
          images={backers}
          imageBordered={imageBordered}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
        />
      </div>
    );
  }
}

Backers.propTypes = {
  imageRounded: PropTypes.bool,
  imageBordered: PropTypes.bool,
  imageGray: PropTypes.bool,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  backers: PropTypes.array
};
Backers.defaultProps = {
  imageRounded: true,
  imageBordered: true,
  imageGray: false,
  imageWidth: '50',
  imageHeight: '50',
  backers: []
};

export default Backers;
