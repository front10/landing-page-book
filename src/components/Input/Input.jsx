import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';
import Icon from '../Icon';
import withStyles from '../../helpers/WithStyles';

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
    const { className, type, id, name, placeholder, label, icon, iconAlign, size } = this.props;
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
      <div>
        {label && <Label content={label} htmlFor={id} />}
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
      </div>
    );
  }
}

Input.propTypes = {
  /**
   *  CSS Class to apply to input.
   */
  className: PropTypes.string,
  /**
   *  Input type. Can be <code>'text'</code>, <code>'number'</code>, <code>'email'</code> and <code>'textarea'</code>
   */
  type: PropTypes.string,
  /**
   * Input id.
   */
  id: PropTypes.string,
  /**
   * Input name.
   */
  name: PropTypes.string,
  /**
   * Input value.
   */
  value: PropTypes.string,
  /**
   * Input placeholder.
   */
  placeholder: PropTypes.string,
  /**
   *  Icon to show with input.
   */
  icon: PropTypes.string,
  /**
   * Align of icon. Can be <code>'left'</code> and <code>'right'</code>
   */
  iconAlign: PropTypes.string,
  /**
   * Label to show on input top.
   */
  label: PropTypes.string,
  /**
   * Size of input. Can be <code>'lg'</code> or <code>'sm'</code>.
   */
  size: PropTypes.string,
  /**
   * Called when input change. Params `{value}`
   */
  onChange: PropTypes.func
};
Input.defaultProps = {
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

const InputWithStyles = withStyles(Input);
export default InputWithStyles;
