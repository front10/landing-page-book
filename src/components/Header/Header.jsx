import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
			return <li className="nav-item" key={index}>
				<a className="nav-link Header__Link"
				   href={item.href}
				   target={item.target}
				   onClick={() => this.props.onItemClick({item})}>
					<i className={`${item.icon} mr-1`}></i>
					{item.title}
				</a>
			</li>
		});
	}

	renderRightItems() {
		return this.props.rightItems.map((item, index) => {
			return <li className="nav-item" key={index}>
				<a className="nav-link Header__Link"
				   href={item.href}
				   target={item.target}
				   onClick={() => this.props.onItemClick({item})}>
					<i className={`${item.icon} mr-1`}></i>
					{item.title}
				</a>
			</li>
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

		let navClassName = `${className} navbar navbar-expand-${expand} Header`;
		if (transparent)
			navClassName += ` Header--transparent`;
		if (fixed)
			navClassName += ` fixed-top`;

		return <nav className={navClassName}>
			<button className="navbar-toggler mr-3 Header__Toggler" type="button" data-toggle="collapse"
			        aria-label="Toggle navigation"
			        onClick={this.collapse}>
				<i className="fa fa-bars"></i>
			</button>
			<a className="navbar-brand mr-auto Header__Brand d-flex align-items-center" href={companyLink}>
				{
					companyLogo &&
					<img src={companyLogo}
					     className="d-inline-block align-top mr-1 Header__Brand__Logo"
					     alt="Company logo"/>
				}
				{companyName}
			</a>
			{
				leftItems.length > 0 && !children &&
				<div className={`${!state.collapse ? 'collapse' : ''} navbar-collapse ml-4`}>
					<ul className="navbar-nav mr-auto">
						{this.renderLeftItems()}
					</ul>
				</div>
			}
			{
				rightItems.length > 0 && !children &&
				<div className={`${!state.collapse ? 'collapse' : ''} navbar-collapse`}>
					<ul className="navbar-nav ml-auto">
						{this.renderRightItems()}
					</ul>
				</div>
			}
			{
				children &&
				<div className={`${!state.collapse ? 'collapse' : ''} navbar-collapse ml-4`}>
					{children}
				</div>
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
