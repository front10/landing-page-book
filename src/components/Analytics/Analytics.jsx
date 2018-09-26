import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

class Analytics extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize(props.idTracking, {
      debug: props.debug,
      testMode: props.testMode
    });
  }

  componentDidMount() {
    const { urlPath } = this.props;
    ReactGA.pageview(urlPath);
  }

  componentDidUpdate() {
    const { urlPath } = this.props;
    ReactGA.pageview(urlPath);
  }

  render() {
    return <div />;
  }
}

Analytics.propTypes = {
  idTracking: PropTypes.string.isRequired,
  urlPath: PropTypes.string,
  debug: PropTypes.bool,
  testMode: PropTypes.bool
};
Analytics.defaultProps = {
  urlPath: window && window.location.pathname + window.location.search,
  debug: false,
  testMode: false
};

export default Analytics;
