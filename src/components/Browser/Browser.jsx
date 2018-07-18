import React, {Component} from 'react';
import PropTypes from 'prop-types';

import firefox from "./images/firefox.png";
import chrome from "./images/chrome.png";
import iexplore from "./images/iexplore.png";
import safari from "./images/safari.png";
import opera from "./images/opera.png";
import maxthon from "./images/maxthon.png";
import netscape from "./images/netscape.png";
import flock from "./images/flock.png";

class Browser extends Component {

	render() {
		const {
			type,
			version,
			showText
		} = this.props;
		return <div className="d-inline Browser">
			{
				type === "firefox" &&
				<React.Fragment>
					<img src={firefox}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text"> Firefox</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "chrome" &&
				<React.Fragment>
					<img src={chrome}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text"> Chrome</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "iexplore" &&
				<React.Fragment>
					<img src={iexplore}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text"> Internet explorer</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "safari" &&
				<React.Fragment>
					<img src={safari}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text">Safari</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "opera" &&
				<React.Fragment>
					<img src={opera}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text">Opera</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "maxthon" &&
				<React.Fragment>
					<img src={maxthon}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text">Maxthon</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "netscape" &&
				<React.Fragment>
					<img src={netscape}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text">Netscape</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
			{
				type === "flock" &&
				<React.Fragment>
					<img src={flock}
					     className="Browser__Icon"/>
					{
						showText &&
						<div className="Browser__Text">Flock</div>
					}
					{
						version &&
						<div className="Browser__Version"> {version}</div>
					}
				</React.Fragment>
			}
		</div>
	}
}

Browser.propTypes = {
	showText: PropTypes.bool,
	type: PropTypes.string,
	version: PropTypes.string,
};
Browser.defaultProps = {
	showText: true,
	type: "",
	version: "",
};

export default Browser;
