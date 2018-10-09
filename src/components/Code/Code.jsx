import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Navbar from '../Navbar/Navbar';
import NavbarNav from '../NavbarNav/NavbarNav';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import Link from '../Link/Link';

/* eslint-disable */
let CodeMirror = null;
if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
  CodeMirror = require('react-codemirror');
  require('codemirror/mode/javascript/javascript');
  require('codemirror/mode/markdown/markdown');
  require('codemirror/mode/jsx/jsx');
  require('codemirror/mode/css/css');
  require('codemirror/mode/sass/sass');
}
/* eslint-enable */

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
    const { code, readOnly, languageCode, lineNumbers, showheader, showfooter } = this.props;
    this.setState({
      scode: code,
      sreadOnly: readOnly,
      slanguageCode: languageCode,
      slineNumbers: lineNumbers,
      sshowheader: showheader,
      sshowfooter: showfooter
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
    const { readOnly, lineNumbers, languageCode, code, showheader, showfooter } = this.props;

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
    if (prevProps.languageCode !== languageCode) {
      this.setState({ slanguageCode: languageCode });
    }
    if (prevProps.code !== code) {
      this.setState({ scode: code }, () => {
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
      scode,
      scopied,
      sshowfooter
    } = this.state;
    const { theme, codeLink } = this.props;
    const options = {
      lineNumbers: slineNumbers,
      readOnly: sreadOnly,
      mode: slanguageCode,
      theme
    };
    return (
      <div>
        {sshowheader && (
          <Navbar className="CodeMirror__header">
            <NavbarNav alignItems="right">
              {codeLink && (
                <Button className="CodeMirror_btn">
                  <Link href={codeLink} target="_blank" tooltip="Test code">
                    <Icon icon="fa fa-codepen" role="link" />
                  </Link>
                </Button>
              )}
              <CopyToClipboard text={scode} onCopy={this.copyToClipboard}>
                <Button
                  onClick={this.copyToClipboard}
                  className={`btn ${scopied ? 'disabled' : ''} CodeMirror_btn`}
                  tooltip="Copy"
                >
                  <Icon className="CodeMirror__header_copybtn" icon="fa fa-clone" role="link" />
                </Button>
              </CopyToClipboard>
              <Button
                onClick={this.clearCode}
                className={`btn ${sreadOnly ? 'disabled' : ''} CodeMirror_btn`}
                tooltip="Clear"
              >
                <Icon className="CodeMirror__header_deletebtn" icon="fa fa-trash-o" />
              </Button>
            </NavbarNav>
          </Navbar>
        )}
        {CodeMirror && (
          <CodeMirror
            ref="editor"
            value={scode}
            onChange={this.updateCode}
            options={options}
            autoFocus
          />
        )}
        {sshowfooter && <Navbar className="CodeMirror__header" />}
      </div>
    );
  }
}

Code.propTypes = {
  readOnly: PropTypes.bool,
  lineNumbers: PropTypes.bool,
  showheader: PropTypes.bool,
  showfooter: PropTypes.bool,
  code: PropTypes.string,
  languageCode: PropTypes.string,
  theme: PropTypes.string,
  codeLink: PropTypes.string,
  updateCode: PropTypes.func
};

Code.defaultProps = {
  code:
    'const component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "ht' +
    'tps://gitlab.com/front10-devs/landing-page-book"\n};',
  languageCode: 'javascript',
  theme: 'oceanic-next',
  codeLink: '',
  readOnly: false,
  lineNumbers: true,
  showheader: true,
  showfooter: true,
  updateCode: () => {}
};

export default Code;
