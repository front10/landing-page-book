import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Social from "../Social";
import Card from "../Card";

class Team extends Component {
	constructor(props) {
        super(props);        
    }

	renderSocials(url) {
		const {socials, socialGray} = this.props;
		return socials.map((social, index) => {
			return <Social key={index} url={url} type={social} gray={socialGray}/>
		});
	}

	renderMembers() {
		const {
			showImage,
			showName,
			showJob,
			showSummary,
			showBorder,
			socials,
			members,
			imageCircle,
			contentAlign,
			imageBorder
		} = this.props;
		return members.map((member, index) => {
			return <div className={`col-12 col-md-4 text-${contentAlign} mb-4`} key={index}>
				<Card imageCircle={imageCircle}
				      subTitle={showJob ? member.job : ""}
				      title={showName ? member.name : ""}
				      summary={showSummary ? member.summary : ""}
				      showBorder={showBorder}
				      contentAlign={contentAlign}
				      imageBorder={imageBorder}
				      image={showImage ? member.image : ""}>
					{
						socials.length > 0 &&
						<div>{this.renderSocials(member.profile)}</div>
					}
				</Card>
			</div>
		});
	}

	render() {
		const {} = this.props;
		return <div className="Team row">
			{this.renderMembers()}
		</div>
	}
}

Team.propTypes = {
	showBorder: PropTypes.bool,
	showImage: PropTypes.bool,
	showName: PropTypes.bool,
	showJob: PropTypes.bool,
	showSummary: PropTypes.bool,
	imageCircle: PropTypes.bool,
	imageBorder: PropTypes.bool,
	socialGray: PropTypes.bool,
	contentAlign: PropTypes.string,
	socials: PropTypes.array,
	members: PropTypes.array
};
Team.defaultProps = {
	showBorder: true,
	showImage: true,
	showName: true,
	showJob: true,
	showSummary: true,
	imageCircle: true,
	imageBorder: false,
	socialGray: false,
	contentAlign: "center",
	socials: [],
	members: []
};

export default Team;
