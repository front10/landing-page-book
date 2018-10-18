import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import NavbarBrand from '../NavbarBrand/NavbarBrand';
import Image from '../Image/Image';
import NavbarCollapse from '../NavbarCollapse/NavbarCollapse';
import NavbarNav from '../NavbarNav/NavbarNav';
import NavbarLink from '../NavbarLink/NavbarLink';
import Icon from '../Icon/Icon';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.collapse = this.collapse.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const top = typeof window !== 'undefined' ? window.scrollY < 100 : true;
      const { isTop } = this.state;
      if (top !== isTop) {
        this.setState({ isTop: top });
      }
    });
  }

  collapse() {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  }

  renderItems(items) {
    const { onItemClick } = this.props;
    return items.map(item => (
      <NavbarLink
        key={item.title}
        href={item.href}
        target={item.target}
        onClick={() => onItemClick({ item })}
      >
        {item.icon && <Icon icon={item.icon} className="mr-1" />}
        {item.title}
      </NavbarLink>
    ));
  }

  render() {
    const { collapse } = this.state;
    const {
      brandName,
      brandLink,
      leftItems,
      rightItems,
      brandLogo,
      transparent,
      fixed,
      className,
      expand,
      children
    } = this.props;

    let navClassName = `${className} navbar ${
      expand ? `navbar-expand-${expand}` : `navbar-expand`
    } Navbar`;
    if (transparent) navClassName += ` Navbar--transparent`;
    if (fixed) navClassName += ` fixed-top`;
    const { isTop } = this.state;
    navClassName += ` ${isTop ? 'navbar-up' : 'navbar-down'}`;

    return (
      <nav className={navClassName}>
        <Button
          className="navbar-toggler mr-3 Navbar__Toggler"
          ariaLabel="Toggle navigation"
          onClick={this.collapse}
        >
          <Icon icon="fa fa-bars" />
        </Button>
        <NavbarBrand className="mr-auto" href={brandLink}>
          {brandLogo && (
            <Image
              alt="Company logo"
              src={brandLogo}
              className="d-inline-block align-top mr-1 Logo"
            />
          )}
          {brandName}
        </NavbarBrand>
        {leftItems.length > 0 &&
          !children && (
            <NavbarCollapse isOpen={collapse}>
              <NavbarNav>{this.renderItems(leftItems)}</NavbarNav>
            </NavbarCollapse>
          )}
        {rightItems.length > 0 &&
          !children && (
            <NavbarCollapse isOpen={collapse}>
              <NavbarNav alignItems="right">{this.renderItems(rightItems)}</NavbarNav>
            </NavbarCollapse>
          )}
        {children && <NavbarCollapse isOpen={collapse}>{children}</NavbarCollapse>}
      </nav>
    );
  }
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
  fixed: PropTypes.bool,
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  brandLogo: PropTypes.string,
  className: PropTypes.string,
  expand: PropTypes.string,
  leftItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  rightItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      target: PropTypes.string,
      icon: PropTypes.string
    })
  ),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  onItemClick: PropTypes.func
};
Navbar.defaultProps = {
  transparent: false,
  fixed: false,
  brandName: '',
  brandLink: '',
  brandLogo: '',
  className: '',
  expand: '',
  leftItems: [],
  rightItems: [],
  children: null,
  onItemClick: () => {}
};

export default Navbar;
