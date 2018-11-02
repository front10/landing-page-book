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
      buttonColor,
      columnClassName
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
          <div className={`${columnClassName} text-${contentAlign} mb-4`} key={feature.id}>
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
  /**
   * Establishes shadow for each card. Default `false`
   */
  shadow: PropTypes.bool,
  /**
   * Show or hide image. Default `true`
   */
  showImage: PropTypes.bool,
  /**
   * Show or hide title. Default `true`
   */
  showTitle: PropTypes.bool,
  /**
   * Show or hide subtitle. Default `true`
   */
  showSubtitle: PropTypes.bool,
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
   * Establishes image with shadow. Default `false`
   */
  imageShadow: PropTypes.bool,
  /**
   * Show or hide Card footer. Default `true`
   */
  showFooter: PropTypes.bool,
  /**
   * Establishes if `See more` button is outline. Default `true`
   */
  outlineButton: PropTypes.bool,
  /**
   * Button color, can by any of bootstrap colors. Default `default`
   */
  buttonColor: PropTypes.string,
  /**
   * Align of a component content. Default `"center"`, can be `left` and `right` too
   */
  contentAlign: PropTypes.string,
  /**
   * CSS class name for column, Default `col-12 col-sm- col-md`
   */
  columnClassName: PropTypes.string,
  /**
   * Array of features to show. Default `[]`
   */
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
  columnClassName: 'col-12 col-sm- col-md',
  features: []
};

export default Features;
