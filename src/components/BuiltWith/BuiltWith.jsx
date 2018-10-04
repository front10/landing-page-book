import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';

class BuiltWith extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, companies } = this.props;
    return <ImageList gray={gray} images={companies} />;
  }
}

BuiltWith.propTypes = {
  gray: PropTypes.bool,
  companies: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};
BuiltWith.defaultProps = {
  gray: false,
  companies: []
};

export default BuiltWith;
