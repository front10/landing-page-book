import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Browser from "../Browser";

class BrowserSupport extends Component {

	render() {
		const {browsers, showText} = this.props;
		return <table className="Browser">
			<tbody>
			<tr>
				{
					browsers.map((browser, index) => {
						return <td className="text-center pl-3 pr-3"
						           key={index}>
							<Browser vendor={browser.vendor}
							         version={browser.version}
							         showText={showText}/>
						</td>
					})
				}
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
