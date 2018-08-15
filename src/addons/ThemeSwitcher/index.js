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
    let { theme } = this.props;
    theme = theme ? theme : localStorage.getItem('selector-current-theme') || 'default';
    let link = document.getElementById('story-book-themes');
    if (!link) {
      let root = document.getElementById('root');
      if (root) root.style.display = 'none';
      let link = document.createElement('link');
      link.setAttribute('type', 'text/css');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', `themes/${theme}/style/index.css`);
      link.setAttribute('id', 'story-book-themes');
      link.onload = function() {
        root.style.display = 'block';
      };
      document.head.appendChild(link);
    } else {
      link.setAttribute('href', `themes/${theme}/style/index.css`);
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
