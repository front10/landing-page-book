import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import Particles from 'react-particles-js';

class Hero extends Component {
	constructor(props) {
		super(props);
		this.rendersButtons = this.rendersButtons.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick(button) {
		if (button.onClick && typeof button.onClick === "function")
			button.onClick({button});
	}

	rendersButtons() {
		return this.props.buttons.map((button, index) => {
			return <button className="btn btn-xl Hero__Button"
			               key={index}
			               onClick={() => this.onButtonClick(button)}>
				{button.text}
			</button>
		});
	}

	render() {
		const {
			image,
			parallaxOffset,
			isFixed,
			isCentered,
			overlayColor,
			opacity,
			header,
			subHeader,
			minHeight,
			subHeaderPosition,
			particles,
			particlesParams
		} = this.props;
		return <div className="Hero">
			<LazyHero isFixed={isFixed}
			          isCentered={isCentered}
			          imageSrc={image}
			          opacity={opacity}
			          color={overlayColor}
			          parallaxOffset={parallaxOffset}
			          minHeight={minHeight}>
				{
					particles &&
					<div className="Hero__Particles">
						<Particles params={particlesParams}/>
					</div>
				}
				<div className="Hero__Container d-flex align-content-center">
					<div className="container">
						{
							subHeader && subHeaderPosition === "top" &&
							<h1 className="Hero__SubHeader mb-5">{subHeader}</h1>
						}
						{
							header &&
							<h1 className="Hero__Header mb-5">{header}</h1>
						}
						{
							subHeader && subHeaderPosition !== "top" &&
							<h1 className="Hero__SubHeader mb-5">{subHeader}</h1>
						}
						{this.rendersButtons()}

					</div>
				</div>
			</LazyHero>
		</div>
	}
}

Hero.propTypes = {
	isFixed: PropTypes.bool,
	isCentered: PropTypes.bool,
	particles: PropTypes.bool,
	opacity: PropTypes.number,
	parallaxOffset: PropTypes.number,
	image: PropTypes.string,
	overlayColor: PropTypes.string,
	header: PropTypes.string,
	subHeader: PropTypes.string,
	subHeaderPosition: PropTypes.string,
	minHeight: PropTypes.string,
	buttons: PropTypes.array,
	particlesParams: PropTypes.object,
};
Hero.defaultProps = {
	isFixed: true,
	isCentered: true,
	particles: true,
	opacity: 0,
	parallaxOffset: 0,
	image: "https://front10.com/img/header-bg.jpg",
	overlayColor: "#fff",
	header: "",
	subHeader: "",
	subHeaderPosition: "bottom",
	minHeight: "100vh",
	buttons: [],
	particlesParams: {}
};

export default Hero;
