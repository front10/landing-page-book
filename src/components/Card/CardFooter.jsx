import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '../../helpers/WithStyles';

class CardFooter extends React.Component {
  render() {
    const { children, className } = this.props;
    return (
      <div className={`${className} card-footer`}>
        <React.Fragment>{children}</React.Fragment>
      </div>
    );
  }
}

CardFooter.propTypes = {
  /**
   * Array of elements to show inside a card, For example ['Buttons', 'Links', 'tables', etc]
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   *  Component class name
   */
  className: PropTypes.string
};
CardFooter.defaultProps = {
  children: null,
  className: null
};

export default withStyles(CardFooter);
