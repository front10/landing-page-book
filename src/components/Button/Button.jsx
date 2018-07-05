import React, {Component} from "react";
import {Button as ReactstrapButton, Tooltip} from 'reactstrap';
import PropTypes from 'prop-types';

class Button extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.toggle = this.toggle.bind(this);
	}

	componentWillMount() {
		this.setState({
			tooltipOpen: false,
			id: this.props.id || `button_${new Date().getTime()}${Math.floor(Math.random() * 100)}`
		});
	}

	toggle() {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		});
	}

	render() {
		const {
			active,
			block,
			color,
			className,
			disabled,
			outline,
			size,
			tooltip,
			tooltipPosition,
			onClick,
			children
		} = this.props;
		const classContainer = `${!block ? 'Button' : ''}`;
		return <div className={classContainer}>
			<ReactstrapButton active={active}
			                  block={block}
			                  color={color}
			                  className={className}
			                  disabled={disabled}
			                  outline={outline}
			                  size={size}
			                  onClick={onClick}
			                  id={this.state.id}>
				{children}
			</ReactstrapButton>
			{
				tooltip &&
				<Tooltip placement={tooltipPosition} isOpen={this.state.tooltipOpen} target={this.state.id}
				         toggle={this.toggle}>
					{tooltip}
				</Tooltip>
			}
		</div>
	}
}

Button.propTypes = {
	active: PropTypes.bool,
	block: PropTypes.bool,
	disabled: PropTypes.bool,
	outline: PropTypes.bool,
	color: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.string,
	tooltip: PropTypes.string,
	tooltipPosition: PropTypes.string,
	onClick: PropTypes.func
};

Button.defaultProps = {
	active: false,
	block: false,
	disabled: false,
	outline: false,
	color: "primary",
	className: "",
	size: "md",
	tooltip: "",
	tooltipPosition: "top",
	onClick: () => {
		console.warn("onClick prop is not defined");
	}
};

export default Button;