import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../LocationMarker';

class Location extends Component {
  render() {
    const { lat, lng, zoom, apiKey, language, markers } = this.props;
    const bootstrapURLKeys = { key: apiKey, language };

    return (
      <GoogleMapReact center={{ lat, lng }} zoom={zoom} bootstrapURLKeys={bootstrapURLKeys}>
        {markers.map(marker => (
          <LocationMarker
            key={`${marker.lat}_${marker.lng}`}
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
  /**
   * Latitude to initial center map. Default `0`
   */
  lat: PropTypes.number,
  /**
   * Longitude to initial center map. Default `0`
   */
  lng: PropTypes.number,
  /**
   * Zoom level of map. Default `1`
   */
  zoom: PropTypes.number,
  /**
   * Key of google maps project. Default `""`
   */
  apiKey: PropTypes.string,
  /**
   * Language of map. Default `"en"`
   */
  language: PropTypes.string,
  /**
   * Markers to shoe in the map. Default `[]`, see example section
   */
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  )
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
