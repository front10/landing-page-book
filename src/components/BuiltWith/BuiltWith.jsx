import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";

class BuiltWith extends Component {

	renderCompanies() {
		const {companies, gray} = this.props;
		return companies.map((company, index) => {
			return <div className={`BuiltWith__Container ${gray ? 'BuiltWith__Container--grayScale' : ''}`}
			            key={index}>
				<Card imageCircle={false}
				      image={company.image}
				      showBorder={false}/>
			</div>
		});
	}

	render() {
		return <div className="BuiltWith row">
			{this.renderCompanies()}
		</div>
	}
}

BuiltWith.propTypes = {
	gray: PropTypes.bool,
	companies: PropTypes.array
};
BuiltWith.defaultProps = {
	gray: false,
	companies: []
};

export default BuiltWith;
