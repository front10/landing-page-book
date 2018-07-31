import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

class ImageList extends Component {
	constructor(props) {
        super(props);
		this.state = {};
	} 

	render() {
		const {images, gray} = this.props;
		return <div className="ImageList row">
			{images.map((Imag, index) => {
			return <div className={`ImageList__Container ${gray ? 'ImageList__Container--grayScale' : ''}`}
			            key={index}>
				<Image      
     			 alt={"This is an image example"}
    			  src={Imag.image}
    			  width={"100"}
    			  height={"100"}
    			/>
			</div>
		})}
		</div>
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
