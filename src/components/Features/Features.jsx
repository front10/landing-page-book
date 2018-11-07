import React from 'react';
import PropTypes from 'prop-types';
import extractProps from '../../helpers/ExtractProps';
import Card from '../Card';
import Button from '../Button';

class Features extends React.Component {
  static routeChange(path) {
    if (window !== 'undefined' && typeof window.location !== 'undefined')
      window.location.assign(path);
  }

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
      buttonOutline,
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
              imageCircle={imageCircle}
              subTitle={showSubtitle ? feature.subtitle : ''}
              title={showTitle ? feature.title : ''}
              summary={showSummary ? feature.summary : ''}
              contentAlign={contentAlign}
              imageBorder={imageBorder}
              image={showImage ? feature.image : ''}
              shadow={shadow}
              imageShadow={imageShadow}
              {...extractProps('feature', this.props)}
            >
              {showFooter &&
                feature.link && (
                  <Button
                    outline={buttonOutline}
                    color={buttonColor}
                    onClick={() => Features.routeChange(feature.link)}
                    {...extractProps('button', this.props)}
                  >
                    See more
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
  buttonOutline: PropTypes.bool,
  /**
   * Establishes color button. Default `primary`, can be `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark` and `link`.
   */
  buttonColor: PropTypes.string,
  /**
   * Establishes if feature card has border. Default `false`
   */
  featureBorder: PropTypes.bool,
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
  imageCircle: false,
  imageBorder: false,
  imageShadow: false,
  showFooter: true,
  buttonOutline: true,
  buttonColor: 'primary',
  featureBorder: false,
  contentAlign: 'center',
  columnClassName: 'col-12 col-sm- col-md',
  features: []
};

export default Features;
