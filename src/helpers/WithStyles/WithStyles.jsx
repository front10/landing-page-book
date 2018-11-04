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

    getBorderBasedStyles() {
      const { border, borderTop, borderRight, borderBottom, borderLeft } = this.props;
      let borderBasedClasses = '';
      if (border) {
        borderBasedClasses = `${borderBasedClasses} border`;
      }
      if (borderTop) {
        borderBasedClasses = `${borderBasedClasses} border-top`;
      }
      if (borderRight) {
        borderBasedClasses = `${borderBasedClasses} border-right`;
      }
      if (borderBottom) {
        borderBasedClasses = `${borderBasedClasses} border-bottom`;
      }
      if (borderLeft) {
        borderBasedClasses = `${borderBasedClasses} border-left`;
      }
      return borderBasedClasses;
    }

    getTextAlignBasedStyles() {
      const { textAlign } = this.props;
      let textAlignBasedClasses = '';
      if (textAlign) {
        textAlignBasedClasses = `${textAlignBasedClasses} text-${textAlign}`;
      }
      return textAlignBasedClasses;
    }

    translatePropsStyles() {
      const { className, classNames } = this.props;
      let finalClasses = `${className} ${classNames}`;
      const layoutBasedClasses = this.getLayoutBasedStyles();
      const colorBasedClasses = this.getColorBasedStyles();
      const borderBasedClasses = this.getBorderBasedStyles();
      const textAlignBasedClasses = this.getTextAlignBasedStyles();

      if (layoutBasedClasses) {
        finalClasses = `${finalClasses} ${layoutBasedClasses}`;
      }
      if (colorBasedClasses) {
        finalClasses = `${finalClasses} ${colorBasedClasses}`;
      }
      if (borderBasedClasses) {
        finalClasses = `${finalClasses} ${borderBasedClasses}`;
      }
      if (textAlignBasedClasses) {
        finalClasses = `${finalClasses} ${textAlignBasedClasses}`;
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
    marginLeft: PropTypes.string,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.string,
    borderTop: PropTypes.string,
    borderRight: PropTypes.string,
    borderBottom: PropTypes.string,
    borderLeft: PropTypes.string,
    textAlign: PropTypes.string
  };

  Styled.defaultProps = {
    margin: null,
    marginRight: null,
    marginLeft: null,
    color: null,
    bgColor: null,
    textColor: null,
    border: null,
    borderTop: null,
    borderRight: null,
    borderBottom: null,
    borderLeft: null,
    textAlign: null
  };
  return Styled;
};

export default withStyles;
