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
  { key: 'knob', icon: 'sliders', title: 'Knobs properties' },
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
      active: 'code'
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
    active = active === activeTab ? undefined : activeTab;
    this.setState({ active, textCode });
  }

  render() {
    const { code, external, expandedCode, textCode, active } = this.state;
    const { scope, readme, cssVariables, colColumn } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Column className={colColumn}>
            <div className="mb-4">
              <Preview code={code} scope={scope} context={{}} noRender />
            </div>
          </Column>
          <Column className="col-12">
            <div className="text-right playgroundHeader rounded-top">
              {tabs.map(
                tab =>
                  tab.key === 'code' ||
                  (tab.key === 'css' && cssVariables.length) ||
                  (tab.key === 'readme' && readme) ? (
                    <Icon
                      key={tab.key}
                      title={tab.title}
                      icon={`fa fa-${tab.icon}`}
                      className={`p-2 playgroundHeader__icon ${
                        active === tab.key ? 'text-warning' : 'text-white'
                      }`}
                      onClick={() => this.handleActive(tab.key)}
                    />
                  ) : null
              )}
            </div>
            {active === 'code' && (
              <div className="playgroundEditor">
                <Editor
                  codeText={textCode}
                  external={external}
                  onChange={this.handleCodeChange}
                  theme="monokai"
                />
              </div>
            )}
            {active === 'css' && (
              <div className="playgroundVariables">
                <VariableManager variables={cssVariables} />
              </div>
            )}
            {active === 'knob' && (
              <div className="playgroundKnobs border p-3 rounded-bottom">Here go knobs</div>
            )}
            {active === 'readme' && (
              <div className="playgroundReadme border p-3 rounded-bottom">
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
  colColumn: PropTypes.string
};

PropsManager.defaultProps = {
  scope: { React },
  readme: '',
  cssVariables: [],
  colColumn: 'col-12'
};

export default PropsManager;
