import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			fluid,
			children
		} = this.props;
		return <div className={fluid ? 'container-fluid' : 'container'}>
			{children}
		</div>
	}
}

Container.propTypes = {
	fluid: PropTypes.bool
};
Container.defaultProps = {
	fluid: false
};

export default Container;
