import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backers from '../Backers';
import BackersOpenCollectiveService from '../../service/BackersOpenCollective.services';

class BackersOpenCollective extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getMembers = this.getMembers.bind(this);
    this.sort = this.sort.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  componentWillMount() {
    this.setState(
      {
        backers: [],
        backersOrdered: []
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
      this.setState({ backers });
      this.sort(backers, sortDirection);
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
    const { backersOrdered } = this.state;
    const { imageRounded, imageBordered, imageGray } = this.props;
    return (
      <Backers
        backers={backersOrdered}
        imageRounded={imageRounded}
        imageBordered={imageBordered}
        imageGray={imageGray}
      />
    );
  }
}

BackersOpenCollective.propTypes = {
  imageRounded: PropTypes.bool,
  imageBordered: PropTypes.bool,
  imageGray: PropTypes.bool,
  collective: PropTypes.string.isRequired,
  sortDirection: PropTypes.string
};
BackersOpenCollective.defaultProps = {
  imageRounded: true,
  imageBordered: true,
  imageGray: false,
  sortDirection: 'desc'
};

export default BackersOpenCollective;
