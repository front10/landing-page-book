import React from 'react';
import PropTypes from 'prop-types';
import GithubService from '../../service/GithubDetail.services';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

class GithubButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: null
    };
    this.onChange = this.onChange.bind(this);
    this.getRepositoryStats = this.getRepositoryStats.bind(this);
    this.getUserFallowers = this.getUserFallowers.bind(this);
    this.openUrl = this.openUrl.bind(this);
  }

  componentWillMount() {
    const { btnType, showCounter, showBtnText, showGithubIcon, repository, username } = this.props;
    this.setState({
      showCounter,
      showBtnText,
      showGithubIcon
    });
    if (btnType === 'fork' || btnType === 'star' || btnType === 'watch' || btnType === 'issue') {
      this.getRepositoryStats(username, repository, btnType);
    }
    if (btnType === 'follow') {
      this.getUserFallowers(username);
    }

    if (btnType === 'download') {
      this.setState({
        counter: null,
        showCounter: false,
        iconClass: 'fa fa-cloud-download',
        linkUrl: `https://api.github.com/repos/${username}/${repository}/archive/master.zip`
      });
    }
  }

  componentDidUpdate(prevProps) {
    this.onChange(prevProps);
  }

  onChange(prevProps) {
    const { username, repository, showCounter, showGithubIcon, showBtnText, btnType } = this.props;
    if (prevProps.showCounter !== showCounter) {
      this.setState({ showCounter });
    }
    if (prevProps.showGithubIcon !== showGithubIcon) {
      this.setState({ showGithubIcon });
    }

    if (prevProps.showBtnText !== showBtnText) {
      this.setState({ showBtnText });
    }

    if (prevProps.btnType !== btnType) {
      this.setState({
        showCounter,
        counter: null,
        showBtnText
      });

      if (btnType === 'fork' || btnType === 'star' || btnType === 'watch' || btnType === 'issue') {
        GithubService.getRepositoriesStats(username, repository)
          .then(res => {
            if (btnType === 'fork')
              this.setState({
                counter: res.forks_count,
                iconClass: 'fa fa-code-fork',
                linkUrl: `https://github.com/${username}/${repository}/fork`
              });
            if (btnType === 'star')
              this.setState({
                counter: res.stargazers_count,
                iconClass: 'fa fa-star',
                linkUrl: `https://github.com/${username}/${repository}`
              });
            if (btnType === 'watch')
              this.setState({
                counter: res.watchers_count,
                iconClass: 'fa fa-eye',
                linkUrl: `https://github.com/${username}/${repository}/subscription`
              });
            if (btnType === 'issue')
              this.setState({
                counter: res.open_issues_count,
                iconClass: 'fa fa-exclamation-circle',
                linkUrl: `https://github.com/${username}/${repository}/issues`
              });
          })
          .catch(err => err);
      }
      if (btnType === 'follow') {
        GithubService.getUserFallowers(username)
          .then(res => {
            this.setState({
              counter: res.length,
              iconClass: 'fa fa-github',
              linkUrl: `https://github.com/${username}`
            });
          })
          .catch(err => err);
      }

      if (btnType === 'download') {
        this.setState({
          counter: null,
          showCounter: false,
          iconClass: 'fa fa-cloud-download',
          linkUrl: `https://api.github.com/repos/${username}/${repository}/archive/master.zip`
        });
      }
    }
  }

  getRepositoryStats(username, repository, btnType) {
    GithubService.getRepositoriesStats(username, repository)
      .then(res => {
        if (btnType === 'fork')
          this.setState({
            counter: res.forks_count,
            iconClass: 'fa fa-code-fork',
            linkUrl: `https://github.com/${username}/${repository}/fork`
          });
        if (btnType === 'star')
          this.setState({
            counter: res.stargazers_count,
            iconClass: 'fa fa-star',
            linkUrl: `https://github.com/${username}/${repository}`
          });
        if (btnType === 'watch')
          this.setState({
            counter: res.watchers_count,
            iconClass: 'fa fa-eye',
            linkUrl: `https://github.com/${username}/${repository}/subscription`
          });
        if (btnType === 'issue')
          this.setState({
            counter: res.open_issues_count,
            iconClass: 'fa fa-exclamation-circle',
            linkUrl: `https://github.com/${username}/${repository}/issues`
          });
      })
      .catch(err => err);
  }

  getUserFallowers(username) {
    GithubService.getUserFallowers(username)
      .then(res => {
        this.setState({
          counter: res.length,
          iconClass: 'fa fa-github',
          linkUrl: `https://github.com/${username}`
        });
      })
      .catch(err => err);
  }

  openUrl() {
    const { linkUrl } = this.state;
    if (typeof window !== 'undefined') window.open(linkUrl);
  }

  render() {
    const { showGithubIcon, iconClass, showBtnText, showCounter, counter } = this.state;
    const { btnText, loadingClass, rounded, disabled, color, className } = this.props;
    return (
      <div className={`${className} GithubDetail_btn_container d-inline`}>
        <Button rounded={rounded} circle={false} disabled={disabled} color={color}>
          <i className={showGithubIcon ? 'fa fa-github' : iconClass} aria-hidden="true" />{' '}
          {showBtnText && <span className="buttonText">{btnText}</span>}
        </Button>

        {showCounter && (
          <Button
            className="speech-bubble"
            rounded={rounded}
            disabled={disabled}
            color={color}
            onClick={this.openUrl}
          >
            {counter != null ? counter : <Icon icon={loadingClass} />}
          </Button>
        )}
      </div>
    );
  }
}

GithubButton.propTypes = {
  showCounter: PropTypes.bool,
  showBtnText: PropTypes.bool,
  showGithubIcon: PropTypes.bool,
  disabled: PropTypes.bool,
  rounded: PropTypes.bool,
  loadingClass: PropTypes.string,
  username: PropTypes.string,
  repository: PropTypes.string,
  btnType: PropTypes.string,
  btnText: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

GithubButton.defaultProps = {
  showCounter: true,
  showBtnText: true,
  showGithubIcon: false,
  disabled: false,
  rounded: true,
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  username: 'front10',
  repository: 'landing-page-book',
  btnType: 'fork',
  btnText: 'Fork',
  color: 'light',
  className: ''
};

export default GithubButton;
