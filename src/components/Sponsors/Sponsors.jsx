import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, sponsors } = this.props;
    return <ImageList gray={gray} images={sponsors} />;
  }
}

Sponsors.propTypes = {
  gray: PropTypes.bool,
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};

Sponsors.defaultProps = {
  gray: false,
  sponsors: []
};

export default Sponsors;
