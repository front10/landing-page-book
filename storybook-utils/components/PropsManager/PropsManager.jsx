/* eslint no-unused-vars:0 */
import 'babel-polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EsPreview from 'component-playground/es/components/es6-preview';
import Doc from 'component-playground/es/components/doc';
import Editor from 'component-playground/es/components/editor';
import Preview from 'component-playground/es/components/preview';
import ReactElementToJsxString from 'react-element-to-jsx-string';
import Markdown from '../Markdown';
import VariableManager from '../VariableManager';
import Icon from '../../../src/components/Icon';
import Button from '../../../src/components/Button';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import './style.scss';

const tabs = [
  { key: 'code', icon: 'code', title: 'Code' },
  { key: 'css', icon: 'css3', title: 'CSS variables' },
  { key: 'props', icon: 'sliders', title: 'Properties' },
  { key: 'readme', icon: 'file-text-o', title: 'Documenttion' }
];

// TODO: refactor to remove componentWillReceiveProps
// eslint-disable-next-line react/no-deprecated
class PropsManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.children,
      textCode: props.children,
      external: true,
      active: props.active
    };
    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleActive = this.handleActive.bind(this);
  }

  handleCodeChange(code) {
    this.setState({
      code,
      external: false
    });
  }

  handleActive(activeTab) {
    let { active, textCode } = this.state;
    const { code } = this.state;
    textCode = activeTab === 'code' ? code : textCode;
    if (active.indexOf(activeTab) !== -1) active.splice(active.indexOf(activeTab), 1);
    else active.push(activeTab);
    this.setState({ active, textCode });
  }

  render() {
    const { code, external, expandedCode, textCode, active } = this.state;
    const { scope, readme, cssVariables, colColumn, propsDescription } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Column className={colColumn}>
            <div className="mb-4">
              <Preview code={code} scope={scope} context={{}} noRender />
            </div>
          </Column>
          <Column className="col-12">
            <div
              className={`text-right playgroundHeader ${
                active.indexOf('code') === -1 &&
                active.indexOf('css') === -1 &&
                active.indexOf('props') === -1 &&
                active.indexOf('readme') === -1
                  ? `rounded`
                  : 'rounded-top'
              }`}
            >
              {tabs.map(
                tab =>
                  tab.key === 'code' ||
                  (tab.key === 'props' && propsDescription) ||
                  (tab.key === 'css' && cssVariables.length) ||
                  (tab.key === 'readme' && readme) ? (
                    <Icon
                      key={tab.key}
                      title={tab.title}
                      icon={`fa fa-${tab.icon}`}
                      className={`p-2 playgroundHeader__icon ${
                        active.indexOf(tab.key) !== -1 ? 'text-warning' : 'text-white'
                      }`}
                      onClick={() => this.handleActive(tab.key)}
                    />
                  ) : null
              )}
            </div>
            {active.indexOf('code') !== -1 && (
              <div
                className={
                  active.indexOf('css') === -1 &&
                  active.indexOf('props') === -1 &&
                  active.indexOf('readme') === -1
                    ? `playgroundEditor--rounded`
                    : ''
                }
              >
                <Editor
                  codeText={textCode}
                  external={external}
                  onChange={this.handleCodeChange}
                  theme="monokai"
                />
              </div>
            )}
            {active.indexOf('css') !== -1 && (
              <div
                className={`playgroundVariables ${
                  active.indexOf('props') === -1 && active.indexOf('readme') === -1
                    ? `playgroundVariables--rounded`
                    : ''
                }`}
              >
                <VariableManager variables={cssVariables} />
              </div>
            )}
            {active.indexOf('props') !== -1 && (
              <div className="playgroundProperties p-0">
                <table
                  className={`table table-striped table-bordered m-0 table-dark table-sm ${
                    active.indexOf('readme') === -1 ? 'playgroundProperties--rounded' : ''
                  }`}
                >
                  <thead>
                    <tr>
                      <th scope="row">Name</th>
                      <th scope="col">Type</th>
                      <th scope="col">Summary</th>
                      <th scope="col">Default</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(propsDescription).map(prop => (
                      <tr>
                        <td>{prop}</td>
                        <td>{propsDescription[prop].type.name}</td>
                        <td>{propsDescription[prop].description}</td>
                        <td>{propsDescription[prop].defaultValue.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {active.indexOf('readme') !== -1 && (
              <div className="playgroundReadme p-3 rounded">
                <Markdown source={readme} />
              </div>
            )}
          </Column>
        </Row>
      </React.Fragment>
    );
  }
}

PropsManager.propTypes = {
  children: PropTypes.string.isRequired,
  scope: PropTypes.objectOf(PropTypes.any),
  readme: PropTypes.string,
  cssVariables: PropTypes.arrayOf(PropTypes.string),
  propsDescription: PropTypes.objectOf(PropTypes.any),
  colColumn: PropTypes.string,
  active: PropTypes.oneOf(['code', 'css', 'props', 'readme'])
};

PropsManager.defaultProps = {
  scope: { React },
  readme: '',
  cssVariables: [],
  propsDescription: null,
  colColumn: 'col-12',
  active: ['code']
};

export default PropsManager;
