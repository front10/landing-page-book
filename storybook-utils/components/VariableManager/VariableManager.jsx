import React from 'react';
import PropTypes from 'prop-types';
import Code from '../../../src/components/Code';
import './style.scss';

class VariableManager extends React.Component {
  static onCodeChange(code) {
    let splitCode = code.split('{')[1];
    splitCode = splitCode.split('}')[0];
    splitCode = splitCode.split(';');
    splitCode.map(item => {
      const variable = item.split(':');
      if (variable[0] && variable[1] && typeof document !== 'undefined')
        document.documentElement.style.setProperty(variable[0].trim(), variable[1].trim());
      return item;
    });
  }

  constructor(props) {
    super(props);
    this.state = { code: '' };
  }

  componentDidMount() {
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        const style = getComputedStyle(document.body);
        const { variables } = this.props;
        let code = ':root{\n';
        variables.map(item => {
          code += ` ${item}: ${style.getPropertyValue(item)};\n`;
          return item;
        });
        code += '}';
        this.setState({ code });
      }, 1000);
    }
  }

  render() {
    const { className } = this.props;
    const { code } = this.state;
    return (
      <div className={className}>
        <Code
          code={code}
          languageCode="css"
          showheader={false}
          lineNumbers={false}
          updateCode={VariableManager.onCodeChange}
        />
      </div>
    );
  }
}

VariableManager.propTypes = {
  className: PropTypes.string,
  variables: PropTypes.arrayOf(PropTypes.string).isRequired
};

VariableManager.defaultProps = {
  className: ''
};

export default VariableManager;
