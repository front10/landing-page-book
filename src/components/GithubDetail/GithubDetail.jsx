import React from 'react';
import PropTypes from 'prop-types';
import GithubService from '../../service/GithubDetail.services';

class GithubDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countFollow: null,
            countWatch: null,
            countStar: null,
            countFork: null,
            countIssue: null,
            countDownload: null
        };
    }

    componentWillMount() {
        if (this.props.showFork || this.props.showStar || this.props.showWatch || this.props.showIssue) {
            GithubService.getRepositoriesStats(this.props.username, this.props.repository)
                .then(res => {
                    this.setState({
                        forkCount: res.forks_count, 
                        countFork: 1,
                        starCount: res.stargazers_count, 
                        countStar: 1,
                        watchCount: res.watchers_count, 
                        countWatch: 1,
                        issueCount: res.open_issues_count, 
                        countIssue: 1
                    });
                })
                .catch(err => err);
        }
        if (this.props.showFollow) {
            GithubService
                .getUserFallowers(this.props.username)
                .then(res => {
                    this.setState({followCount: res.length, countFollow: 1});
                })
                .catch(err => err);
        }
        
        if (this.props.showDownload) {
            GithubService
                .getRepositoriesDownloads(this.props.username, this.props.repository)
                .then(res => {
                    this.setState({downloadCount: res.length, countDownload: 1});
                })
                .catch(err => err);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.showFork || nextProps.showStar || nextProps.showWatch || nextProps.showIssue ) && this.state.countFollow === null) {
            GithubService.getRepositoriesStats(this.props.username, this.props.repository)
            .then(res => {
                this.setState({
                    forkCount: res.forks_count, 
                    countFork: 1,
                    starCount: res.stargazers_count, 
                    countStar: 1,
                    watchCount: res.watchers_count, 
                    countWatch: 1,
                    issueCount: res.open_issues_count, 
                    countIssue: 1
                });
            })
            .catch(err => err);
        }
        if (nextProps.showFollow && this.state.countFollow === null) {
            GithubService
                .getUserFallowers(this.props.username)
                .then(res => {
                    this.setState({followCount: res.length, countFollow: 1});
                })
                .catch(err => err);
        }
        if (nextProps.showDownload && this.state.countDownload === null) {
            GithubService
            .getRepositoriesDownloads(this.props.username, this.props.repository)
            .then(res => {
                this.setState({downloadCount: res.length, countDownload: 1});
            })
            .catch(err => err);
        }
    }

    render() {
        return (
            <div className="row">
                {this.props.showFollow && <div className="Follow">
                    <button className="btn"><i className="fa fa-github" aria-hidden="true"/>
                        <span className="buttonText">{this.props.FollowText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.followCount != null)
                            ? this.state.followCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}
                {this.props.showWatch && <div className="Watch">
                    <button className="btn"><i className="fa fa-eye" aria-hidden="true"/>
                        <span className="buttonText">{this.props.WatchText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.watchCount != null)
                            ? this.state.watchCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}
                {this.props.showStar && <div className="Star">
                    <button className="btn"><i className="fa fa-star" aria-hidden="true"/>
                        <span className="buttonText">{this.props.StarText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.starCount != null)
                            ? this.state.starCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}
                {this.props.showFork && <div className="Fork">
                    <button className="btn"><i className="fa fa-code-fork" aria-hidden="true"/>
                        <span className="buttonText">{this.props.ForkText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.forkCount != null)
                            ? this.state.forkCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}
                {this.props.showIssue && <div className="Issue">
                    <button className="btn"><i className="fa fa-exclamation-circle" aria-hidden="true"/>
                        <span className="buttonText">{this.props.IssueText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.issueCount != null)
                            ? this.state.issueCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}
                {this.props.showDownload && <div className="Download">
                    <button className="btn"><i className="fa fa-cloud-download" aria-hidden="true"/>
                        <span className="buttonText">{this.props.DownloadText}</span>
                    </button>
                    <span className="speech-bubble">{(this.state.downloadCount != null)
                            ? this.state.downloadCount
                            : <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"/>}</span>
                </div>
}

            </div>
        );

    }
}

GithubDetail.propTypes = {
    username: PropTypes.string,
    repository: PropTypes.string,
    showFollow: PropTypes.bool,
    showWatch: PropTypes.bool,
    showStar: PropTypes.bool,
    showFork: PropTypes.bool,
    showIssue: PropTypes.bool,
    showDownload: PropTypes.bool,
    FollowText: PropTypes.string,
    WatchText: PropTypes.string,
    StarText: PropTypes.string,
    ForkText: PropTypes.string,
    IssueText: PropTypes.string,
    DownloadText: PropTypes.string

};

GithubDetail.defaultProps = {
    username: "front10",
    repository: "front10.github.io",
    showFollow: true,
    showWatch: true,
    showStar: true,
    showFork: true,
    showIssue: true,
    showDownload: true,
    FollowText: "Follow",
    WatchText: "Watch",
    StarText: "Star",
    ForkText: "Fork",
    IssueText: "Issue",
    DownloadText: "Download"
};

export default GithubDetail;