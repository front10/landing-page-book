import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sponsors } = this.props;
    return <ImageList images={sponsors} {...extractProps('image', this.props)} />;
  }
}

Sponsors.propTypes = {
  /**
   * Companies to show.
   */
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};

Sponsors.defaultProps = {
  sponsors: []
};

export default withStyles(Sponsors);
