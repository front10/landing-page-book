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

  render() {
    return (
      <div className="analytics">
        {ReactGA.pageview(window.location.pathname + window.location.search)}
      </div>
    );
  }
}

Analytics.propTypes = {
  idTracking: PropTypes.string,
  debug: PropTypes.bool,
  testMode: PropTypes.bool
};
Analytics.defaultProps = {
  idTracking: 'U-000001-A',
  debug: false,
  testMode: false
};

export default Analytics;
