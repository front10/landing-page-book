import React from 'react';
import PropTypes from 'prop-types';
import {BuiltWith} from '../../components';

class Sponsors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
       
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        return (
            <div >                
                <BuiltWith
                    gray={this.props.gray}
                    companies={this.props.sponsors}
                />
            </div>

        );

    }
}

Sponsors.propTypes = {
    gray: PropTypes.bool,
	companies: PropTypes.array
};

Sponsors.defaultProps = {
    gray: false,
	sponsors: []
};

export default Sponsors;