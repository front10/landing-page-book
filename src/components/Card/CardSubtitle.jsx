import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class CardSubtitle extends React.Component {
  render() {
    const { content, className } = this.props;
    return <div className={`Card__CardSubtitle ${className}`}>{content}</div>;
  }
}

CardSubtitle.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
};
CardSubtitle.defaultProps = {
  content: '',
  className: ''
};

const CardSubtitleWithStyles = withStyles(CardSubtitle);
export default CardSubtitleWithStyles;
