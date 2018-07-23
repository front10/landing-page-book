import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Browser from "../Browser";

class BrowserSupport extends Component {

	renderBrowsers() {
		return this.props.browsers.map((browser, index) => {
			return <td className="text-center pl-3 pr-3"
			           key={index}>
				<Browser vendor={browser.vendor}
				         version={browser.version}
				         showText={this.props.showText}/>
			</td>
		});
	}

	render() {
		return <table className="Browser">
			<tbody>
			<tr>
				{this.renderBrowsers()}
			</tr>
			</tbody>
		</table>
	}
}

BrowserSupport.propTypes = {
	showText: PropTypes.bool,
	browsers: PropTypes.array,
};
BrowserSupport.defaultProps = {
	showText: true,
	browsers: [],
};

export default BrowserSupport;
