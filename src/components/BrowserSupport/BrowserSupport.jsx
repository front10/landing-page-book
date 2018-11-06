import React, { Component } from 'react';
import PropTypes from 'prop-types';
import extractProps from '../../helpers/ExtractProps';
import Browser from '../Browser';

class BrowserSupport extends Component {
  render() {
    const { browsers, showBrowserVendor, showBrowserVersion, imgFilter } = this.props;
    return (
      <div>
        {browsers.map(browser => (
          <div className="d-inline-flex text-center pl-3 pr-3" key={browser.vendor}>
            <Browser
              vendor={browser.vendor}
              version={browser.version}
              showBrowserVendor={showBrowserVendor}
              showBrowserVersion={showBrowserVersion}
              imgFilter={imgFilter}
              {...extractProps('browser', this.props)}
            />
          </div>
        ))}
      </div>
    );
  }
}

BrowserSupport.propTypes = {
  /**
   * Define if the browser name is displayed. Default `true`
   */
  showBrowserVendor: PropTypes.bool,
  /**
   * Define if the browser version is displayed. Default `true`
   */
  showBrowserVersion: PropTypes.bool,
  /**
   * Array of browsers. Default `[]`
   */
  browsers: PropTypes.arrayOf(
    PropTypes.shape({
      vendor: PropTypes.string,
      version: PropTypes.string
    })
  ),
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgFilter: PropTypes.string
};
BrowserSupport.defaultProps = {
  showBrowserVendor: true,
  showBrowserVersion: true,
  browsers: [],
  imgFilter: null
};

export default BrowserSupport;
