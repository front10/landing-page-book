import React, { Component } from 'react';
import PropTypes from 'prop-types';
import extractProps from '../../helpers/ExtractProps';
import Header from '../Header';
import withStyles from '../../helpers/WithStyles';

class Section extends Component {
  render() {
    const { title, subTitle, children, className, style } = this.props;
    return (
      <section className={`Section ${className}`} style={style}>
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
      </section>
    );
  }
}

Section.propTypes = {
  /**
   * Section title.
   */
  title: PropTypes.string,
  /**
   * Section subtitle.
   */
  subTitle: PropTypes.string,
  /**
   * Section css class.
   */
  className: PropTypes.string,
  /**
   * Customs styles to tramsform your Hero
   */
  style: PropTypes.objectOf(PropTypes.any),
  /**
   * Elements to show inside of Section.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Font size of title.
   */
  titleFontSize: PropTypes.string,
  /**
   * Font size of sub title.
   */
  subTitleFontSize: PropTypes.string
};
Section.defaultProps = {
  title: '',
  subTitle: '',
  className: '',
  style: null,
  // eslint-disable-next-line react/default-props-match-prop-types
  padding: '5',
  children: null,
  titleFontSize: '3',
  subTitleFontSize: '1'
};

export default withStyles(Section);
