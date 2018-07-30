import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

	render() {
		const {className} = this.props;
		return <input className={`Input form-control ${className}`}/>
	}
}

Input.propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
};
Input.defaultProps = {
	className: "",
	type: "text"
};

export default Input;
