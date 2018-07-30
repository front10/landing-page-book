import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Label from "../Label/Label";

class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount() {
		this.setState({value: this.props.value});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.value !== this.state.value)
			this.setState({value: nextProps.value});
	}

	onChange($event) {
		this.setState({value: $event.target.value});
		this.props.onChange({value: this.state.value})
	}

	render() {
		const {className, type, id, name, placeholder, label, labelColon} = this.props;
		let props = {
			className: `Input form-control ${className}`,
			type: type,
			name: name,
			id: id,
			value: this.state.value,
			placeholder: placeholder,
			onChange: this.onChange
		};
		return <React.Fragment>
			{
				label &&
				<Label
					label={label}
					htmlFor={id}
					colon={labelColon}/>
			}
			{type !== 'textarea' && <input {...props}/>}
			{type === 'textarea' && <textarea {...props}/>}
		</React.Fragment>
	}
}

Input.propTypes = {
	labelColon: PropTypes.bool,
	className: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	onChange: PropTypes.func,
};
Input.defaultProps = {
	labelColon: false,
	className: "",
	type: "text",
	id: "",
	name: "",
	value: "",
	placeholder: "",
	label: "",
	onChange: () => {

	}
};

export default Input;
