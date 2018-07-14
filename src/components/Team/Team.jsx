import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Social from "../Social";

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
			socials,
			members,
			imageCircle,
			contentAlign
		} = this.props;
		return members.map((member, index) => {
			return <div className={`col col-md-4 col-lg-3 text-${contentAlign} mb-4`} key={index}>
				<div className="card h-100 Team__Card">
					<div className="card-body">
						{
							showImage &&
							<img className={`${imageCircle ? 'rounded-circle' : ''}`} src={member.image}
							     alt="Generic placeholder image"
							     width="140"
							     height="140"/>
						}
						{
							showName &&
							<div className="Team__Name">{member.name}</div>
						}
						{
							showJob &&
							<div className="Team__Job">{member.job}</div>
						}
						{
							showSummary &&
							<p className="Team__Summary">{member.summary}</p>
						}
						{
							socials.length > 0 &&
							<div>{this.renderSocials(member.profile)}</div>
						}
					</div>
				</div>
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
