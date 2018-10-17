import React from 'react';
import PropTypes from 'prop-types';
import addons from '@storybook/addons';

/* eslint-disable */
export class ThemeSelector extends React.Component {
  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps) {
    const { theme } = this.props;
    if (prevProps.theme != theme) this.init();
  }

  init() {
    let bootstrapLink = document.getElementById('bootstrap-css');
    if (!bootstrapLink) {
      bootstrapLink = document.createElement('link');
      bootstrapLink.setAttribute(
        'integrity',
        'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
      );
      bootstrapLink.setAttribute('id', 'bootstrap-css');
      bootstrapLink.setAttribute('rel', 'stylesheet');
      bootstrapLink.setAttribute('crossorigin', 'anonymous');
      bootstrapLink.setAttribute(
        'href',
        `https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css`
      );
      document.head.appendChild(bootstrapLink);
    }

    let fontScript = document.getElementById('font-css');
    if (!fontScript) {
      fontScript = document.createElement('script');
      fontScript.setAttribute('id', 'font-css');
      fontScript.setAttribute('src', 'https://use.fontawesome.com/aea3714d4b.js');
      document.body.appendChild(fontScript);
    }

    let { theme } = this.props;
    theme = theme ? theme : localStorage.getItem('selector-current-theme') || 'default';
    let link = document.getElementById('story-book-themes');
    if (!link) {
      let root = document.getElementById('root');
      if (root) root.style.display = 'none';
      let link = document.createElement('link');
      link.setAttribute('type', 'text/css');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', `themes/${theme}/index.css`);
      link.setAttribute('id', 'story-book-themes');
      link.onload = function() {
        root.style.display = 'block';
      };
      document.head.appendChild(link);
    } else {
      link.setAttribute('href', `themes/${theme}/index.css`);
    }
  }

  render() {
    const { children } = this.props;
    const channel = addons.getChannel();

    channel.emit('theme/switch');
    return children;
  }
}

ThemeSelector.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

ThemeSelector.defaultProps = {
  children: null
};
