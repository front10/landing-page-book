import React, {Component} from "react";
import {Navbar as ReactstrapNavbar, Nav, NavbarToggler, Collapse} from 'reactstrap';
import PropTypes from 'prop-types';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.toggle = this.toggle.bind(this);
	}

	componentWillMount() {
		this.setState({
			isOpen: false
		});
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		const {
			color,
			dark,
			expand,
			fixed,
			light,
			logo,
			logoRef,
			role,
			shadow,
			children
		} = this.props;
		const classContainer = shadow ? 'Navbar-shadow' : '';
		return <div className={`Navbar ${classContainer}`}>
			<ReactstrapNavbar color={color}
			                  dark={dark}
			                  expand={expand}
			                  fixed={fixed}
			                  light={light}
			                  role={role}>
				{
					logo &&
					<a href={logoRef}>
						<img className="Navbar__Logo"
						     src={logo}
						     alt="Logo"/>
					</a>

				}
				<NavbarToggler onClick={this.toggle}/>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav navbar
					     className="ml-auto">
						{children}
					</Nav>
				</Collapse>
			</ReactstrapNavbar>
		</div>
	}
}

Navbar.propTypes = {
	dark: PropTypes.bool,
	light: PropTypes.bool,
	shadow: PropTypes.bool,
	color: PropTypes.string,
	fixed: PropTypes.string,
	logo: PropTypes.string,
	logoRef: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Navbar.defaultProps = {
	dark: false,
	light: false,
	shadow: true,
	color: "",
	fixed: "",
	logo: "",
	logoRef: "",
	role: "",
	expand: "md",
};

export default Navbar;