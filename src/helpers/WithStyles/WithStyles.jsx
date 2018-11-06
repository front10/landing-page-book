import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withStyles = WrappedComponent => {
  class Styled extends Component {
    getLayoutBasedStyles() {
      const {
        marginRight,
        marginLeft,
        marginTop,
        marginBottom,
        margin,
        paddingRight,
        paddingLeft,
        paddingTop,
        paddingBottom,
        padding
      } = this.props;
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
      if (marginTop) {
        layoutClasses = `${layoutClasses} mt-${marginTop}`;
      }
      if (marginBottom) {
        layoutClasses = `${layoutClasses} mb-${marginBottom}`;
      }
      if (padding) {
        layoutClasses = `${layoutClasses} p-${padding}`;
      }
      if (paddingRight) {
        layoutClasses = `${layoutClasses} pr-${paddingRight}`;
      }
      if (paddingLeft) {
        layoutClasses = `${layoutClasses} pl-${paddingLeft}`;
      }
      if (paddingTop) {
        layoutClasses = `${layoutClasses} pt-${paddingTop}`;
      }
      if (paddingBottom) {
        layoutClasses = `${layoutClasses} pb-${paddingBottom}`;
      }
      return layoutClasses;
    }

    getColorBasedStyles() {
      const { bgColor, textColor } = this.props;
      let colorBasedClasses = '';
      if (bgColor) {
        colorBasedClasses = `${colorBasedClasses} bg-${bgColor}`;
      }
      if (textColor) {
        colorBasedClasses = `${colorBasedClasses} text-${textColor}`;
      }
      return colorBasedClasses;
    }

    getBorderBasedStyles() {
      const { border, borderTop, borderRight, borderBottom, borderLeft, borderNone } = this.props;
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
      if (borderNone) {
        borderBasedClasses = `${borderBasedClasses} border-0`;
      }
      return borderBasedClasses;
    }

    getTextBasedStyles() {
      const {
        textAlign,
        textTransform,
        textTruncate,
        fontItalic,
        fontWeight,
        textMonoSpace
      } = this.props;
      let textAlignBasedClasses = '';
      if (textAlign) textAlignBasedClasses += `${textAlignBasedClasses} text-${textAlign}`;
      if (textTransform) textAlignBasedClasses += `${textAlignBasedClasses} text-${textTransform}`;
      if (textTruncate) textAlignBasedClasses += `${textAlignBasedClasses} text-truncate`;
      if (fontItalic) textAlignBasedClasses += `${textAlignBasedClasses} font-italic`;
      if (fontWeight) textAlignBasedClasses += `${textAlignBasedClasses} font-weight-${fontWeight}`;
      if (textMonoSpace) textAlignBasedClasses += `${textAlignBasedClasses} text-monospace`;
      return textAlignBasedClasses;
    }

    translatePropsStyles() {
      const { className, classNames } = this.props;
      let finalClasses = '';
      if (className) finalClasses += ` ${className}`;
      if (classNames) finalClasses += ` ${classNames}`;
      const layoutBasedClasses = this.getLayoutBasedStyles();
      const colorBasedClasses = this.getColorBasedStyles();
      const borderBasedClasses = this.getBorderBasedStyles();
      const textBasedClasses = this.getTextBasedStyles();

      if (layoutBasedClasses) {
        finalClasses = `${finalClasses} ${layoutBasedClasses}`;
      }
      if (colorBasedClasses) {
        finalClasses = `${finalClasses} ${colorBasedClasses}`;
      }
      if (borderBasedClasses) {
        finalClasses = `${finalClasses} ${borderBasedClasses}`;
      }
      if (textBasedClasses) {
        finalClasses = `${finalClasses} ${textBasedClasses}`;
      }
      return finalClasses;
    }

    render() {
      const classNames = this.translatePropsStyles();
      const { style } = this.props;
      return <WrappedComponent {...this.props} className={classNames} style={style} />;
    }
  }

  Styled.propTypes = {
    margin: PropTypes.string,
    marginRight: PropTypes.string,
    marginLeft: PropTypes.string,
    marginTop: PropTypes.string,
    marginBottom: PropTypes.string,
    padding: PropTypes.string,
    paddingRight: PropTypes.string,
    paddingLeft: PropTypes.string,
    paddingTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.bool,
    borderTop: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderBottom: PropTypes.bool,
    borderLeft: PropTypes.bool,
    borderNone: PropTypes.bool,
    /**
     * Paragraph alignment. Default  `justify`, can be `left`, `center` and `right`
     */
    textAlign: PropTypes.oneOf(['center', 'right', 'left', 'justify']),
    /**
     * Paragraph text transform. Default `""` , can be `lowercase`, `uppercase`, `capitalize`
     */
    textTransform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize', '']),
    /**
     * Truncate the paragraph. Default `false`
     */
    textTruncate: PropTypes.bool,
    /**
     * Show content using mono spaced text. Default `false`
     */
    textMonoSpace: PropTypes.bool,
    /**
     * Show content using an italic font. Default `false`
     */
    fontItalic: PropTypes.bool,
    /**
     * Weight of the font. Default `normal`, can be `bold`, `normal`, `light`
     */
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'light']),
    /**
     * In case you wanted to pass custom styles `""`
     */
    style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  };

  Styled.defaultProps = {
    margin: null,
    marginRight: null,
    marginLeft: null,
    marginTop: null,
    marginBottom: null,
    padding: null,
    paddingRight: null,
    paddingLeft: null,
    paddingTop: null,
    paddingBottom: null,
    bgColor: null,
    textColor: null,
    border: null,
    borderTop: null,
    borderRight: null,
    borderBottom: null,
    borderLeft: null,
    borderNone: null,
    textAlign: null,
    textTransform: null,
    textTruncate: null,
    textMonoSpace: null,
    fontItalic: null,
    fontWeight: null,
    style: null
  };
  return Styled;
};

export default withStyles;
