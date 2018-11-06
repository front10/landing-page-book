import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';
import withStyles from '../../helpers/WithStyles';

class BuiltWith extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, companies, className } = this.props;
    return <ImageList gray={gray} images={companies} className={className} />;
  }
}

BuiltWith.propTypes = {
  /**
   * Class to apply to icon. Default `""`
   */
  className: PropTypes.string,
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
  className: '',
  gray: false,
  companies: []
};

export default withStyles(BuiltWith);
