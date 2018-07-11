import React from 'react';
import PropTypes from 'prop-types';

class GithubDetail extends React.Component {
    constructor(props) {
        super(props);        
    }

    componentWillMount() {      
    }

    componentWillReceiveProps(nextProps) {
        
    }
    
    render() {        
        return (<div>
            <h1>github</h1>
            <h3>Pendiente</h3>
        </div>           
        );

    }
}

GithubDetail.propTypes = {
   
};

GithubDetail.defaultProps = {
   
};

export default GithubDetail;