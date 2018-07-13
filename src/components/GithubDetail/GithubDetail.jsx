import React from 'react';
import PropTypes from 'prop-types';
import GithubService from '../../service/GithubDetail.services';

class GithubDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: null
        };
    }

    componentWillMount() {
        this.setState({showCounter: this.props.showCounter, btntype: this.props.btntype, showBtnText: this.props.showBtnText, showGithubIcon: this.props.showGithubIcon });
        if (this.props.btntype === "fork" || this.props.btntype === "star" || this.props.btntype === "watch" || this.props.btntype === "issue") {
            GithubService
                .getRepositoriesStats(this.props.username, this.props.repository)
                .then(res => {
                    if (this.props.btntype === "fork") 
                        this.setState({counter: res.forks_count, iconClass: 'fa fa-code-fork', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/fork`});
                    if (this.props.btntype === "star") 
                        this.setState({counter: res.stargazers_count, iconClass: 'fa fa-star', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}`});
                    if (this.props.btntype === "watch") 
                        this.setState({counter: res.watchers_count, iconClass: 'fa fa-eye', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/subscription`});
                    if (this.props.btntype === "issue") 
                        this.setState({counter: res.open_issues_count, iconClass: 'fa fa-exclamation-circle', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/issues`});
                    }
                )
                .catch(err => err);
        }
        if (this.props.btntype === "follow") {
            GithubService
                .getUserFallowers(this.props.username)
                .then(res => {
                    this.setState({counter: res.length, iconClass: 'fa fa-github', linkUrl:`https://github.com/${this.props.username}`});
                })
                .catch(err => err);
        }

        if (this.props.btntype === "download") {               
            this.setState({counter: null, showCounter:false, iconClass: 'fa fa-cloud-download', linkUrl:`https://api.github.com/repos/${this.props.username}/${this.props.repository}/archive/master.zip`});                    
        }
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.showCounter != this.state.showCounter) {
            this.setState({showCounter: nextProps.showCounter});
        }
        if (nextProps.showGithubIcon != this.state.showGithubIcon) {
            this.setState({showGithubIcon: nextProps.showGithubIcon});
        }
        
        if (nextProps.showBtnText != this.state.showBtnText) {
            this.setState({showBtnText: nextProps.showBtnText});
        }

        if (nextProps.btntype != this.state.btntype) {
            this.setState({showCounter: nextProps.showCounter, btntype: nextProps.btntype, counter: null, showBtnText: nextProps.showBtnText});

            if (nextProps.btntype === "fork" || nextProps.btntype === "star" || nextProps.btntype === "watch" || nextProps.btntype === "issue") {
                GithubService
                    .getRepositoriesStats(nextProps.username, nextProps.repository)
                    .then(res => {
                        if (nextProps.btntype === "fork") 
                            this.setState({counter: res.forks_count, iconClass: 'fa fa-code-fork', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/fork`});
                        if (nextProps.btntype === "star") 
                            this.setState({counter: res.stargazers_count, iconClass: 'fa fa-star', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}`});
                        if (nextProps.btntype === "watch") 
                            this.setState({counter: res.watchers_count, iconClass: 'fa fa-eye', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/subscription`});
                        if (nextProps.btntype === "issue") 
                            this.setState({counter: res.open_issues_count, iconClass: 'fa fa-exclamation-circle', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/issues`});
                        }
                    )
                    .catch(err => err);
            }
            if (nextProps.btntype === "follow") {
                GithubService
                    .getUserFallowers(nextProps.username)
                    .then(res => {
                        this.setState({counter: res.length, iconClass: 'fa fa-github', linkUrl:`https://github.com/${this.props.username}`});
                    })
                    .catch(err => err);
            }

            if (nextProps.btntype === "download") {               
                this.setState({counter: null, showCounter:false, iconClass: 'fa fa-cloud-download', linkUrl:`https://api.github.com/repos/${this.props.username}/${this.props.repository}/archive/master.zip`});                    
            }
        }
    }

    render() {
        return (
            <div className="GithubDetail_btn_container">
                <a className="btn GithubDetail_btn" href={this.state.linkUrl} target="_blank"><i className={ this.state.showGithubIcon?'fa fa-github':this.state.iconClass} aria-hidden="true"/> {this.state.showBtnText && <span className="buttonText">{this.props.btnText}</span>}
                </a>
                {this.state.showCounter && <span className="speech-bubble">{(this.state.counter != null)
                        ?<a href={this.state.linkUrl} target="_blank"> {this.state.counter} </a>
                        : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>}

            </div>

        );

    }
}

GithubDetail.propTypes = {
    showCounter: PropTypes.bool,
    showBtnText: PropTypes.bool,
    showGithubIcon: PropTypes.bool,
    username: PropTypes.string,
    repository: PropTypes.string,
    btntype: PropTypes.string,
    btnText: PropTypes.string
};

GithubDetail.defaultProps = {
    showCounter: true,
    showBtnText: true,
    showGithubIcon: false,
    username: "chubin",
    repository: "cheat.sh",
    btntype: "fork",
    btnText: "Fork"
};

export default GithubDetail;