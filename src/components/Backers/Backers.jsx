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
    this.formatData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    const { backers } = this.state;
    if (nextProps.backers !== backers) {
      this.formatData(nextProps);
    }
  }

  formatData({ backers }) {
    const back = backers.map(backer => ({
      image: backer.image,
      tooltip: `$${backer.contributionAmount} by ${backer.name}`,
      url: backer.profile
    }));
    this.setState({ backers: back });
  }

  render() {
    const { imageRounded, imageGray, imageBordered } = this.props;
    const { backers } = this.state;
    return (
      <div className="Backers">
        <ImageList
          imageRounded={imageRounded}
          gray={imageGray}
          images={backers}
          imageBordered={imageBordered}
        />
      </div>
    );
  }
}

Backers.propTypes = {
  imageRounded: PropTypes.bool,
  imageBordered: PropTypes.bool,
  imageGray: PropTypes.bool,
  backers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      profile: PropTypes.string,
      image: PropTypes.string,
      contributionAmount: PropTypes.number
    })
  )
};
Backers.defaultProps = {
  imageRounded: true,
  imageBordered: true,
  imageGray: false,
  backers: []
};

export default Backers;
