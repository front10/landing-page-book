import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../LocationMarker';
import withStyles from '../../helpers/WithStyles';

class Location extends Component {
  render() {
    const { lat, lng, zoom, apiKey, language, markers, className, height } = this.props;
    const bootstrapURLKeys = { key: apiKey, language };

    return (
      <div className={className} style={{ height }}>
        <GoogleMapReact center={{ lat, lng }} zoom={zoom} bootstrapURLKeys={bootstrapURLKeys}>
          {markers.map(marker => (
            <LocationMarker
              key={`${marker.lat}_${marker.lng}`}
              lat={marker.lat}
              lng={marker.lng}
              textColor={marker.color}
              icon={marker.icon}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

Location.propTypes = {
  /**
   * Latitude to initial center map.
   */
  lat: PropTypes.number,
  /**
   * Longitude to initial center map.
   */
  lng: PropTypes.number,
  /**
   * Zoom level of map.
   */
  zoom: PropTypes.number,
  /**
   * Key of google maps project.
   */
  apiKey: PropTypes.string,
  /**
   * Language of map.
   */
  language: PropTypes.string,
  /**
   * Markers to shoe in the map.
   */
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  ),
  /**
   * Class to apply.
   */
  className: PropTypes.string,
  /**
   * Height of the map.
   */
  height: PropTypes.string
};
Location.defaultProps = {
  lat: 0,
  lng: 0,
  zoom: 1,
  apiKey: '',
  language: 'en',
  markers: [],
  className: '',
  height: '50vh'
};

export default withStyles(Location);
