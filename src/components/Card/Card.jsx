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
            className="p-3"
          />
        )}
        {(title || subTitle || summary) && (
          <div className={`card-body text-${contentAlign}`}>
            {title && <div className="Card__Title mb-2">{title}</div>}
            {subTitle && <div className="Card__Subtitle mb-3">{subTitle}</div>}
            {summary && (
              <p
                className={`Card__Summary m-0 ${
                  summaryJustified ? 'Card__Summary--justified' : ''
                }`}
              >
                {summary}
              </p>
            )}
          </div>
        )}
        {children && (
          <div
            className={`card-footer bg-transparent border-0 ${
              title || subTitle || summary ? 'pt-0' : ''
            } text-${contentAlign}`}
          >
            <React.Fragment>{children}</React.Fragment>
          </div>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  /**
   * Show or hide border. Default `true`
   */
  showBorder: PropTypes.bool,
  /**
   * Define if image is circular. Default `true`
   */
  imageCircle: PropTypes.bool,
  /**
   * Define if image is with border. Default `false`
   */
  imageBorder: PropTypes.bool,
  /**
   * Define if image show with shadow. Default `false`
   */
  imageShadow: PropTypes.bool,
  /**
   * Define if card summary is justified. Default `false`
   */
  summaryJustified: PropTypes.bool,
  /**
   * Define if card show with shadow. Default `false`
   */
  shadow: PropTypes.bool,
  /**
   * Image url. Default `""`
   */
  image: PropTypes.string,
  /**
   * Card title. Default `""`
   */
  title: PropTypes.string,
  /**
   * Card subtitle. Default `""`
   */
  subTitle: PropTypes.string,
  /**
   * Card summary. Default `""`
   */
  summary: PropTypes.string,
  /**
   * Array of elements to show inside a card, For example ['Buttons', 'Links', 'tables', etc]
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Content align in the card. Default `"center"`, can be `left`, `center` and `right`
   */
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
