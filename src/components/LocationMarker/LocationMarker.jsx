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
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string
};
LocationMarker.defaultProps = {
  icon: 'fa fa-map-marker',
  color: '#d43131'
};

export default LocationMarker;
