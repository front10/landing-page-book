import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

class Features extends React.Component {
  render() {
    const {
      showImage,
      showTitle,
      showSubtitle,
      showSummary,
      showBorder,
      features,
      imageCircle,
      imageBorder,
      contentAlign
    } = this.props;
    return (
      <div className="features d-flex flex-wrap">
        {features.map(feature => (
          <div className={`col-md-3 text-${contentAlign} mb-4`} key={feature.link}>
            <Card
              imageCircle={imageCircle}
              subTitle={showSubtitle ? feature.subtitle : ''}
              title={showTitle ? feature.title : ''}
              summary={showSummary ? feature.summary : ''}
              showBorder={showBorder}
              contentAlign={contentAlign}
              imageBorder={imageBorder}
              image={showImage ? feature.image : ''}
            >
              <a href={feature.link}>{feature.linktext}</a>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

Features.propTypes = {
  showBorder: PropTypes.bool,
  showImage: PropTypes.bool,
  showTitle: PropTypes.bool,
  showSubtitle: PropTypes.bool,
  showSummary: PropTypes.bool,
  imageCircle: PropTypes.bool,
  imageBorder: PropTypes.bool,
  contentAlign: PropTypes.string,
  features: PropTypes.arrayOf(
    PropTypes.shape({
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
  showBorder: true,
  showImage: true,
  showTitle: true,
  showSubtitle: true,
  showSummary: true,
  imageCircle: true,
  imageBorder: false,
  contentAlign: 'center',
  features: []
};

export default Features;
