import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";

class Features extends React.Component {
    constructor(props) {
        super(props);        
    }

   
	renderLinks() {
		const {links} = this.props;
		return links.map((link, index) => {
			return <a key={index} href={link.url}>{link.text}</a>
		});
	}

	renderFeatures() {
		const {
			showImage,
			showTitle,
			showSubtitle,
			showSummary,
			showBorder,
			features,
			imageCircle,
			contentAlign
		} = this.props;
		return features.map((feature, index) => {
			return <div className={`col-md-3 text-${contentAlign} mb-4`} key={index}>
				<Card imageCircle={imageCircle}
				      subTitle={showSubtitle ? feature.subtitle : ""}
				      title={showTitle ? feature.title : ""}
				      summary={showSummary ? feature.summary : ""}
				      showBorder={showBorder}
				      contentAlign={contentAlign}
				      image={showImage ? feature.image : ""}>
					
						<a href={feature.link}>{feature.linktext}</a>
					
				</Card>
			</div>
		});
	}

	render() {
		const {} = this.props;
		return <div className="features d-flex flex-wrap">
			{this.renderFeatures()}
		</div>
	}
}

Features.propTypes = {
    showBorder: PropTypes.bool,
	showImage: PropTypes.bool,
	showTitle: PropTypes.bool,
	showSubtitle: PropTypes.bool,
	showSummary: PropTypes.bool,
	imageCircle: PropTypes.bool,
	contentAlign: PropTypes.string,
	features: PropTypes.array
};

Features.defaultProps = {
    showBorder: true,
	showImage: true,
	showTitle: true,
	showSubtitle: true,
	showSummary: true,
	imageCircle: true,
	contentAlign: "center",
	features: []
};

export default Features;