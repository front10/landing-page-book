import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NavbarBrand extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {className, href, children} = this.props;
		return <a
			className={`NavbarBrand d-flex align-items-center navbar-brand ${className}`}
			href={href}>
			{children}
		</a>
	}
}

NavbarBrand.propTypes = {
	className: PropTypes.string,
	href: PropTypes.string,
};
NavbarBrand.defaultProps = {
	className: "",
	href: "#",
};

export default NavbarBrand;
