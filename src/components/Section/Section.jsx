import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    const { gray, title, subTitle, children } = this.props;
    return (
      <div className={`Section ${gray ? 'Section--gray' : ''}`}>
        <div className="p-5">
          {(title || subTitle) && (
            <div className="mb-5 text-center">
              {title && <div className="Section__Title mb-2">{title}</div>}
              {subTitle && <div className="Section__Subtitle mb-2">{subTitle}</div>}
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }
}

Section.propTypes = {
  gray: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Section.defaultProps = {
  gray: false,
  title: '',
  subTitle: '',
  children: null
};

export default Section;
