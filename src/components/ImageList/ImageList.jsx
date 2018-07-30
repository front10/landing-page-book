import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

class ImageList extends Component {
	constructor(props) {
        super(props);
        this.state = {};
    } 

	render() {
		const {images, gray} = this.props;
		return images.map((company, index) => {
			return <div className={`ImageList__Container ${gray ? 'ImageList__Container--grayScale' : ''}`}
			            key={index}>
				<Card imageCircle={false}
				      image={company.image}
				      showBorder={false}/>
			</div>
		});
	}
}

ImageList.propTypes = {
	gray: PropTypes.bool,
	images: PropTypes.array
};
ImageList.defaultProps = {
	gray: false,
	images: []
};

export default ImageList;
