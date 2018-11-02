import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

/**
  ## Overview
  `@front10/landing-page-book/Analytics` is used to send statistics of visits to google analytics
  ## How to use
  1- Add following content to import the component:
  ```js
   import Analytics from "@front10/landing-page-book/dist/components/Analytics";
  ```
  2- Put this code into jsx page:
  ```html
   <Analytics idTracking='UA-0000000-1' />
  ```
 */
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

  componentDidUpdate(prevProps) {
    ReactGA.pageview(prevProps.urlPath);
  }

  render() {
    return <div />;
  }
}

Analytics.propTypes = {
  /**
   * Tracking ID code of your property in google analytics
   */
  idTracking: PropTypes.string.isRequired,
  /**
   * Path you want to track, for example '/section/page1'. Default route is obtained from the window object
   */
  urlPath: PropTypes.string,
  /**
   * If set to true, will output additional feedback to the console. Default `false`.
   */
  debug: PropTypes.bool,
  /**
   * Enable test mode in the component .Default `false`
   */
  testMode: PropTypes.bool
};
Analytics.defaultProps = {
  urlPath:
    typeof window !== 'undefined' && typeof window.location !== 'undefined'
      ? window.location.pathname + window.location.search
      : '',
  debug: false,
  testMode: false
};

export default Analytics;
