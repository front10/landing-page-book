import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import extractProps from '../../helpers/ExtractProps';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardFooter from './CardFooter';
import Paragraph from '../Paragraph';

class Card extends React.Component {
  render() {
    const {
      image,
      imageCircle,
      imageBorder,
      title,
      subTitle,
      summary,
      children,
      imageShadow,
      shadow,
      className
    } = this.props;
    return (
      <div className={`card h-100 Card ${className} ${shadow ? 'Card--shadow' : ''}`}>
        {image && (
          <Image
            border={imageBorder}
            rounded={imageCircle}
            src={image}
            shadow={imageShadow}
            alt="Generic placeholder"
          />
        )}
        {(title || subTitle || summary) && (
          <div className="card-body">
            {title && (
              <CardTitle marginBottom="2" content={title} {...extractProps('title', this.props)} />
            )}
            {subTitle && (
              <CardSubtitle
                marginBottom="3"
                content={subTitle}
                {...extractProps('subTitle', this.props)}
              />
            )}
            {summary && (
              <Paragraph
                className="Card__Summary"
                text={summary}
                {...extractProps('summary', this.props)}
              />
            )}
          </div>
        )}
        {children && (
          <CardFooter bgColor="transparent" borderNone>
            <React.Fragment>{children}</React.Fragment>
          </CardFooter>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  /**
   * Define if image is circular. Default `true`
   */
  imageCircle: PropTypes.bool,
  /**
   * Define if image is with border. Default `false`
   */
  imageBorder: PropTypes.bool,
  /**
   * Define if image   with shadow. Default `false`
   */
  imageShadow: PropTypes.bool,
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
  className: PropTypes.string
};
Card.defaultProps = {
  imageCircle: false,
  imageBorder: false,
  imageShadow: false,
  shadow: false,
  image: '',
  title: '',
  subTitle: '',
  summary: '',
  children: null,
  className: null
};

export default Card;
