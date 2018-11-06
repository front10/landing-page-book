import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backers from '../Backers';
import Icon from '../Icon';
import BackersOpenCollectiveService from '../../service/BackersOpenCollective.services';
import extractProps from '../../helpers/ExtractProps';
import withStyles from '../../helpers/WithStyles';

class BackersOpenCollective extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backers: [],
      backersOrdered: [],
      loading: false
    };
    this.getMembers = this.getMembers.bind(this);
    this.sort = this.sort.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentDidMount() {
    this.setState(
      {
        backers: [],
        backersOrdered: [],
        loading: true
      },
      () => {
        this.getMembers();
      }
    );
  }

  componentDidUpdate(prevProps) {
    this.onUpdate(prevProps);
  }

  onUpdate(prevProps) {
    const { sortDirection } = this.props;
    const { backers } = this.state;
    if (prevProps.sortDirection !== sortDirection) this.sort(backers, sortDirection);
  }

  getMembers() {
    const { collective, sortDirection } = this.props;
    BackersOpenCollectiveService.getMembers({ collective, filter: 'all' }).then(response => {
      const backers = response.filter(backer => backer.role === 'BACKER').map(backer => ({
        name: backer.name,
        image: backer.image,
        profile: backer.profile,
        contributionAmount: backer.totalAmountDonated
      }));
      this.setState({ backers, loading: false }, () => {
        this.sort(backers, sortDirection);
      });
    });
  }

  sort(backers, sortDirection) {
    if (sortDirection !== 'none') {
      const back = backers.sort((a, b) => {
        if (sortDirection === 'asc') {
          if (a.contributionAmount > b.contributionAmount) return 1;
          if (a.contributionAmount < b.contributionAmount) return -1;
        } else {
          if (a.contributionAmount < b.contributionAmount) return 1;
          if (a.contributionAmount > b.contributionAmount) return -1;
        }
        return 0;
      });
      this.setState({ backersOrdered: back });
    } else this.setState({ backersOrdered: backers });
  }

  render() {
    const { backersOrdered, loading } = this.state;
    const {
      imageRounded,
      imageBordered,
      imageGray,
      loadingClass,
      loadingText,
      className
    } = this.props;
    return (
      <React.Fragment>
        {loading && (
          <div className="text-center">
            <Icon icon={loadingClass} {...extractProps('icon', this.props)} />
            {loadingText && <p>{loadingText}</p>}
          </div>
        )}
        {!loading && (
          <Backers
            backers={backersOrdered}
            imageRounded={imageRounded}
            imageBordered={imageBordered}
            imageGray={imageGray}
            className={className}
          />
        )}
      </React.Fragment>
    );
  }
}

BackersOpenCollective.propTypes = {
  /**
   * Class name applied of the container. Default `"px-2"`
   */
  className: PropTypes.string,
  /**
   * If true the image will be rounded as a circle, default `true`
   */
  imageRounded: PropTypes.bool,
  /**
   * If true the image will have a solid border, default `true`
   */
  imageBordered: PropTypes.bool,
  /**
   * If true the image doesn't show colors, default `false`
   */
  imageGray: PropTypes.bool,
  /**
   * Name of collective in opencollective.
   */
  collective: PropTypes.string.isRequired,
  /**
   * Sort direction to show the list of backers, default `desc`
   */
  sortDirection: PropTypes.string,
  /**
   * CSS class for loading animation, default `fa fa-circle-o-notch fa-spin`
   */
  loadingClass: PropTypes.string,
  /**
   * Loading text to show, default `Loading...`
   */
  loadingText: PropTypes.string
};
BackersOpenCollective.defaultProps = {
  className: '',
  imageRounded: true,
  imageBordered: true,
  imageGray: false,
  sortDirection: 'desc',
  loadingClass: 'fa fa-circle-o-notch fa-spin',
  loadingText: 'Loading...'
};

export default withStyles(BackersOpenCollective);
