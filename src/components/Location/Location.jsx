import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../LocationMarker';

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng, zoom, apiKey, language, markers } = this.props;
    const bootstrapURLKeys = { key: apiKey, language };

    return (
      <GoogleMapReact center={{ lat, lng }} zoom={zoom} bootstrapURLKeys={bootstrapURLKeys}>
        {markers.map((marker, index) => (
          <LocationMarker
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            color={marker.color}
            icon={marker.icon}
          />
        ))}
      </GoogleMapReact>
    );
  }
}

Location.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
  apiKey: PropTypes.string,
  language: PropTypes.string,
  markers: PropTypes.array
};
Location.defaultProps = {
  lat: 0,
  lng: 0,
  zoom: 1,
  apiKey: '',
  language: 'en',
  markers: []
};

export default Location;
