import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Copyright extends Component {
  render() {
    const {
      showCopyRightText,
      showCopyRightSymbol,
      showYear,
      showAllRightText,
      allRightText,
      copyRightText,
      text
    } = this.props;
    return (
      <div className="Copyright">
        {showCopyRightText && <span className="mr-1">{copyRightText}</span>}
        {showCopyRightSymbol && <span className="mr-1">©</span>}
        {showYear && <span className="mr-1">{new Date().getFullYear()}</span>}
        {text && <span className="mr-1">{text}.</span>}
        {showAllRightText && <span className="mr-1">{allRightText}</span>}
      </div>
    );
  }
}

Copyright.propTypes = {
  /**
   *  Show or hide `©` symbol. Default `true`
   */
  showCopyRightSymbol: PropTypes.bool,
  /**
   * Show or hide copy right text. Default `true`
   */
  showCopyRightText: PropTypes.bool,
  /**
   *  Show or hide year in copyright. Default `true`
   */
  showYear: PropTypes.bool,
  /**
   *  Show or hide all right reserved text. Default `true`
   */
  showAllRightText: PropTypes.bool,
  /**
   * Copy right text. Default `"Copyright"`
   */
  copyRightText: PropTypes.string,
  /**
   * All rights reserved text. Default `"All rights reserved"`
   */
  allRightText: PropTypes.string,
  /**
   *  Text in copyright, ex: `Front10, Inc`. Default `""`
   */
  text: PropTypes.string
};
Copyright.defaultProps = {
  showCopyRightSymbol: true,
  showCopyRightText: true,
  showYear: true,
  showAllRightText: true,
  copyRightText: 'Copyright',
  allRightText: 'All rights reserved',
  text: ''
};

export default Copyright;
