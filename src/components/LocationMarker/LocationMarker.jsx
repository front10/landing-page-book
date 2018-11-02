import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

class LocationMarker extends Component {
  render() {
    const { icon, color, lat, lng } = this.props;
    return <Icon icon={icon} style={{ color, fontSize: '1.5rem' }} lat={lat} lng={lng} />;
  }
}

LocationMarker.propTypes = {
  /**
   * Marker latitude. Default `undefined`, this field is required
   */
  lat: PropTypes.number.isRequired,
  /**
   * Marker longitude. Default `undefined`, this field is required
   */
  lng: PropTypes.number.isRequired,
  /**
   * Icon to show in the marker. Default `"fa fa-map-marker"`
   */
  icon: PropTypes.string,
  /**
   * Marker color. Default `"#d43131"`
   */
  color: PropTypes.string
};
LocationMarker.defaultProps = {
  icon: 'fa fa-map-marker',
  color: '#d43131'
};

export default LocationMarker;
