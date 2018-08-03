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
  showCopyRightSymbol: PropTypes.bool,
  showCopyRightText: PropTypes.bool,
  showYear: PropTypes.bool,
  showAllRightText: PropTypes.bool,
  copyRightText: PropTypes.string,
  allRightText: PropTypes.string,
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
