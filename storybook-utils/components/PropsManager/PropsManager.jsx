/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import ReactElementToJsxString from 'react-element-to-jsx-string';
import Playground from 'component-playground';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import './style.scss';

class PropsManager extends React.Component {
  static isAvailablePropType(type) {
    return ['bool', 'string', 'number', 'array', 'arrayOf'].indexOf(type) !== -1;
  }

  static isJson(type) {
    return type === 'array' || type === 'arrayOf' || type === 'object' || type === 'shape';
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.onChangeArea = this.onChangeArea.bind(this);
  }

  componentWillMount() {
    const { children } = this.props;
    const { props } = children.type.__docgenInfo;
    const sprops = {};
    const json = {};
    Object.keys(props).map(item => {
      sprops[item] = children.props[item];
      if (PropsManager.isJson(props[item].type.name.toString()))
        json[item] = JSON.stringify(children.props[item], undefined, 2);
      return item;
    });
    this.setState({ sprops, json });
  }

  onChange({ prop, value }) {
    const { sprops } = this.state;
    sprops[prop] = value;
    this.setState({ sprops });
  }

  onChangeArea({ prop, value }) {
    const { sprops, json } = this.state;
    try {
      sprops[prop] = JSON.parse(value);
    } catch (Exception) {}
    json[prop] = value;
    this.setState({ sprops });
  }

  render() {
    const { children, config, scope } = this.props;
    const { sprops, json } = this.state;
    const { props } = children.type.__docgenInfo;
    const element = React.createElement(children.type, sprops);

    return (
      <React.Fragment>
        <div className="PropsManager__Code">
          <Playground
            codeText={ReactElementToJsxString(element, {
              showDefaultProps: false,
              showFunctions: false
            })}
            scope={scope}
          />
        </div>
        <div className="mt-4 PropsManager__Props p-3">
          <Row>
            {Object.keys(sprops).map(item => {
              const type = props[item].type.name.toString();
              const id = `input_${new Date().getTime()}_${Math.random()}`;
              return PropsManager.isAvailablePropType(type) ? (
                <React.Fragment key={item}>
                  <Column className="col-5 col-sm-4 col-md-2">
                    <label htmlFor={id}>{item}</label>
                  </Column>
                  <Column className="col-7 col-sm-8 col-md-4">
                    <div className="form-group">
                      {type === 'bool' && (
                        <input
                          id={id}
                          checked={sprops[item]}
                          type="checkbox"
                          onChange={$event => {
                            this.onChange({ prop: item, value: $event.target.checked });
                          }}
                        />
                      )}
                      {type === 'string' &&
                        (!config[item] || config[item][0] === 'string') && (
                          <input
                            id={id}
                            className="form-control"
                            value={sprops[item]}
                            onChange={$event => {
                              this.onChange({ prop: item, value: $event.target.value });
                            }}
                          />
                        )}
                      {type === 'string' &&
                        (config[item] && config[item][0] === 'color') && (
                          <input
                            style={{ height: '38px' }}
                            type="color"
                            id={id}
                            className="form-control"
                            value={sprops[item]}
                            onChange={$event => {
                              this.onChange({ prop: item, value: $event.target.value });
                            }}
                          />
                        )}
                      {type === 'string' &&
                        (config[item] && config[item][0] === 'select') && (
                          <select
                            className="form-control"
                            value={sprops[item]}
                            onChange={$event => {
                              this.onChange({ prop: item, value: $event.target.value });
                            }}
                          >
                            {config[item][1].map(selectValue => (
                              <option key={selectValue} value={selectValue}>
                                {selectValue}
                              </option>
                            ))}
                          </select>
                        )}
                      {type === 'number' && (
                        <input
                          id={id}
                          type="number"
                          className="form-control"
                          value={sprops[item]}
                          onChange={$event => {
                            this.onChange({ prop: item, value: $event.target.value });
                          }}
                        />
                      )}
                      {(type === 'array' || type === 'arrayOf') && (
                        <textarea
                          className="form-control"
                          value={json[item]}
                          onChange={$event => {
                            this.onChangeArea({ prop: item, value: $event.target.value });
                          }}
                        />
                      )}
                    </div>
                  </Column>
                </React.Fragment>
              ) : null;
            })}
          </Row>
        </div>
      </React.Fragment>
    );
  }
}

PropsManager.propTypes = {
  config: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  scope: PropTypes.objectOf(PropTypes.any)
};

PropsManager.defaultProps = {
  config: {},
  scope: { React }
};

export default PropsManager;
/* eslint-enable no-underscore-dangle */
