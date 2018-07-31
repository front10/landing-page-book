import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import Image from "../Image/Image";
import NavbarCollapse from "../NavbarCollapse/NavbarCollapse";
import NavbarNav from "../NavbarNav/NavbarNav";
import NavbarLink from "../NavbarLink/NavbarLink";

class Header extends Component {

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

	renderLeftItems() {
		return this.props.leftItems.map((item, index) => {
			return <NavbarLink key={index}
			                   href={item.href}
			                   target={item.target}
			                   onClick={() => this.props.onItemClick({item})}>
				<i className={`${item.icon} mr-1`}/>
				{item.title}
			</NavbarLink>
		});
	}

	renderRightItems() {
		return this.props.rightItems.map((item, index) => {
			return <NavbarLink key={index}
			                   href={item.href}
			                   target={item.target}
			                   onClick={() => this.props.onItemClick({item})}>
				<i className={`${item.icon} mr-1`}/>
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

		let navClassName = `${className} navbar navbar-expand-${expand} Navbar`;
		if (transparent)
			navClassName += ` Navbar--transparent`;
		if (fixed)
			navClassName += ` fixed-top`;

		return <nav className={navClassName}>
			<Button className="navbar-toggler mr-3 Navbar__Toggler"
			        ariaLabel="Toggle navigation"
			        onClick={this.collapse}>
				<i className="fa fa-bars"/>
			</Button>
			<NavbarBrand className="mr-auto"
			             href={companyLink}>
				{
					companyLogo &&
					<Image alt="Company logo"
					       src={companyLogo}
					       className="d-inline-block align-top mr-1 Logo"/>
				}
			</NavbarBrand>
			{
				leftItems.length > 0 && !children &&
				<NavbarCollapse isOpen={state.collapse}>
					<NavbarNav>
						{this.renderLeftItems()}
					</NavbarNav>
				</NavbarCollapse>
			}
			{
				rightItems.length > 0 && !children &&
				<NavbarCollapse isOpen={state.collapse}>
					<NavbarNav alignItems="right">
						{this.renderRightItems()}
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
	}
}

Header.propTypes = {
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
Header.defaultProps = {
	transparent: false,
	fixed: false,
	companyName: "",
	companyLink: "",
	companyLogo: "",
	className: "",
	expand: "md",
	leftItems: [],
	rightItems: [],
	onItemClick: ({item}) => {
		console.warn(`onItemClick prop is not defined. Item ${JSON.stringify(item)}`)
	}
};

export default Header;