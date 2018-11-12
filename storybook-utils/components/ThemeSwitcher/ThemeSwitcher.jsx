import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import { withPrefix } from 'gatsby-link';
import 'rc-dropdown/assets/index.css';
import Themes from '../../configs/themes';
import Image from '../../../src/components/Image';
import './style.css';

class ThemeSwitcher extends React.Component {
  changeTheme = e => {
    if (typeof window !== 'undefined') {
      let themeLink = document.getElementById('landing-page-book-theme');
      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.setAttribute('id', 'landing-page-book-theme');
        themeLink.setAttribute('rel', 'stylesheet');
        document.head.appendChild(themeLink);
      }
      themeLink.setAttribute('href', withPrefix(`/themes/${e.key}/index.css`));
    }
  };

  render() {
    const menu = (
      <Menu>
        {Themes.map(theme => (
          <MenuItem key={theme.id}>{theme.name}</MenuItem>
        ))}
      </Menu>
    );
    return (
      <Dropdown
        overlay={menu}
        trigger={['click']}
        animation="slide-up"
        overlayClassName="abcd"
        onOverlayClick={this.changeTheme}
      >
        <div className="ThemeSwitcher">
          <Image
            src={withPrefix('/images/theming/brush.png')}
            alt="Theming selector"
            shadow
            rounded
          />
        </div>
      </Dropdown>
    );
  }
}

export default ThemeSwitcher;
