import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ImageList from '../../components/ImageList';

class BuiltWith extends Component {
	constructor(props) {
        super(props);
        this.state = {};
    }   
	
	render() {
		return <ImageList
                    gray={this.props.gray}
                    images={this.props.companies}
                />		
	}
}

BuiltWith.propTypes = {
	gray: PropTypes.bool,
	companies: PropTypes.array
};
BuiltWith.defaultProps = {
	gray: false,
	companies: []
};

export default BuiltWith;
