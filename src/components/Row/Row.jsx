import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Row extends Component {

	render() {
		const {className, children} = this.props;
		return <div className={className}>

		</div>
	}
}

Row.propTypes = {
	className: PropTypes.string
};
Row.defaultProps = {
	className: "row"
};

export default Row;
