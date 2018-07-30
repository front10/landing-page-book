import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormGroup extends Component {

	render() {
		const {className, children} = this.props;
		return <div className={className}>
			{children}
		</div>
	}
}

FormGroup.propTypes = {
	className: PropTypes.string
};
FormGroup.defaultProps = {
	className: "form-group"
};

export default FormGroup;
