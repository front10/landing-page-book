import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Browser from '../Browser';

class BrowserSupport extends Component {
  render() {
    const { browsers, showBrowserVendor, showBrowserVersion } = this.props;
    return (
      <div>
        {browsers.map(browser => (
          <div className="d-inline-flex text-center pl-3 pr-3" key={browser.vendor}>
            <Browser
              vendor={browser.vendor}
              version={browser.version}
              showBrowserVendor={showBrowserVendor}
              showBrowserVersion={showBrowserVersion}
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
  )
};
BrowserSupport.defaultProps = {
  showBrowserVendor: true,
  showBrowserVersion: true,
  browsers: []
};

export default BrowserSupport;
