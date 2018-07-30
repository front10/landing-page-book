import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
	constructor(props) {
        super(props);
		this.state = {};
	} 


	render() {
		const {
			alt,
			src,
			rounded,
			border,
			width,
			height
		} = this.props;
		let className = this.props.className;
		if (rounded)
			className += ` rounded-circle`;
		if (border)
			className += ` img-thumbnail`;
		return <img
			alt={alt}
			src={src}
			className={className}
			width={width}
			height={height}/>
	}
}

Image.propTypes = {
	border: PropTypes.bool,
	rounded: PropTypes.bool,
	className: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	alt: PropTypes.string.isRequired,
	src: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]).isRequired
};
Image.defaultProps = {
	border: false,
	rounded: false,
	className: "img-fluid",
	width: undefined,
	height: undefined,
	alt: undefined,
	src: undefined,
};

export default Image;
