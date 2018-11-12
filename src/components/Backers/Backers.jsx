import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList/ImageList';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class Backers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formatData = this.formatData.bind(this);
  }

  componentDidMount() {
    this.formatData(this.props);
  }

  componentDidUpdate(prevProps) {
    const { backers } = this.props;
    if (prevProps.backers !== backers) {
      this.formatData(this.props);
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
    const { imageRounded, imageBordered, className, style } = this.props;
    const { backers } = this.state;
    return (
      <div className="Backers">
        <ImageList
          imageRounded={imageRounded}
          images={backers}
          imageBordered={imageBordered}
          className={className}
          style={style}
          {...extractProps('backer', this.props)}
        />
      </div>
    );
  }
}

Backers.propTypes = {
  /**
   * CSS class name for custom styles
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * If true the image will be rounded as a circle
   */
  imageRounded: PropTypes.bool,
  /**
   * If true the image will have a solid border
   */
  imageBordered: PropTypes.bool,
  /**
   * List of backers
   */
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
  className: '',
  style: null,
  imageRounded: true,
  imageBordered: true,
  backers: []
};

export default withStyles(Backers);
