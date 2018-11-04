import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withStyles = WrappedComponent => {
  class Styled extends Component {
    getLayoutBasedStyles() {
      const { marginRight, marginLeft, margin } = this.props;
      let layoutClasses = '';
      if (margin) {
        layoutClasses = `${layoutClasses} m-${margin}`;
      }
      if (marginRight) {
        layoutClasses = `${layoutClasses} mr-${marginRight}`;
      }
      if (marginLeft) {
        layoutClasses = `${layoutClasses} ml-${marginLeft}`;
      }
      return layoutClasses;
    }

    getColorBasedStyles() {
      const { color, bgColor, textColor } = this.props;
      let colorBasedClasses = '';
      if (color) {
        colorBasedClasses = `${colorBasedClasses} ${color}`;
      }
      if (bgColor) {
        colorBasedClasses = `${colorBasedClasses} bg-${bgColor}`;
      }
      if (textColor) {
        colorBasedClasses = `${colorBasedClasses} text-${textColor}`;
      }
      return colorBasedClasses;
    }

    translatePropsStyles() {
      const { className, classNames } = this.props;
      let finalClasses = `${className} ${classNames}`;
      const layoutBasedClasses = this.getLayoutBasedStyles();
      const colorBasedClasses = this.getColorBasedStyles();

      if (layoutBasedClasses) {
        finalClasses = `${finalClasses} ${layoutBasedClasses}`;
      }
      if (colorBasedClasses) {
        finalClasses = `${finalClasses} ${colorBasedClasses}`;
      }
      return finalClasses;
    }

    render() {
      const classNames = this.translatePropsStyles();
      return <WrappedComponent {...this.props} className={classNames} />;
    }
  }

  Styled.propTypes = {
    margin: PropTypes.string,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string
  };

  Styled.defaultProps = {
    margin: null,
    marginRight: null,
    marginLeft: null
  };
  return Styled;
};

export default withStyles;
