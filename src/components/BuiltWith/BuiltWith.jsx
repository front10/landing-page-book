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
  /**
   * Define if image is gray scale. Default `false`
   */
  gray: PropTypes.bool,
  /**
   * Companies to show. Default `[]`
   */
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
