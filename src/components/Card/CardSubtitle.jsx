import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class CardSubtitle extends React.Component {
  render() {
    const { content, className, style } = this.props;
    return (
      <div style={style} className={`Card__CardSubtitle ${className}`}>
        {content}
      </div>
    );
  }
}

CardSubtitle.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any)
};
CardSubtitle.defaultProps = {
  content: '',
  className: '',
  style: null
};

export default withStyles(CardSubtitle);
