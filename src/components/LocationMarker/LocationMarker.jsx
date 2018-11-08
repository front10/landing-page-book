import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import withStyles from '../../helpers/WithStyles';

class LocationMarker extends Component {
  render() {
    const { icon, className, lat, lng } = this.props;
    return <Icon className={className} icon={icon} lat={lat} lng={lng} />;
  }
}

LocationMarker.propTypes = {
  /**
   * Class to apply.
   */
  className: PropTypes.string,
  /**
   * Marker latitude.
   */
  lat: PropTypes.number.isRequired,
  /**
   * Marker longitude.
   */
  lng: PropTypes.number.isRequired,
  /**
   * Icon to show in the marker.
   */
  icon: PropTypes.string
  // /**
  //  * Marker color. Default `"#d43131"`
  //  */
  // color: PropTypes.string
};
LocationMarker.defaultProps = {
  className: '',
  icon: 'fa fa-map-marker'
  // color: '#d43131'
};

export default withStyles(LocationMarker);
