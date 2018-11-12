import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import extractProps from '../../helpers/ExtractProps';
import withStyles from '../../helpers/WithStyles';
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
            {...this.props}
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
   * Define if card have border
   */
  border: PropTypes.bool,
  /**
   * Define if image is circular
   */
  imageCircle: PropTypes.bool,
  /**
   * Define if image is with border
   */
  imageBorder: PropTypes.bool,
  /**
   * Define if image   with shadow
   */
  imageShadow: PropTypes.bool,
  /**
   * Define if card show with shadow
   */
  shadow: PropTypes.bool,
  /**
   * Image url
   */
  image: PropTypes.string,
  /**
   * Card title
   */
  title: PropTypes.string,
  /**
   * Card subtitle
   */
  subTitle: PropTypes.string,
  /**
   * Card summary
   */
  summary: PropTypes.string,
  /**
   * Array of elements to show inside a card
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   *  Component class name
   */
  className: PropTypes.string,
  /**
   * Css style applied to the component
   */
  style: PropTypes.objectOf(PropTypes.any)
};
Card.defaultProps = {
  border: true,
  imageCircle: false,
  imageBorder: false,
  imageShadow: false,
  shadow: false,
  image: '',
  title: '',
  subTitle: '',
  summary: '',
  children: null,
  className: null,
  style: null
};

export default withStyles(Card);
