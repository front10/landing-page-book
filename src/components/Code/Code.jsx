import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactTooltip from 'react-tooltip';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/markdown/markdown');
require('codemirror/mode/jsx/jsx');
require('codemirror/mode/css/css');
require('codemirror/mode/sass/sass');

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateCode = this
            .updateCode
            .bind(this);
        this.toggleReadOnly = this
            .toggleReadOnly
            .bind(this);
        this.copyToClipboard = this
            .copyToClipboard
            .bind(this);       
        this.clearCode = this
            .clearCode
            .bind(this);       
    }

    componentWillMount() {
        this.setState({
            code: this.props.code,
            readOnly: this.props.readOnly,
            mode: this.props.languageCode,
            lineNumbers: this.props.lineNumbers,
            showheader: this.props.showheader,
            showfooter: this.props.showfooter,
            bgColorDark: this.props.bgColorDark
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.readOnly !== this.state.readOnly) 
            this.setState({readOnly: nextProps.readOnly});
        if (nextProps.lineNumbers !== this.state.lineNumbers) 
            this.setState({lineNumbers: nextProps.lineNumbers});
        if (nextProps.bgColorDark !== this.state.bgColorDark) 
            this.setState({bgColorDark: nextProps.bgColorDark});
        if (nextProps.languageCode !== this.state.mode) 
            this.setState({mode: nextProps.languageCode});
        if (nextProps.code !== this.state.code) 
            this.setState({code: nextProps.code}, () => {
                this.refs.editor.getCodeMirror().setValue(nextProps.code);            
            });
        if (nextProps.showheader !== this.state.showheader) 
            this.setState({showheader: nextProps.showheader});
        if (nextProps.showfooter !== this.state.showfooter) 
            this.setState({showfooter: nextProps.showfooter});

        }
    componentDidMount() {
        this
            .refs
            .editor
            .getCodeMirror()
            .refresh();
    }

    updateCode(newCode) {
        this.setState({code: newCode, copied: false}, () => {
            this.props.updateCode(newCode);            
        });
        
    }

    clearCode() {     
        this.setState({code: "", copied: false}, () => {
            this.props.updateCode(""); 
            this.refs.editor.getCodeMirror().setValue("");            
        }); 
           
    }

    toggleReadOnly() {
        this.setState({
            readOnly: !this.state.readOnly
        }, () => this.refs.editor.focus());
    }
    copyToClipboard() {
        this.setState({copied: true});
    };

    render() {

        var options = {
            lineNumbers: this.state.lineNumbers,
            readOnly: this.state.readOnly,
            mode: this.state.mode,
            theme: "idea"
        };
        return (
            <div>
                <ReactTooltip />
                {this.state.showheader && <div

                    className={`d-flex justify-content-end ${this.state.bgColorDark
                    ? 'CodeMirror__header-dark'
                    : 'CodeMirror__header'}`}>        
                    <div>
                       <CopyToClipboard text={this.state.code} onCopy={this.copyToClipboard}>
                            <a onClick={this.copyToClipboard} className={`btn ${this.state.copied?'disabled':''}`} data-tip="copy"><i className="fa fa-clone CodeMirror__header_copybtn" aria-hidden="true"/></a>
                        </CopyToClipboard>
                        <a onClick={this.clearCode} className={`btn ${this.state.readOnly?'disabled':''}`} data-tip="clear"><i className="fa fa-trash-o CodeMirror__header_deletebtn" aria-hidden="true"/></a>
                    </div>
                </div>
}

                <CodeMirror
                    ref="editor"
                    className={this.state.bgColorDark
                    ? 'CodeMirror__bgColor-dark'
                    : ''}
                    
                    value={this.state.code}
                    onChange={this.updateCode}
                    options={options}
                    autoFocus={true}/> 
                    
                    {this.state.showfooter && <div
                    className={this.state.bgColorDark
                    ? 'CodeMirror__header-dark'
                    : 'CodeMirror__header'}></div>
}
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
    code: 'var component = {\n\tname: "react-code",\n\tauthor: "front10-devs",\n\trepo: "ht' +
            'tps://gitlab.com/front10-devs/landing-page-book"\n};',
    bgColorDark: false,
    languageCode: 'javascript',
    readOnly: false,
    lineNumbers: true,
    showheader: true,
    showfooter: true,
    updateCode: ({item}) => {
        console.warn(`Code has changed!`)
    }
};

export default Code;