import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withStyles = WrappedComponent => {
  const defaultProps = WrappedComponent ? WrappedComponent.defaultProps : {};
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
        textMonoSpace,
        fontSize,
        fontSizeSm,
        fontSizeMd,
        fontSizeLg,
        fontSizeXlg
      } = this.props;
      let textAlignBasedClasses = '';
      if (textAlign) textAlignBasedClasses += `${textAlignBasedClasses} text-${textAlign}`;
      if (textTransform) textAlignBasedClasses += `${textAlignBasedClasses} text-${textTransform}`;
      if (textTruncate) textAlignBasedClasses += `${textAlignBasedClasses} text-truncate`;
      if (fontItalic) textAlignBasedClasses += `${textAlignBasedClasses} font-italic`;
      if (fontWeight) textAlignBasedClasses += `${textAlignBasedClasses} font-weight-${fontWeight}`;
      if (textMonoSpace) textAlignBasedClasses += `${textAlignBasedClasses} text-monospace`;
      if (fontSize) textAlignBasedClasses += `${textAlignBasedClasses} fr-font-size-${fontSize}-x`;
      if (fontSizeSm)
        textAlignBasedClasses += `${textAlignBasedClasses} fr-font-size-sm-${fontSizeSm}-x`;
      if (fontSizeMd)
        textAlignBasedClasses += `${textAlignBasedClasses} fr-font-size-md-${fontSizeMd}-x`;
      if (fontSizeLg)
        textAlignBasedClasses += `${textAlignBasedClasses} fr-font-size-lg-${fontSizeLg}-x`;
      if (fontSizeXlg)
        textAlignBasedClasses += `${textAlignBasedClasses} fr-font-size-xlg-${fontSizeXlg}-x`;
      return textAlignBasedClasses;
    }

    getRoundedBasedStyles() {
      const {
        rounded,
        roundedRight,
        roundedLeft,
        roundedTop,
        roundedBottom,
        roundedCircle,
        roundedNone
      } = this.props;
      let roundedBasedClasses = '';
      if (rounded) {
        roundedBasedClasses = `${roundedBasedClasses} rounded`;
      }
      if (roundedTop) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-top`;
      }
      if (roundedRight) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-right`;
      }
      if (roundedBottom) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-bottom`;
      }
      if (roundedLeft) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-left`;
      }
      if (roundedCircle) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-circle`;
      }
      if (roundedNone) {
        roundedBasedClasses = `${roundedBasedClasses} rounded-0`;
      }
      return roundedBasedClasses;
    }

    translatePropsStyles() {
      const { className } = this.props;
      let finalClasses = '';
      if (className) finalClasses += ` ${className}`;
      const layoutBasedClasses = this.getLayoutBasedStyles();
      const colorBasedClasses = this.getColorBasedStyles();
      const borderBasedClasses = this.getBorderBasedStyles();
      const textBasedClasses = this.getTextBasedStyles();
      const roundedBasedClasses = this.getRoundedBasedStyles();

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
      if (roundedBasedClasses) {
        finalClasses = `${finalClasses} ${roundedBasedClasses}`;
      }
      return finalClasses;
    }

    render() {
      const className = this.translatePropsStyles();
      const { style } = this.props;
      return <WrappedComponent {...this.props} className={className} style={style} />;
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
    rounded: PropTypes.bool,
    roundedRight: PropTypes.bool,
    roundedLeft: PropTypes.bool,
    roundedTop: PropTypes.bool,
    roundedBottom: PropTypes.bool,
    roundedCircle: PropTypes.bool,
    roundedNone: PropTypes.bool,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    border: PropTypes.bool,
    borderTop: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderBottom: PropTypes.bool,
    borderLeft: PropTypes.bool,
    borderNone: PropTypes.bool,
    textAlign: PropTypes.oneOf(['center', 'right', 'left', 'justify']),
    textTransform: PropTypes.oneOf(['lowercase', 'uppercase', 'capitalize', '']),
    textTruncate: PropTypes.bool,
    textMonoSpace: PropTypes.bool,
    fontItalic: PropTypes.bool,
    fontWeight: PropTypes.oneOf(['bold', 'normal', 'light']),
    fontSize: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeSm: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeMd: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeLg: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    fontSizeXlg: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9']),
    style: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
  };

  Styled.defaultProps = {
    margin: defaultProps.margin || null,
    marginRight: defaultProps.marginRight || null,
    marginLeft: defaultProps.marginLeft || null,
    marginTop: defaultProps.marginTop || null,
    marginBottom: defaultProps.marginBottom || null,
    padding: defaultProps.padding || null,
    paddingRight: defaultProps.paddingRight || null,
    paddingLeft: defaultProps.paddingLeft || null,
    paddingTop: defaultProps.paddingTop || null,
    paddingBottom: defaultProps.paddingBottom || null,
    rounded: defaultProps.rounded || null,
    roundedRight: defaultProps.roundedRight || null,
    roundedLeft: defaultProps.roundedLeft || null,
    roundedTop: defaultProps.roundedTop || null,
    roundedBottom: defaultProps.roundedBottom || null,
    roundedCircle: defaultProps.roundedCircle || null,
    roundedNone: defaultProps.roundedNone || null,
    bgColor: defaultProps.bgColor || null,
    textColor: defaultProps.textColor || null,
    border: defaultProps.border || null,
    borderTop: defaultProps.borderTop || null,
    borderRight: defaultProps.borderRight || null,
    borderBottom: defaultProps.borderBottom || null,
    borderLeft: defaultProps.borderLeft || null,
    borderNone: defaultProps.borderNone || null,
    textAlign: defaultProps.textAlign || null,
    textTransform: defaultProps.textTransform || null,
    textTruncate: defaultProps.textTruncate || null,
    textMonoSpace: defaultProps.textMonoSpace || null,
    fontItalic: defaultProps.fontItalic || null,
    fontWeight: defaultProps.fontWeight || null,
    fontSize: defaultProps.fontSize || null,
    fontSizeSm: defaultProps.fontSizeSm || null,
    fontSizeMd: defaultProps.fontSizeMd || null,
    fontSizeLg: defaultProps.fontSizeLg || null,
    fontSizeXlg: defaultProps.fontSizeXlg || null,
    style: defaultProps.style || null
  };
  return Styled;
};

export default withStyles;
