import React, { Component } from 'react';
import PropTypes from 'prop-types';
import extractProps from '../../helpers/ExtractProps';
import Social from '../Social';
import Card from '../Card';

class Team extends Component {
  render() {
    const {
      showImage,
      showName,
      showJob,
      showSummary,
      socialGray,
      members,
      imageCircle,
      contentAlign,
      imageBorder,
      shadow,
      topColor,
      imageShadow,
      columnClassName
    } = this.props;
    return (
      <div className="Team row">
        {members.map(member => (
          <div
            className={`${columnClassName} text-${contentAlign} mb-4 Team--${contentAlign}`}
            key={`${member.name}${member.job}`}
          >
            <div className="Team__Color">
              <div className="Team__Color__Primary" style={{ background: topColor }} />
            </div>
            <Card
              imageCircle={imageCircle}
              subTitle={showJob ? member.job : ''}
              title={showName ? member.name : ''}
              summary={showSummary ? member.summary : ''}
              contentAlign={contentAlign}
              imageBorder={imageBorder}
              image={showImage ? member.image : ''}
              shadow={shadow}
              imageShadow={imageShadow}
              {...extractProps('member', this.props)}
            >
              {member.profile.map(item => (
                <Social
                  key={item.social}
                  url={item.url}
                  type={item.social}
                  gray={socialGray}
                  {...extractProps('social', this.props)}
                />
              ))}
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

Team.propTypes = {
  /**
   * Show or hide image. Default `true`
   */
  showImage: PropTypes.bool,
  /**
   * Show or hide name. Default `true`
   */
  showName: PropTypes.bool,
  /**
   * Show or hide job. Default `true`
   */
  showJob: PropTypes.bool,
  /**
   * Show or hide summary. Default `true`
   */
  showSummary: PropTypes.bool,
  /**
   * Establishes if image is circled. Default `true`
   */
  imageCircle: PropTypes.bool,
  /**
   * Establishes if image is with border. Default `false`
   */
  imageBorder: PropTypes.bool,
  /**
   * Establishes if social icon is gray scale. Default `false`
   */
  socialGray: PropTypes.bool,
  /**
   * Establishes a shadow in each card. Default `false`
   */
  shadow: PropTypes.bool,
  /**
   * Establishes a shadow in user picture in each card. Default `false`
   */
  imageShadow: PropTypes.bool,
  /**
   * Color of each card. Default `transparent`
   */
  topColor: PropTypes.string,
  /**
   * Align of a component content. Default `"center"`, can be `left` and `right` too
   */
  contentAlign: PropTypes.string,
  /**
   * Class name of apply to the colums. Default `"col-12 col-sm- col-md"`
   */
  columnClassName: PropTypes.string,
  /**
   * Array of members to show. Default `[]`, see example section.
   */
  members: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      job: PropTypes.string,
      summary: PropTypes.string,
      profile: PropTypes.arrayOf(
        PropTypes.shape({
          social: PropTypes.string,
          url: PropTypes.string
        })
      )
    })
  )
};
Team.defaultProps = {
  showImage: true,
  showName: true,
  showJob: true,
  showSummary: true,
  imageCircle: true,
  imageBorder: false,
  socialGray: false,
  shadow: false,
  imageShadow: false,
  topColor: 'transparent',
  contentAlign: 'center',
  columnClassName: 'col-12 col-sm- col-md',
  members: []
};

export default Team;
