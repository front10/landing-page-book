import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';
import ContactUsService from '../../service/ContactUs.services';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input/Input';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    const { name, mail, phone, message, loading } = this.props;
    this.setState({
      name,
      mail,
      phone,
      message,
      loading
    });
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { name, mail, phone, message, loading } = this.props;
    if (prevProps.name !== name) this.setState({ name });
    if (prevProps.mail !== mail) this.setState({ mail });
    if (prevProps.phone !== phone) this.setState({ phone });
    if (prevProps.message !== message) this.setState({ message });
    if (prevProps.loading !== loading) this.setState({ loading });
  }

  onSubmit() {
    const { onSubmit, apiUrl, onApiSuccess, onApiFail } = this.props;
    onSubmit(this.state);
    if (apiUrl) {
      this.setState({ loading: true }, () => {
        const { name, mail, phone, message } = this.state;
        ContactUsService.send(apiUrl, name, mail, phone, message)
          .then(() => {
            onApiSuccess();
            this.setState({ loading: false });
          })
          .catch(() => {
            onApiFail();
            this.setState({ loading: false });
          });
      });
    }
  }

  onChangeName({ value }) {
    this.setState({ name: value });
  }

  onChangeMail({ value }) {
    this.setState({ mail: value });
  }

  onChangePhone({ value }) {
    this.setState({ phone: value });
  }

  onChangeMessage({ value }) {
    this.setState({ message: value });
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
    const { name, mail, phone, message, loading } = this.state;
    return (
      <div className="ContactUs">
        <FormGroup>
          <Input
            label={showText ? nameText : ''}
            id="contactNameTextLabel"
            placeholder={showPlaceholder ? nameText : ''}
            value={name}
            onChange={this.onChangeName}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={showText ? mailText : ''}
            type="email"
            id="contactEmailTextLabel"
            placeholder={showPlaceholder ? mailText : ''}
            value={mail}
            onChange={this.onChangeMail}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={showText ? phoneText : ''}
            id="contactPhoneTextLabel"
            placeholder={showPlaceholder ? phoneText : ''}
            value={phone}
            onChange={this.onChangePhone}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={showText ? messageText : ''}
            type="textarea"
            id="contactMessageTextLabel"
            placeholder={showPlaceholder ? messageText : ''}
            value={message}
            onChange={this.onChangeMessage}
          />
        </FormGroup>
        <div className={`text-${submitButtonAlign}`}>
          <Button
            loading={loading}
            disabled={!name || !message || !EmailValidator.validate(mail) || loading}
            className="btn ContactUs__SubmitButton"
            onClick={this.onSubmit}
          >
            {submitButtonText}
          </Button>
        </div>
      </div>
    );
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
  onApiFail: PropTypes.func
};
ContactUs.defaultProps = {
  showText: false,
  showPlaceholder: true,
  loading: false,
  nameText: 'Your Name',
  mailText: 'Your Email',
  phoneText: 'Your Phone',
  messageText: 'Your Message',
  name: '',
  mail: '',
  phone: '',
  message: '',
  submitButtonText: 'Submit',
  submitButtonAlign: 'center',
  apiUrl: '',
  onSubmit: () => {},
  onApiSuccess: () => {},
  onApiFail: () => {}
};

export default ContactUs;
