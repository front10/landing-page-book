import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Browser from "../Browser";

class BrowserSupport extends Component {

	renderBrowsers() {
		return this.props.items.map((browser, index) => {
			return <td className="text-center pl-3 pr-3"
			           key={index}>
				<Browser type={browser.type}
				         version={browser.version}
				         showText={this.props.showText}/>
			</td>
		});
	}

	render() {
		const {} = this.props;
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
	items: PropTypes.array,
};
BrowserSupport.defaultProps = {
	showText: true,
	items: [],
};

export default BrowserSupport;
