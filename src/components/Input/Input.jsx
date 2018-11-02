import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Icon from '../Icon';

class Input extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = { value };
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
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
      iconAlign,
      size
    } = this.props;
    let inputcls = className;
    if (size) inputcls += ` form-control-${size}`;
    const { value } = this.state;
    const props = {
      className: `form-control ${inputcls} ${
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
  /**
   *  Show or hide `:` in label. Default `false`
   */
  labelColon: PropTypes.bool,
  /**
   *  CSS Class to apply to input. Default `""`
   */
  className: PropTypes.string,
  /**
   *  Input type. Default `"text"`, can be `text`, `number`, `email` and `textarea`
   */
  type: PropTypes.string,
  /**
   * Input id. Default `""`
   */
  id: PropTypes.string,
  /**
   * Input name. Default `""`
   */
  name: PropTypes.string,
  /**
   * Input value. Default `""`
   */
  value: PropTypes.string,
  /**
   * Input placeholder. Default `""`
   */
  placeholder: PropTypes.string,
  /**
   *  Icon to show with input. Default `""`
   */
  icon: PropTypes.string,
  /**
   * Align of icon. Default `"left"`, can be `"left"` and `"right"`
   */
  iconAlign: PropTypes.string,
  /**
   * Label to show on input top. Default `""`
   */
  label: PropTypes.string,
  /**
   * Size of input, can be `lg` or `sm`. Default `""`
   */
  size: PropTypes.string,
  /**
   * Called when input change. Params `{value}`
   */
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
  size: '',
  icon: '',
  iconAlign: 'left',
  onChange: () => {}
};

export default Input;
