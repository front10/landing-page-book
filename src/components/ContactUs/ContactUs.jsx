import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmailValidator from 'email-validator';
import ContactUsService from '../../service/ContactUs.services';
import Button from '../Button';
import FormGroup from '../FormGroup';
import Input from '../Input/Input';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    const { name, mail, phone, message, loading } = this.props;
    this.state = {
      name,
      mail,
      phone,
      message,
      loading
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
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
      submitButtonAlign,
      submitButtonColor,
      className
    } = this.props;
    const { name, mail, phone, message, loading } = this.state;
    return (
      <div className={`ContactUs ${className}`}>
        <FormGroup>
          <Input
            label={showText ? nameText : ''}
            id="contactNameTextLabel"
            placeholder={showPlaceholder ? nameText : ''}
            value={name}
            onChange={this.onChangeName}
            {...extractProps('input', this.props)}
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
            {...extractProps('input', this.props)}
          />
        </FormGroup>
        <FormGroup>
          <Input
            label={showText ? phoneText : ''}
            id="contactPhoneTextLabel"
            placeholder={showPlaceholder ? phoneText : ''}
            value={phone}
            onChange={this.onChangePhone}
            {...extractProps('input', this.props)}
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
            {...extractProps('input', this.props)}
          />
        </FormGroup>
        <div className={`text-${submitButtonAlign}`}>
          <Button
            loading={loading}
            disabled={!name || !message || !EmailValidator.validate(mail) || loading}
            onClick={this.onSubmit}
            color={submitButtonColor}
            {...extractProps('button', this.props)}
          >
            {submitButtonText}
          </Button>
        </div>
      </div>
    );
  }
}

ContactUs.propTypes = {
  /**
   * Class to apply to icon
   */
  className: PropTypes.string,
  /**
   * Show or hide labels to inputs
   */
  showText: PropTypes.bool,
  /**
   * Show or hide placeholders to inputs
   */
  showPlaceholder: PropTypes.bool,
  /**
   * Define if component is loading
   */
  loading: PropTypes.bool,
  /**
   * Label and placeholder of name input
   */
  nameText: PropTypes.string,
  /**
   *  Label and placeholder of email input
   */
  mailText: PropTypes.string,
  /**
   *  Label and placeholder of phone input
   */
  phoneText: PropTypes.string,
  /**
   * Label and placeholder of message input
   */
  messageText: PropTypes.string,
  /**
   * Value of name input
   */
  name: PropTypes.string,
  /**
   *  Value of mail input
   */
  mail: PropTypes.string,
  /**
   * Value of phone input
   */
  phone: PropTypes.string,
  /**
   * Value of message input
   */
  message: PropTypes.string,
  /**
   * Label of submit button
   */
  submitButtonText: PropTypes.string,
  /**
   * Align of Submit button
   */
  submitButtonAlign: PropTypes.string,
  /**
   * Color of Submit button
   */
  submitButtonColor: PropTypes.string,
  /**
   * Url to send contact data, component make a request via post method and send <code>name</code>, <code>email</code>, <code>phone</code> and <code>message</code> params
   */
  apiUrl: PropTypes.string,
  /**
   * Function called when Submit button has clicked. Params <code>{name, mail, phone, message}</code>
   */
  onSubmit: PropTypes.func,
  /**
   * Function called when <code>apiUrl</code> is defined and request was executed successfully
   */
  onApiSuccess: PropTypes.func,
  /**
   * Function called when <code>apiUrl</code> is defined and request was error
   */
  onApiFail: PropTypes.func
};
ContactUs.defaultProps = {
  className: '',
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
  submitButtonColor: 'default',
  apiUrl: '',
  onSubmit: () => {},
  onApiSuccess: () => {},
  onApiFail: () => {}
};

export default withStyles(ContactUs);
