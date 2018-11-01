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
  gray: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  alignHeader: PropTypes.string,
  contentClassName: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Section.defaultProps = {
  gray: false,
  title: '',
  subTitle: '',
  className: '',
  alignHeader: 'left',
  contentClassName: '',
  children: null
};

export default Section;
