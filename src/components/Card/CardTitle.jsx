import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class CardTitle extends React.Component {
  render() {
    const { content, className, style } = this.props;
    return (
      <div className={`Card__Title ${className}`} style={style}>
        {content}
      </div>
    );
  }
}

CardTitle.propTypes = {
  content: PropTypes.string,
  /**
   * Section css class.
   */
  className: PropTypes.string,
  /**
   * Customs styles to tramsform your Hero
   */
  style: PropTypes.objectOf(PropTypes.any)
};
CardTitle.defaultProps = {
  content: '',
  className: null,
  style: null
};

export default withStyles(CardTitle);
