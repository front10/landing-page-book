import React, { Component } from 'react';
import PropTypes from 'prop-types';
import extractProps from '../../helpers/ExtractProps';
import Header from '../Header';
import withStyles from '../../helpers/WithStyles';

class Section extends Component {
  render() {
    const { title, subTitle, children, className, contentClassName } = this.props;
    return (
      <section className={`Section ${className}`}>
        <div className={`p-5 ${contentClassName}`}>
          {(title || subTitle) && (
            <div className="mb-5 text-center">
              {title && (
                <Header
                  type="h2"
                  className="Section__Title"
                  marginBottom="2"
                  {...extractProps('title', this.props)}
                >
                  {title}
                </Header>
              )}
              {subTitle && (
                <Header
                  type="h3"
                  className="Section__Subtitle"
                  marginBottom="2"
                  {...extractProps('subTitle', this.props)}
                >
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
   * Section content css class. Default `""`
   */
  contentClassName: PropTypes.string,
  /**
   * Elements to show inside of Section.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Section.defaultProps = {
  title: '',
  subTitle: '',
  className: '',
  contentClassName: '',
  children: null
};

const SectionWithStyles = withStyles(Section);
export default SectionWithStyles;
