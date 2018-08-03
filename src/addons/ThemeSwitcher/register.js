import React from 'react';
import addons from '@storybook/addons';
import themes from '../../../storybook-utils/configs/themes';

const styles = {
  width: '100%'
};
const button = {
  padding: '15px',
  cursor: 'pointer',
  width: '100%',
  border: 'none'
};

class Notes extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      theme: localStorage.getItem('selector-current-theme') || 'default'
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme($event) {
    const iframe = document.getElementById('storybook-preview-iframe');
    if (iframe) {
      const Iframedocument = iframe.contentDocument
        ? iframe.contentDocument
        : iframe.contentWindow.document;
      const link = Iframedocument.getElementById('story-book-themes');
      if (link) {
        const root = Iframedocument.getElementById('root');
        if (root) {
          root.style.display = 'none';
        }
        link.setAttribute(
          'href',
          `themes/${$event.currentTarget.id.toLowerCase()}/style/index.css`
        );
        let loaderTheme = Iframedocument.getElementById('story-book-loader-theme');
        if (!loaderTheme) {
          loaderTheme = Iframedocument.createElement('div');
          loaderTheme.setAttribute('class', 'ui active inverted dimmer');
          loaderTheme.setAttribute('id', 'story-book-loader-theme');
          loaderTheme.innerHTML =
            '<div class="text-center mt-5"><i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i></div><div class="text-center">Changing theme</div>';
          Iframedocument.body.appendChild(loaderTheme);
        }
        loaderTheme.style.height = '90%';
        loaderTheme.style.display = 'block';
        setTimeout(() => {
          if (root) {
            root.style.display = 'block';
          }
          loaderTheme.style.display = 'none';
        }, 1000);
        this.setState({ theme: $event.currentTarget.id.toLowerCase() });
        localStorage.setItem('selector-current-theme', $event.currentTarget.id.toLowerCase());
      }
    }
  }

  render() {
    const { theme } = this.state;
    return (
      <div style={styles}>
        {themes.map(them => (
          <button
            key={them.id}
            id={them.id}
            type="submit"
            style={
              theme === them.id
                ? {
                    ...button,
                    backgroundColor: '#4285f4',
                    color: '#fff'
                  }
                : button
            }
            onClick={this.changeTheme}
          >
            {them.name}
          </button>
        ))}
      </div>
    );
  }
}

// Register the addon with a unique name.
addons.register('theme/switcher', api => {
  const notesLocal = <Notes channel={addons.getChannel()} api={api} />;
  // Also need to set a unique name to the panel.
  addons.addPanel('theme/switcher/panel', {
    title: 'Themes',
    render: () => notesLocal
  });
});
