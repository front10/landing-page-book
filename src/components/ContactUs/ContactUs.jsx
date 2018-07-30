import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';
import ContactUsService from "../../service/ContactUs.services";
import Button from "../Button";
import FormGroup from "../FormGroup";

class ContactUs extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeMail = this.onChangeMail.bind(this);
		this.onChangePhone = this.onChangePhone.bind(this);
		this.onChangeMessage = this.onChangeMessage.bind(this);
	}

	componentWillMount() {
		this.setState({
			name: this.props.name,
			mail: this.props.mail,
			phone: this.props.phone,
			message: this.props.message,
			loading: this.props.loading
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.name !== this.state.name)
			this.setState({name: nextProps.name});
		if (nextProps.mail !== this.state.mail)
			this.setState({mail: nextProps.mail});
		if (nextProps.phone !== this.state.phone)
			this.setState({phone: nextProps.phone});
		if (nextProps.message !== this.state.message)
			this.setState({message: nextProps.message});
		if (nextProps.loading !== this.state.loading)
			this.setState({loading: nextProps.loading});
	}

	onSubmit() {
		this.props.onSubmit(this.state);
		if (this.props.apiUrl) {
			this.setState({loading: true}, () => {
				ContactUsService.send(this.props.apiUrl, this.state.name, this.state.mail, this.state.phone, this.state.message)
					.then(() => {
						this.props.onApiSuccess();
						this.setState({loading: false});
					})
					.catch(() => {
						this.props.onApiFail();
						this.setState({loading: false});
					});
			});
		}
	}

	onChangeName($event) {
		this.setState({name: $event.currentTarget.value});
	}

	onChangeMail($event) {
		this.setState({mail: $event.currentTarget.value});
	}

	onChangePhone($event) {
		this.setState({phone: $event.currentTarget.value});
	}

	onChangeMessage($event) {
		this.setState({message: $event.currentTarget.value});
	}

	render() {
		const {
			nameText,
			mailText,
			phoneText,
			messageText,
			showText,
			showPlaceholder,
			submitButtonText,
			submitButtonAlign
		} = this.props;
		return <div className="ContactUs">
			<FormGroup>
				{
					showText &&
					<label htmlFor="contactNameTextLabel" className="ContactUs__Label">{nameText}</label>
				}
				<input type="text" className="form-control ContactUs__Input" id="contactNameTextLabel"
				       placeholder={showPlaceholder ? nameText : ""}
				       value={this.state.name}
				       onChange={this.onChangeName}/>
			</FormGroup>
			<FormGroup>
				{
					showText &&
					<label htmlFor="contactEmailTextLabel" className="ContactUs__Label">{mailText}</label>
				}
				<input type="email" className="form-control ContactUs__Input" id="contactEmailTextLabel"
				       placeholder={showPlaceholder ? mailText : ""}
				       value={this.state.mail}
				       onChange={this.onChangeMail}/>
			</FormGroup>
			<FormGroup>
				{
					showText &&
					<label htmlFor="contactPhoneTextLabel" className="ContactUs__Label">{phoneText}</label>
				}
				<input type="text" className="form-control ContactUs__Input" id="contactPhoneTextLabel"
				       placeholder={showPlaceholder ? phoneText : ""}
				       value={this.state.phone}
				       onChange={this.onChangePhone}/>
			</FormGroup>
			<FormGroup>
				{
					showText &&
					<label htmlFor="contactMessageTextLabel" className="ContactUs__Label">{messageText}</label>
				}
				<textarea className="form-control ContactUs__Input" id="contactMessageTextLabel" rows="5"
				          placeholder={showPlaceholder ? messageText : ""}
				          value={this.state.message}
				          onChange={this.onChangeMessage}/>
			</FormGroup>
			<div className={`text-${submitButtonAlign}`}>
				<Button
					loading={this.state.loading}
					disabled={!this.state.name || !this.state.message || !EmailValidator.validate(this.state.mail) || this.state.loading}
					className="btn ContactUs__SubmitButton"
					onClick={this.onSubmit}>
					{submitButtonText}
				</Button>
			</div>
		</div>
	}
}

ContactUs.propTypes = {
	showText: PropTypes.bool,
	showPlaceholder: PropTypes.bool,
	loading: PropTypes.bool,
	nameText: PropTypes.string,
	mailText: PropTypes.string,
	phoneText: PropTypes.string,
	messageText: PropTypes.string,
	name: PropTypes.string,
	mail: PropTypes.string,
	phone: PropTypes.string,
	message: PropTypes.string,
	submitButtonText: PropTypes.string,
	submitButtonAlign: PropTypes.string,
	apiUrl: PropTypes.string,
	onSubmit: PropTypes.func,
	onApiSuccess: PropTypes.func,
	onApiFail: PropTypes.func,
};
ContactUs.defaultProps = {
	showText: false,
	showPlaceholder: true,
	loading: false,
	nameText: "Your Name",
	mailText: "Your Email",
	phoneText: "Your Phone",
	messageText: "Your Message",
	name: "",
	mail: "",
	phone: "",
	message: "",
	submitButtonText: "Submit",
	submitButtonAlign: "center",
	apiUrl: "",
	onSubmit: ({name, mail, phone, message}) => {
	},
	onApiSuccess: () => {
	},
	onApiFail: () => {
	}
};

export default ContactUs;
