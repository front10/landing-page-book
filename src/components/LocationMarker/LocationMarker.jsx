import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LocationMarker extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {icon, color, children} = this.props;
		return <i className={icon} style={{color, fontSize: "1.5rem"}}/>
	}
}

LocationMarker.propTypes = {
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
	icon: PropTypes.string,
	color: PropTypes.string,
};
LocationMarker.defaultProps = {
	lat: undefined,
	lng: undefined,
	icon: "fa fa-map-marker",
	color: "#d43131"
};

export default LocationMarker;
