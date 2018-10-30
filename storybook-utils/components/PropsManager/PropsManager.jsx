/* eslint no-unused-vars:0 */
import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import VariableManager from '../VariableManager';
import Icon from '../../../src/components/Icon';
import Button from '../../../src/components/Button';
import Row from '../../../src/components/Row';
import Column from '../../../src/components/Column';
import * as scope from '../../../src/components/index';
import './style.css';

const tabs = [
  { key: 'code', icon: 'code', title: 'Code' },
  { key: 'css', icon: 'css3', title: 'CSS variables' },
  { key: 'props', icon: 'sliders', title: 'Properties' }
];

// eslint-disable-next-line react/no-deprecated
class PropsManager extends React.Component {
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
    this.showOrHideCodeAndIcon = this.showOrHideCodeAndIcon.bind(this);
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

  showOrHideCodeAndIcon(tab, active) {
    return (
      <div className="text-white">
        <span className="font-weight-light fs-10">
          {active.indexOf(tab.key) !== -1 ? 'HIDE' : 'EDIT'} CODE
        </span>
        <Icon
          key={tab.key}
          title={tab.title}
          icon={`fa fa-${tab.icon}`}
          className="p-2 playgroundHeader__icon fs-12"
          onClick={() => this.handleActive(tab.key)}
        />
      </div>
    );
  }

  render() {
    const { code, external, expandedCode, textCode, active } = this.state;
    const { readme, cssVariables, colColumn, propsDescription } = this.props;
    return (
      <LiveProvider code={textCode} scope={{ ...scope, React }}>
        <Row>
          <Column className={colColumn}>
            <div className="border-preview">
              <LivePreview />
            </div>
          </Column>
          <Column className="col-12 mt--4p">
            <div
              className={`text-right playgroundHeader ${
                active.indexOf('code') === -1 &&
                active.indexOf('css') === -1 &&
                active.indexOf('props') === -1
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
                    <div key={tab.key}>{this.showOrHideCodeAndIcon(tab, active)}</div>
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
                <LiveEditor style={null}/>
                <LiveError />
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
                      <tr key={prop}>
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
          </Column>
        </Row>
      </LiveProvider>
    );
  }
}

PropsManager.propTypes = {
  children: PropTypes.string.isRequired,
  readme: PropTypes.string,
  cssVariables: PropTypes.arrayOf(PropTypes.string),
  propsDescription: PropTypes.objectOf(PropTypes.any),
  colColumn: PropTypes.string,
  active: PropTypes.arrayOf(PropTypes.string)
};

PropsManager.defaultProps = {
  readme: '',
  cssVariables: [],
  propsDescription: null,
  colColumn: 'col-12',
  active: ['code']
};

export default PropsManager;
