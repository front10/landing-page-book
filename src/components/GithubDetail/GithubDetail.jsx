import React from 'react';
import PropTypes from 'prop-types';
import GithubService from '../../service/GithubDetail.services';

class GithubDetail extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {};       
    }

    componentWillMount() {      
        GithubService.getRepository().then(res => {
            console.log('====================================');
            console.log('Result',res.data);
            console.log('====================================');
        });
    }

    componentWillReceiveProps(nextProps) {
        
    }
    
    render() {        
        return (<div>
            <h1>github</h1>
            <button><i className="fa fa-github" aria-hidden="true"/><span><b> Follow</b></span></button>
            
        </div>           
        );

    }
}

GithubDetail.propTypes = {
   
};

GithubDetail.defaultProps = {
   
};

export default GithubDetail;