import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
import Navbar from '../Navbar/Navbar';
import NavbarNav from '../NavbarNav/NavbarNav';
import Icon from '../Icon/Icon';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/sass/sass');

class Code extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateCode = this.updateCode.bind(this);
    this.toggleReadOnly = this.toggleReadOnly.bind(this);
    this.copyToClipboard = this.copyToClipboard.bind(this);
    this.clearCode = this.clearCode.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    const {
      code,
      readOnly,
      languageCode,
      lineNumbers,
      showheader,
      showfooter,
      bgColorDark
    } = this.props;
    this.setState({
      scode: code,
      sreadOnly: readOnly,
      slanguageCode: languageCode,
      slineNumbers: lineNumbers,
      sshowheader: showheader,
      sshowfooter: showfooter,
      sbgColorDark: bgColorDark
    });
  }

  componentDidMount() {
    /* eslint-disable react/no-string-refs */
    if (this.refs.editor) this.refs.editor.getCodeMirror().refresh();
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const {
      readOnly,
      lineNumbers,
      bgColorDark,
      languageCode,
      code,
      showheader,
      showfooter
    } = this.props;

    if (prevProps.readOnly !== readOnly) {
      this.setState({
        sreadOnly: readOnly
      });
    }
    if (prevProps.lineNumbers !== lineNumbers) {
      this.setState({
        slineNumbers: lineNumbers
      });
    }
    if (prevProps.bgColorDark !== bgColorDark) {
      this.setState({ sbgColorDark: bgColorDark });
    }
    if (prevProps.languageCode !== languageCode) {
      this.setState({ slanguageCode: languageCode });
    }
    if (prevProps.code !== code) {
      this.setState(code, () => {
        this.refs.editor.getCodeMirror().setValue(code);
      });
    }

    if (prevProps.showheader !== showheader) {
      this.setState({ sshowheader: showheader });
    }
    if (prevProps.showfooter !== showfooter) {
      this.setState({ sshowfooter: showfooter });
    }
  }

  updateCode(newCode) {
    this.setState({ scode: newCode, scopied: false }, () => {
      const { updateCode } = this.props;
      updateCode(newCode);
    });
  }

  clearCode() {
    this.setState({ scode: '', scopied: false }, () => {
      const { updateCode } = this.props;
      updateCode('');
      this.refs.editor.getCodeMirror().setValue('');
    });
  }

  toggleReadOnly() {
    const { sreadOnly } = this.state;
    this.setState(
      {
        sreadOnly: !sreadOnly
      },
      () => this.refs.editor.focus()
    );
  }

  copyToClipboard() {
    this.setState({ scopied: true });
  }

  render() {
    /* eslint no-script-url: "error" */
    const {
      sreadOnly,
      slanguageCode,
      slineNumbers,
      sshowheader,
      sbgColorDark,
      scode,
      scopied,
      sshowfooter
    } = this.state;
    const options = {
      lineNumbers: slineNumbers,
      readOnly: sreadOnly,
      mode: slanguageCode,
      theme: 'idea'
    };
    return (
      <div>
        <ReactTooltip />
        {sshowheader && (
          <Navbar className={`${sbgColorDark ? 'CodeMirror__header-dark' : 'CodeMirror__header'}`}>
            <NavbarNav alignItems="right">
              <CopyToClipboard text={scode} onCopy={this.copyToClipboard}>
                <button
                  onClick={this.copyToClipboard}
                  onKeyPress={this.copyToClipboard}
                  type="submit"
                  tabIndex={0}
                  className={`btn ${scopied ? 'disabled' : ''} CodeMirror_btn`}
                  data-tip="copy"
                >
                  <Icon className="CodeMirror__header_copybtn" icon="fa fa-clone" role="link" />
                </button>
              </CopyToClipboard>
              <button
                onClick={this.clearCode}
                onKeyPress={this.clearCode}
                tabIndex={-1}
                type="submit"
                className={`btn ${sreadOnly ? 'disabled' : ''} CodeMirror_btn`}
                data-tip="clear"
              >
                <Icon className="CodeMirror__header_deletebtn" icon="fa fa-trash-o" />
              </button>
            </NavbarNav>
          </Navbar>
        )}

        <CodeMirror
          ref="editor"
          className={sbgColorDark ? 'CodeMirror__bgColor-dark' : ''}
          value={scode}
          onChange={this.updateCode}
          options={options}
          autoFocus
        />

        {sshowfooter && (
          <Navbar className={sbgColorDark ? 'CodeMirror__header-dark' : 'CodeMirror__header'} />
        )}
      </div>
    );
  }
}

Code.propTypes = {
  bgColorDark: PropTypes.bool,
  readOnly: PropTypes.bool,
  lineNumbers: PropTypes.bool,
  showheader: PropTypes.bool,
  showfooter: PropTypes.bool,
  code: PropTypes.string,
  languageCode: PropTypes.string,
  updateCode: PropTypes.func
};

Code.defaultProps = {
  code:
    'const component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "ht' +
    'tps://gitlab.com/front10-devs/landing-page-book"\n};',
  bgColorDark: false,
  languageCode: 'javascript',
  readOnly: false,
  lineNumbers: true,
  showheader: true,
  showfooter: true,
  updateCode: () => {}
};

export default Code;
