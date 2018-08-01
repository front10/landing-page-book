import React from 'react';
import PropTypes from 'prop-types';
import GithubService from '../../service/GithubDetail.services';
import Icon from "../Icon/Icon";

class GithubButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: null
        };
    }

    componentWillMount() {
        this.setState({showCounter: this.props.showCounter, btnType: this.props.btnType, showBtnText: this.props.showBtnText, showGithubIcon: this.props.showGithubIcon });
        if (this.props.btnType === "fork" || this.props.btnType === "star" || this.props.btnType === "watch" || this.props.btnType === "issue") {
            GithubService
                .getRepositoriesStats(this.props.username, this.props.repository)
                .then(res => {
                    if (this.props.btnType === "fork") 
                        this.setState({counter: res.forks_count, iconClass: 'fa fa-code-fork', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/fork`});
                    if (this.props.btnType === "star") 
                        this.setState({counter: res.stargazers_count, iconClass: 'fa fa-star', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}`});
                    if (this.props.btnType === "watch") 
                        this.setState({counter: res.watchers_count, iconClass: 'fa fa-eye', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/subscription`});
                    if (this.props.btnType === "issue") 
                        this.setState({counter: res.open_issues_count, iconClass: 'fa fa-exclamation-circle', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/issues`});
                    }
                )
                .catch(err => err);
        }
        if (this.props.btnType === "follow") {
            GithubService
                .getUserFallowers(this.props.username)
                .then(res => {
                    this.setState({counter: res.length, iconClass: 'fa fa-github', linkUrl:`https://github.com/${this.props.username}`});
                })
                .catch(err => err);
        }

        if (this.props.btnType === "download") {               
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

        if (nextProps.btnType != this.state.btnType) {
            this.setState({showCounter: nextProps.showCounter, btnType: nextProps.btnType, counter: null, showBtnText: nextProps.showBtnText});

            if (nextProps.btnType === "fork" || nextProps.btnType === "star" || nextProps.btnType === "watch" || nextProps.btnType === "issue") {
                GithubService
                    .getRepositoriesStats(nextProps.username, nextProps.repository)
                    .then(res => {
                        if (nextProps.btnType === "fork") 
                            this.setState({counter: res.forks_count, iconClass: 'fa fa-code-fork', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/fork`});
                        if (nextProps.btnType === "star") 
                            this.setState({counter: res.stargazers_count, iconClass: 'fa fa-star', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}`});
                        if (nextProps.btnType === "watch") 
                            this.setState({counter: res.watchers_count, iconClass: 'fa fa-eye', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/subscription`});
                        if (nextProps.btnType === "issue") 
                            this.setState({counter: res.open_issues_count, iconClass: 'fa fa-exclamation-circle', linkUrl:`https://github.com/${this.props.username}/${this.props.repository}/issues`});
                        }
                    )
                    .catch(err => err);
            }
            if (nextProps.btnType === "follow") {
                GithubService
                    .getUserFallowers(nextProps.username)
                    .then(res => {
                        this.setState({counter: res.length, iconClass: 'fa fa-github', linkUrl:`https://github.com/${this.props.username}`});
                    })
                    .catch(err => err);
            }

            if (nextProps.btnType === "download") {               
                this.setState({counter: null, showCounter:false, iconClass: 'fa fa-cloud-download', linkUrl:`https://api.github.com/repos/${this.props.username}/${this.props.repository}/archive/master.zip`});                    
            }
        }
    }

    render() {
        return (
            <div className="GithubDetail_btn_container d-inline">
                <a className="btn GithubDetail_btn" href={this.state.linkUrl} target="_blank"><i className={ this.state.showGithubIcon?'fa fa-github':this.state.iconClass} aria-hidden="true"/> {this.state.showBtnText && <span className="buttonText">{this.props.btnText}</span>}
                </a>
                {this.state.showCounter && <span className="speech-bubble">{(this.state.counter != null)
                        ?<a href={this.state.linkUrl} target="_blank"> {this.state.counter} </a>
                        : <Icon icon="fa fa-circle-o-notch fa-spin"/>}</span>}

            </div>

        );

    }
}

GithubButton.propTypes = {
    showCounter: PropTypes.bool,
    showBtnText: PropTypes.bool,
    showGithubIcon: PropTypes.bool,
    username: PropTypes.string,
    repository: PropTypes.string,
    btnType: PropTypes.string,
    btnText: PropTypes.string
};

GithubButton.defaultProps = {
    showCounter: true,
    showBtnText: true,
    showGithubIcon: false,
    username: "chubin",
    repository: "cheat.sh",
	btnType: "fork",
    btnText: "Fork"
};

export default GithubButton;