import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react'

const Marker = ({color = "#d20000", icon = "fa-map-marker"}) => <h1 style={{color}}>
	<i className={`fa ${icon} fa-1x`}/>
</h1>;

class Location extends Component {

	renderMarkers() {
		return this.props.markers.map((marker, index) => {
			return <Marker key={index} color={marker.color} icon={marker.icon} lat={marker.lat} lng={marker.lng}/>
		});
	}

	render() {
		const {
			lat,
			lng,
			zoom,
			apiKey,
			language,
		} = this.props;
		const Marker = ({color = markerColor, icon = markerIcon}) => <h1 style={{color}}><i
			className={`fa ${icon} fa-1x`}/></h1>
		return <GoogleMapReact defaultCenter={{lat: lat, lng: lng}} defaultZoom={zoom}
		                       bootstrapURLKeys={{key: apiKey, language: language}}>
			{this.renderMarkers()}
		</GoogleMapReact>
	}
}

Location.propTypes = {
	lat: PropTypes.number,
	lng: PropTypes.number,
	zoom: PropTypes.number,
	apiKey: PropTypes.string,
	language: PropTypes.string,
	markers: PropTypes.array,
};
Location.defaultProps = {
	lat: 0,
	lng: 0,
	zoom: 1,
	apiKey: "",
	language: "en",
	markers: []
};

export default Location;
