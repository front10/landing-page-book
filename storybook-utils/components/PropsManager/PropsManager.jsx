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
    const element = React.createElement(props.children.type, props.children.props);
    const textCode = ReactElementToJsxString(element, {
      showDefaultProps: props.showDefaultProps,
      showFunctions: props.showFunctions,
      sortProps: props.sortProps,
      maxInlineAttributesLineLength: props.maxInlineAttributesLineLength,
      useFragmentShortSyntax: props.useFragmentShortSyntax,
      tabStop: props.tabStop
    });
    this.state = {
      code: textCode,
      textCode,
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
    const { scope, readme, cssVariables } = this.props;
    return (
      <React.Fragment>
        <div className="mb-4">
          <Preview code={code} scope={scope} context={{}} noRender />
        </div>
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
      </React.Fragment>
    );
  }
}

PropsManager.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.objectOf(PropTypes.any),
  showDefaultProps: PropTypes.bool,
  showFunctions: PropTypes.bool,
  sortProps: PropTypes.bool,
  useFragmentShortSyntax: PropTypes.bool,
  maxInlineAttributesLineLength: PropTypes.number,
  tabStop: PropTypes.number,
  readme: PropTypes.string,
  cssVariables: PropTypes.arrayOf(PropTypes.string)
};

PropsManager.defaultProps = {
  showDefaultProps: false,
  showFunctions: false,
  sortProps: false,
  useFragmentShortSyntax: false,
  maxInlineAttributesLineLength: 80,
  tabStop: 8,
  scope: { React },
  readme: '',
  cssVariables: []
};

export default PropsManager;
