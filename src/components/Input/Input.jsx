import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label/Label';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps.value !== value) this.setState({ value: nextProps.value });
  }

  onChange($event) {
    const { onChange } = this.props;
    this.setState({ value: $event.target.value });
    onChange({ value: $event.target.value });
  }

  render() {
    const { className, type, id, name, placeholder, label, labelColon } = this.props;
    const { value } = this.state;
    const props = {
      className: `Input form-control ${className}`,
      type,
      name,
      id,
      value,
      placeholder,
      onChange: this.onChange
    };
    return (
      <React.Fragment>
        {label && <Label label={label} htmlFor={id} colon={labelColon} />}
        {type !== 'textarea' && <input {...props} />}
        {type === 'textarea' && <textarea {...props} />}
      </React.Fragment>
    );
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
  onChange: PropTypes.func
};
Input.defaultProps = {
  labelColon: false,
  className: '',
  type: 'text',
  id: '',
  name: '',
  value: '',
  placeholder: '',
  label: '',
  onChange: () => {}
};

export default Input;
