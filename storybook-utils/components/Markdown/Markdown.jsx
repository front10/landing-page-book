import React from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'react-remarkable';
import hljs from 'highlight.js';
import './style.scss';

const options = {
  html: true,
  linkTarget: '_parent',
  highlight(code, lang) {
    return hljs.highlight(lang, code).value;
  }
};

class Markdown extends React.Component {
  render() {
    const { source } = this.props;
    return (
      <div className="markdown-body">
        <Remarkable source={source} options={options} />
      </div>
    );
  }
}

Markdown.propTypes = {
  source: PropTypes.string
};

Markdown.defaultProps = {
  source: 'Markdown'
};

export default Markdown;
