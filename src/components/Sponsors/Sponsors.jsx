import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ImageList gray={this.props.gray} images={this.props.sponsors} />;
  }
}

Sponsors.propTypes = {
  gray: PropTypes.bool,
  companies: PropTypes.array
};

Sponsors.defaultProps = {
  gray: false,
  sponsors: []
};

export default Sponsors;
