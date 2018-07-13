import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/xml/xml');
require('codemirror/mode/markdown/markdown');

class Code extends React.Component {
    constructor(props) {
        super(props);  
        this.state = {};   
        this.updateCode = this.updateCode.bind(this);   
        this.toggleReadOnly = this.toggleReadOnly.bind(this);   
    }

    componentWillMount() {      
        this.setState({
            code: this.props.code,
			readOnly: this.props.readOnly,
            mode: this.props.languageCode,
            lineNumbers: this.props.lineNumbers
		});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.readOnly != this.state.readOnly)
        this.setState({            
			readOnly: nextProps.readOnly        
        });
        if(nextProps.lineNumbers != this.state.lineNumbers)
        this.setState({            
			lineNumbers: nextProps.lineNumbers        
		});
    }
    
    updateCode (newCode) {
		this.setState({
			code: newCode
		});
	}	
	toggleReadOnly () {
		this.setState({
			readOnly: !this.state.readOnly
		}, () => this.refs.editor.focus());
	}

    render() {
        
        var options = {
            lineNumbers: this.state.lineNumbers,
			readOnly: this.state.readOnly,
			mode: this.state.mode
		};
        return (
            <div>
            <CodeMirror value={this.state.code} onChange={this.updateCode} options={options} autoFocus={true} />            
        </div>         
        );

    }
}

Code.propTypes = {
    code: PropTypes.string,
    languageCode: PropTypes.string,
    readOnly: PropTypes.bool,
    lineNumbers: PropTypes.bool,
    updateCode: PropTypes.func,
};

Code.defaultProps = {
    code: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "front10",\n\trepo: "https://gitlab.com/front10/landing-page"\n};',
    languageCode: 'javascript',
    readOnly: false,
    lineNumbers: true,
    updateCode: ({item}) => {
		console.warn(`Code has changed!`)
	}
};

export default Code;