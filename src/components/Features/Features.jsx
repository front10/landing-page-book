import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Link from '../Link';
import Button from '../Button';

class Features extends React.Component {
  render() {
    const {
      showImage,
      showTitle,
      showSubtitle,
      showSummary,
      features,
      imageCircle,
      imageBorder,
      contentAlign,
      showFooter,
      shadow,
      imageShadow,
      outlineButton,
      buttonColor
    } = this.props;

    const featuresWithId = features.map(feature => {
      const featureWithId = { ...feature };
      if (!featureWithId.id) {
        featureWithId.id = Math.floor(Math.random() * 10000 + 1);
      }
      return featureWithId;
    });

    return (
      <div className={`Features d-flex flex-wrap Features--${contentAlign}`}>
        {featuresWithId.map(feature => (
          <div className={`col-12 col-sm-6 col-lg-3 text-${contentAlign} mb-4`} key={feature.id}>
            <Card
              showBorder={false}
              imageCircle={imageCircle}
              subTitle={showSubtitle ? feature.subtitle : ''}
              title={showTitle ? feature.title : ''}
              summary={showSummary ? feature.summary : ''}
              contentAlign={contentAlign}
              imageBorder={imageBorder}
              image={showImage ? feature.image : ''}
              shadow={shadow}
              imageShadow={imageShadow}
            >
              {showFooter &&
                feature.link && (
                  <Button outline={outlineButton} color={buttonColor}>
                    <Link href={feature.link}>See more</Link>
                  </Button>
                )}
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

Features.propTypes = {
  shadow: PropTypes.bool,
  showImage: PropTypes.bool,
  showTitle: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showSummary: PropTypes.bool,
  imageCircle: PropTypes.bool,
  imageBorder: PropTypes.bool,
  imageShadow: PropTypes.bool,
  showFooter: PropTypes.bool,
  outlineButton: PropTypes.bool,
  buttonColor: PropTypes.string,
  contentAlign: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      image: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      summary: PropTypes.string,
      link: PropTypes.string,
      linktext: PropTypes.string
    })
  )
};

Features.defaultProps = {
  shadow: false,
  showImage: true,
  showTitle: true,
  showSubtitle: true,
  showSummary: true,
  imageCircle: true,
  imageBorder: false,
  imageShadow: false,
  showFooter: true,
  outlineButton: true,
  buttonColor: 'default',
  contentAlign: 'center',
  features: []
};

export default Features;
