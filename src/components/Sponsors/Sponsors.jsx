import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, sponsors, ccsClassName } = this.props;
    return <ImageList ccsClassName={ccsClassName} gray={gray} images={sponsors} />;
  }
}

Sponsors.propTypes = {
  /**
   * Class name applied of the container. Default `"px-2"`
   */
  ccsClassName: PropTypes.string,
  /**
   * Define if image is gray scale. Default `false`
   */
  gray: PropTypes.bool,
  /**
   * Companies to show. Default `[]`, see example section
   */
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string
    })
  )
};

Sponsors.defaultProps = {
  ccsClassName: 'px-2',
  gray: false,
  sponsors: []
};

export default Sponsors;
