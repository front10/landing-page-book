import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            />
          </div>
        ))}
      </div>
    );
  }
}

BrowserSupport.propTypes = {
  showBrowserVendor: PropTypes.bool,
  showBrowserVersion: PropTypes.bool,
  browsers: PropTypes.arrayOf(
    PropTypes.shape({
      vendor: PropTypes.string,
      version: PropTypes.string
    })
  ),
  imgFilter: PropTypes.string
};
BrowserSupport.defaultProps = {
  showBrowserVendor: true,
  showBrowserVersion: true,
  browsers: [],
  imgFilter: null
};

export default BrowserSupport;
