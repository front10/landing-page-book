import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import withStyles from '../../helpers/WithStyles';

class Section extends Component {
  render() {
    const {
      gray,
      title,
      subTitle,
      children,
      className,
      contentClassName,
      headerTextAlign
    } = this.props;
    return (
      <section className={`Section ${gray ? 'Section--gray' : ''} ${className}`}>
        <div className={`p-5 ${contentClassName}`}>
          {(title || subTitle) && (
            <div className="mb-5 text-center">
              {title && (
                <Header textAlign={headerTextAlign} type="h2" className="Section__Title" marginBottom="2">
                  {title}
                </Header>
              )}
              {subTitle && (
                <Header textAlign={headerTextAlign} type="h3" className="Section__Subtitle" marginBottom="2">
                  {subTitle}
                </Header>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  /**
   * If section background color is gray. Default `false`
   */
  gray: PropTypes.bool,
  /**
   * Section title. Default `""`
   */
  title: PropTypes.string,
  /**
   * Section subtitle. Default `""`
   */
  subTitle: PropTypes.string,
  /**
   * Section css class. Default `""`
   */
  className: PropTypes.string,
  /**
   *  Define aligment of the component. Default `"center"`, can be `"right"` or `"left"`
   */
  headerTextAlign: PropTypes.string,
  /**
   * Section content css class. Default `""`
   */
  contentClassName: PropTypes.string,
  /**
   * Elements to show inside of Section.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Section.defaultProps = {
  gray: false,
  title: '',
  subTitle: '',
  className: '',
  headerTextAlign: 'center',
  contentClassName: '',
  children: null
};

const SectionWithStyles = withStyles(Section);
export default SectionWithStyles;
