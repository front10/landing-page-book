import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';

class Card extends React.Component {
  render() {
    const {
      image,
      imageCircle,
      imageBorder,
      title,
      subTitle,
      summary,
      showBorder,
      contentAlign,
      children,
      imageShadow,
      summaryJustified,
      shadow
    } = this.props;
    return (
      <div
        className={`card h-100 Card ${!showBorder ? 'border-0' : ''} ${
          shadow ? 'Card--shadow' : ''
        }`}
      >
        {image && (
          <Image
            border={imageBorder}
            rounded={imageCircle}
            src={image}
            shadow={imageShadow}
            alt="Generic placeholder"
          />
        )}
        <div className={`card-body text-${contentAlign}`}>
          {title && <div className="Card__Title mb-2">{title}</div>}
          {subTitle && <div className="Card__Subtitle mb-3">{subTitle}</div>}
          {summary && (
            <p
              className={`Card__Summary m-0 ${summaryJustified ? 'Card__Summary--justified' : ''}`}
            >
              {summary}
            </p>
          )}
        </div>
        {children && (
          <div className={`card-footer bg-transparent border-0 text-${contentAlign}`}>
            <React.Fragment>{children}</React.Fragment>
          </div>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  showBorder: PropTypes.bool,
  imageCircle: PropTypes.bool,
  imageBorder: PropTypes.bool,
  imageShadow: PropTypes.bool,
  summaryJustified: PropTypes.bool,
  shadow: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  summary: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  contentAlign: PropTypes.string
};
Card.defaultProps = {
  showBorder: true,
  imageCircle: true,
  imageBorder: false,
  imageShadow: false,
  shadow: false,
  summaryJustified: false,
  image: '',
  title: '',
  subTitle: '',
  summary: '',
  children: null,
  contentAlign: 'center'
};

export default Card;
