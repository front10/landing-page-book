import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class Copyright extends Component {
  render() {
    const {
      showCopyRightText,
      showCopyRightSymbol,
      showYear,
      showAllRightText,
      allRightText,
      copyRightText,
      text,
      className,
      style
    } = this.props;
    return (
      <div className={`Copyright ${className}`} style={style}>
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
   *  Show or hide `©` symbol
   */
  showCopyRightSymbol: PropTypes.bool,
  /**
   * Show or hide copy right text
   */
  showCopyRightText: PropTypes.bool,
  /**
   *  Show or hide year in copyright
   */
  showYear: PropTypes.bool,
  /**
   *  Show or hide all right reserved text
   */
  showAllRightText: PropTypes.bool,
  /**
   * Copy right text
   */
  copyRightText: PropTypes.string,
  /**
   * All rights reserved text
   */
  allRightText: PropTypes.string,
  /**
   *  Text in copyright, ex: <code>'Front10, Inc'</code>
   */
  text: PropTypes.string,
  /**
   * Class to apply to icon
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};
Copyright.defaultProps = {
  showCopyRightSymbol: true,
  showCopyRightText: true,
  showYear: true,
  showAllRightText: true,
  copyRightText: 'Copyright',
  allRightText: 'All rights reserved',
  text: '',
  className: '',
  style: null
};

export default withStyles(Copyright);
