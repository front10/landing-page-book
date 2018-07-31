import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {className, icon} = this.props;
		return <i className={`${icon} ${className}`}/>
	}
}

Icon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string.isRequired,
};
Icon.defaultProps = {
	className: "",
	icon: undefined,
};

export default Icon;
