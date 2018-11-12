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
    const { companies, className, style } = this.props;
    return (
      <ImageList
        style={style}
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
  companies: []
};

export default withStyles(BuiltWith);
