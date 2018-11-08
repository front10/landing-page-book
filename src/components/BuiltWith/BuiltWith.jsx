import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class BuiltWith extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, companies, className } = this.props;
    return (
      <ImageList
        gray={gray}
        images={companies}
        className={className}
        {...extractProps('image', this.props)}
      />
    );
  }
}

BuiltWith.propTypes = {
  /**
   * Class to apply to icon
   */
  className: PropTypes.string,
  /**
   * Define if image is gray scale
   */
  gray: PropTypes.bool,
  /**
   * Companies to show
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
