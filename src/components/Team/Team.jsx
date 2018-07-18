import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Social from "../Social";
import Card from "../Card";

class Team extends Component {

	renderSocials(url) {
		const {socials} = this.props;
		return socials.map((social, index) => {
			return <Social key={index} url={url} type={social}/>
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
			contentAlign
		} = this.props;
		return members.map((member, index) => {
			return <div className={`col col-md-4 col-lg-3 text-${contentAlign} mb-4`} key={index}>
				<Card imageCircle={imageCircle}
				      subTitle={showJob ? member.job : ""}
				      title={showName ? member.name : ""}
				      summary={showSummary ? member.summary : ""}
				      showBorder={showBorder}
				      contentAlign={contentAlign}
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
	contentAlign: "center",
	socials: [],
	members: []
};

export default Team;
