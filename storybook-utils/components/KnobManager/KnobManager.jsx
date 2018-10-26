import React from 'react';
import PropTypes from 'prop-types';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import './style.scss';

class KnobManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: []
    };
    this.onChange = this.onChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    const { properties } = this.props;
    this.setState({ properties });
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { properties } = this.props;
    if (prevProps.properties !== properties) this.setState({ properties });
  }

  onChange(index, value) {
    const { onChange } = this.props;
    const { properties } = this.state;
    properties[index].value = value;
    onChange(properties);
  }

  render() {
    const { properties } = this.state;
    return (
      <Row className="form-group">
        {properties.map((prop, index) => (
          <React.Fragment key={prop.name}>
            <label className="col-4 col-md-2 mb-1 col-form-label" htmlFor={`input_${prop.name}`}>
              {prop.name}
            </label>
            <Column className="col-8 col-md-4 mb-1">
              {prop.type === 'string' && (
                <input
                  id={`input_${prop.name}`}
                  className="form-control"
                  value={prop.value}
                  onChange={event => this.onChange(index, event.target.value)}
                />
              )}
              {prop.type === 'bool' && (
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`input_${prop.name}`}
                    checked={prop.value}
                    onChange={event => this.onChange(index, event.target.checked)}
                  />
                </div>
              )}
            </Column>
          </React.Fragment>
        ))}
      </Row>
    );
  }
}

KnobManager.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string, name: PropTypes.string, value: PropTypes.any })
  ).isRequired,
  onChange: PropTypes.func
};

KnobManager.defaultProps = {
  onChange: () => {}
};

export default KnobManager;
