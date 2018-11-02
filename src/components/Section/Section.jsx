import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

class Section extends Component {
  render() {
    const {
      gray,
      title,
      subTitle,
      children,
      className,
      contentClassName,
      alignHeader
    } = this.props;
    return (
      <section className={`Section ${gray ? 'Section--gray' : ''} ${className}`}>
        <div className={`p-5 ${contentClassName}`}>
          {(title || subTitle) && (
            <div className="mb-5 text-center">
              {title && (
                <Header textAlign={alignHeader} type="h2" className="Section__Title mb-2">
                  {title}
                </Header>
              )}
              {subTitle && (
                <Header textAlign={alignHeader} type="h3" className="Section__Subtitle mb-2">
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
  alignHeader: PropTypes.string,
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
  alignHeader: 'center',
  contentClassName: '',
  children: null
};

export default Section;
