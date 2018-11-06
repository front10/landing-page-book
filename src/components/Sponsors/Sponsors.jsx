import React from 'react';
import PropTypes from 'prop-types';
import ImageList from '../ImageList';
import withStyles from '../../helpers/WithStyles';

class Sponsors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { gray, sponsors, className } = this.props;
    return <ImageList className={className} gray={gray} images={sponsors} />;
  }
}

Sponsors.propTypes = {
  /**
   * Class name applied of the container. Default `"px-2"`
   */
  className: PropTypes.string,
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
  className: 'px-2',
  // eslint-disable-next-line react/default-props-match-prop-types
  padding: '2',
  gray: false,
  sponsors: []
};

export default withStyles(Sponsors, Sponsors.defaultProps);
