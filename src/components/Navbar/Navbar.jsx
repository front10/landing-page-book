import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Image from "../Image/Image";
import NavbarCollapse from "../NavbarCollapse/NavbarCollapse";
import NavbarNav from "../NavbarNav/NavbarNav";
import NavbarLink from "../NavbarLink/NavbarLink";
import Icon from "../Icon/Icon";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.collapse = this.collapse.bind(this);
  }

  componentWillMount() {
    this.setState({collapse: false});
  }

  collapse() {
    this.setState({collapse: !this.state.collapse});
  }

  renderItems(items) {
    return items.map((item, index) => {
      return <NavbarLink
        key={index}
        href={item.href}
        target={item.target}
        onClick={() => this.props.onItemClick({item})}>
        <Icon icon={item.icon} className="mr-1"/>
        {item.title}
      </NavbarLink>
    });
  }

  render() {
    const state = this.state;
    const {
      companyName,
      companyLink,
      leftItems,
      rightItems,
      companyLogo,
      transparent,
      fixed,
      className,
      expand,
      children
    } = this.props;

    let navClassName = `${className} navbar ${expand ? `navbar-expand-${expand}` : `navbar-expand`} Navbar`;
    if (transparent)
      navClassName += ` Navbar--transparent`;
    if (fixed)
      navClassName += ` fixed-top`;

    return (
      <nav className={navClassName}>
        <Button
          className="navbar-toggler mr-3 Navbar__Toggler"
          ariaLabel="Toggle navigation"
          onClick={this.collapse}>
          <Icon icon="fa fa-bars"/>
        </Button>
        <NavbarBrand
          className="mr-auto"
          href={companyLink}>
          {
            companyLogo &&
            <Image
              alt="Company logo"
              src={companyLogo}
              className="d-inline-block align-top mr-1 Logo"/>
          }
          {companyName}
        </NavbarBrand>
        {
          leftItems.length > 0 && !children &&
          <NavbarCollapse isOpen={state.collapse}>
            <NavbarNav>
              {this.renderItems(leftItems)}
            </NavbarNav>
          </NavbarCollapse>
        }
        {
          rightItems.length > 0 && !children &&
          <NavbarCollapse isOpen={state.collapse}>
            <NavbarNav alignItems="right">
              {this.renderItems(rightItems)}
            </NavbarNav>
          </NavbarCollapse>
        }
        {
          children &&
          <NavbarCollapse isOpen={state.collapse}>
            {children}
          </NavbarCollapse>
        }
      </nav>
    )
  }
}

Navbar.propTypes = {
  transparent: PropTypes.bool,
  fixed: PropTypes.bool,
  companyName: PropTypes.string,
  companyLink: PropTypes.string,
  companyLogo: PropTypes.string,
  className: PropTypes.string,
  expand: PropTypes.string,
  leftItems: PropTypes.array,
  rightItems: PropTypes.array,
  onItemClick: PropTypes.func,
};
Navbar.defaultProps = {
  transparent: false,
  fixed: false,
  companyName: "",
  companyLink: "",
  companyLogo: "",
  className: "",
  expand: "",
  leftItems: [],
  rightItems: [],
  onItemClick: ({item}) => {
    console.warn(`onItemClick prop is not defined. Item ${JSON.stringify(item)}`)
  }
};

export default Navbar;
