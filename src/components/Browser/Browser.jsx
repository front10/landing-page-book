import React, { Component } from 'react';
import PropTypes from 'prop-types';

import firefox from './images/firefox.png';
import chrome from './images/chrome.png';
import iexplore from './images/iexplore.png';
import safari from './images/safari.png';
import opera from './images/opera.png';
import maxthon from './images/maxthon.png';
import netscape from './images/netscape.png';
import flock from './images/flock.png';
import Image from '../Image/Image';

const available = {
  firefox: { name: 'Firefox', icon: firefox },
  chrome: { name: 'Chrome', icon: chrome },
  iexplore: { name: 'Internet explorer', icon: iexplore },
  safari: { name: 'Safari', icon: safari },
  opera: { name: 'Opera', icon: opera },
  maxthon: { name: 'maxthon', icon: maxthon },
  netscape: { name: 'Netscape', icon: netscape },
  flock: { name: 'Flock', icon: flock }
};

class Browser extends Component {
  render() {
    const { vendor, version, showText } = this.props;
    return (
      <div className="d-inline Browser">
        <Image
          src={available[vendor].icon}
          alt={`Browser ${available[vendor].name} icon`}
          className="Browser__Icon"
        />
        {showText && <div className="Browser__Text"> {available[vendor].name}</div>}
        {version && <div className="Browser__Version">{version}</div>}
      </div>
    );
  }
}

Browser.propTypes = {
  showText: PropTypes.bool,
  vendor: PropTypes.string,
  version: PropTypes.string
};
Browser.defaultProps = {
  showText: true,
  vendor: '',
  version: ''
};

export default Browser;
