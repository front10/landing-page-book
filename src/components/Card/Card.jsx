import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);        
    }
	render() {
		const {
			image,
			imageCircle,
			title,
			subTitle,
			summary,
			showBorder,
			contentAlign,
			children
		} = this.props;
		return <div className={`card h-100 Card ${!showBorder ? 'border-0' : ''}`}>
			<div className={`card-body text-${contentAlign}`}>
				{
					image &&
					<img className={`${imageCircle ? 'rounded-circle' : ''} img-fluid`} src={image}
					     alt="Generic placeholder image"/>
				}
				{
					title &&
					<div className="Card__Title mb-2">{title}</div>
				}
				{
					subTitle &&
					<div className="Card__Subtitle mb-3">{subTitle}</div>
				}
				{
					summary &&
					<p className="Card__Summary">{summary}</p>
				}
				{
					children &&
					<React.Fragment>
						{children}
					</React.Fragment>
				}
			</div>
		</div>
	}
}

Card.propTypes = {
	showBorder: PropTypes.bool,
	imageCircle: PropTypes.bool,
	image: PropTypes.string,
	title: PropTypes.string,
	subTitle: PropTypes.string,
	summary: PropTypes.string,
	contentAlign: PropTypes.string,
};
Card.defaultProps = {
	showBorder: true,
	imageCircle: true,
	image: "",
	title: "",
	subTitle: "",
	summary: "",
	contentAlign: "center"
};

export default Card;
