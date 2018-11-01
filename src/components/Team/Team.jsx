import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import Card from '../Card';

class Team extends Component {
  render() {
    const {
      showImage,
      showName,
      showJob,
      showSummary,
      showBorder,
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
              showBorder={showBorder}
              contentAlign={contentAlign}
              imageBorder={imageBorder}
              image={showImage ? member.image : ''}
              shadow={shadow}
              imageShadow={imageShadow}
            >
              {member.profile.map(item => (
                <Social key={item.social} url={item.url} type={item.social} gray={socialGray} />
              ))}
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

Team.propTypes = {
  showBorder: PropTypes.bool,
  showImage: PropTypes.bool,
  showName: PropTypes.bool,
  showJob: PropTypes.bool,
  showSummary: PropTypes.bool,
  imageCircle: PropTypes.bool,
  imageBorder: PropTypes.bool,
  socialGray: PropTypes.bool,
  shadow: PropTypes.bool,
  imageShadow: PropTypes.bool,
  topColor: PropTypes.string,
  contentAlign: PropTypes.string,
  columnClassName: PropTypes.string,
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
  showBorder: true,
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
