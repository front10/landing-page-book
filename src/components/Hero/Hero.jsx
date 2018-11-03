import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import Particles from 'react-particles-js';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Header from '../Header/Header';
// import StarMeUpTemplate from './templates/StarMeUpTemplate';
import { crazyStars } from './particlesSugarMapping';

class Hero extends Component {
  static onButtonClick(button) {
    if (button.onClick && typeof button.onClick === 'function') button.onClick({ button });
  }

  static getCustomCssFilterForImg(props, state) {
    const { imgFilter } = props;
    const { randomClass } = state;
    return `
    .Hero.${randomClass} [src] {
      filter: ${imgFilter};
    }`;
  }

  static getParticlesParams(particles, particlesSugar, particlesParams) {
    if (particlesParams) {
      return particlesParams;
    }
    if (!particlesParams && particlesSugar && particlesSugar === 'crazyStars') {
      return crazyStars;
    }
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {
      randomClass: `Hero_${new Date().getTime()}_${Math.random()
        .toString()
        .replace('.', '')}`
    };
  }
  // static getTemplate(template) {
  //   if(template && template === 'starMeUp'){
  //     return StarMeUpTemplate;
  //   }
  //   return {};
  // }

  render() {
    const {
      image,
      parallaxOffset,
      isFixed,
      isCentered,
      overlayColor,
      opacity,
      header,
      subHeader,
      minHeight,
      subHeaderPosition,
      particles,
      particlesParams,
      particlesSugar,
      backgroundColor,
      buttons,
      children,
      style,
      imgFilter
    } = this.props;

    const { randomClass } = this.state;

    const customCssFilter = Hero.getCustomCssFilterForImg(this.props, this.state);
    const particlesSugarParams = Hero.getParticlesParams(
      particles,
      particlesSugar,
      particlesParams
    );

    return (
      <div className={`Hero ${randomClass}`} style={{ backgroundColor }}>
        <LazyHero
          isFixed={isFixed}
          isCentered={isCentered}
          imageSrc={image}
          opacity={opacity}
          color={overlayColor}
          parallaxOffset={parallaxOffset}
          minHeight={minHeight}
          style={style}
        >
          {particles && (
            <div className="Hero__Particles">
              <Particles params={particlesSugarParams} />
            </div>
          )}
          <div className="Hero__Container d-flex align-content-center">
            {/* {!children && template && (
             <TemplateComponent {...this.props.templateProps} {...this.props}/>
            )} */}
            {!children && (
              <Container>
                {subHeader &&
                  subHeaderPosition === 'top' && (
                    <Header textAlign={isCentered && 'center'} className="Hero__SubHeader mb-5">
                      {subHeader}
                    </Header>
                  )}
                {header && (
                  <Header textAlign={isCentered && 'center'} className="Hero__Header mb-5">
                    {header}
                  </Header>
                )}
                {subHeader &&
                  subHeaderPosition !== 'top' && (
                    <Header
                      textAlign={isCentered && 'center'}
                      type="h2"
                      className="Hero__SubHeader mb-5"
                    >
                      {subHeader}
                    </Header>
                  )}
                {buttons.map(button => (
                  <Button
                    className="btn-xl Hero__Button"
                    key={button.text}
                    onClick={() => Hero.onButtonClick(button)}
                  >
                    {button.text}
                  </Button>
                ))}
              </Container>
            )}
            {children}
          </div>
          {imgFilter && <style>{customCssFilter}</style>}
        </LazyHero>
      </div>
    );
  }
}

Hero.propTypes = {
  /**
   * Define if background image is fixed. Default `true`
   */
  isFixed: PropTypes.bool,
  /**
   *  Define if content is centered. Default `true`
   */
  isCentered: PropTypes.bool,
  /**
   * Define if component show particles animations. Default `true`
   */
  particles: PropTypes.bool,
  /**
   * Opacity level. Default `0`
   */
  opacity: PropTypes.number,
  /**
   * Offset of background image. Default `0`
   */
  parallaxOffset: PropTypes.number,
  /**
   * Url of background image. Default `""`
   */
  image: PropTypes.string,
  /**
   * Overlay color of the component . Default `#fff`
   */
  overlayColor: PropTypes.string,
  /**
   *  Header of the hero . Default `""`
   */
  header: PropTypes.string,
  /**
   * Sub header of the hero . Default `""`
   */
  subHeader: PropTypes.string,
  /**
   * Position of hero sub header. Default `"bottom"`, can be `"top"`
   */
  subHeaderPosition: PropTypes.string,
  /**
   * Min height of hero. Default `"100vh"`
   */
  minHeight: PropTypes.string,
  /**
   * Background color of the hero. Default `"transparent"`
   */
  backgroundColor: PropTypes.string,
  /**
   * Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}`
   */
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  /**
   * Config params for particles animation.
   */
  particlesParams: PropTypes.objectOf(PropTypes.any),
  /**
   *  Elements to show inside of Hero.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Customs styles to tramsform your Hero
   */
  style: PropTypes.string,
  /**
   * The filter property defines visual effects (like blur and saturation) to an element (often <img>).
   */
  imgFilter: PropTypes.string,
  /**
   * Preconfigured params for particles, you can find this on particlesSugarMapping.js file.
   */
  particlesSugar: PropTypes.string
};
Hero.defaultProps = {
  isFixed: true,
  isCentered: true,
  particles: true,
  opacity: 0,
  parallaxOffset: 0,
  image: '',
  overlayColor: '#fff',
  header: '',
  subHeader: '',
  subHeaderPosition: 'bottom',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  buttons: [],
  particlesParams: null,
  children: null,
  style: null,
  imgFilter: null,
  particlesSugar: null
};

export default Hero;
