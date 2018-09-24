import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Icon from '../Icon';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    const { value } = this.props;
    this.setState({ value });
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { value } = this.props;
    if (prevProps.value !== value) this.setState({ value });
  }

  onChange($event) {
    const { onChange } = this.props;
    this.setState({ value: $event.target.value });
    onChange({ value: $event.target.value });
  }

  render() {
    const {
      className,
      type,
      id,
      name,
      placeholder,
      label,
      labelColon,
      icon,
      iconAlign
    } = this.props;
    const { value } = this.state;
    const props = {
      className: `Input__Container__Conponent form-control ${className} ${
        icon ? `Input__Container__Conponent--${iconAlign}` : ''
      }`,
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
        <div className="Input__Container">
          {type !== 'textarea' && <input {...props} />}
          {type === 'textarea' && <textarea {...props} />}
          {icon && (
            <Icon
              icon={icon}
              className={`Input__Container__Icon Input__Container__Icon--${iconAlign}`}
            />
          )}
        </div>
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
  icon: PropTypes.string,
  iconAlign: PropTypes.string,
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
  icon: '',
  iconAlign: 'left',
  onChange: () => {}
};

export default Input;
