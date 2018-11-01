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
    console.log(customCssFilter);
    const particlesSugarParams = Hero.getParticlesParams(
      particles,
      particlesSugar,
      particlesParams
    );

    // const TemplateComponent = Hero.getTemplate(template);

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
  isFixed: PropTypes.bool,
  isCentered: PropTypes.bool,
  particles: PropTypes.bool,
  opacity: PropTypes.number,
  parallaxOffset: PropTypes.number,
  image: PropTypes.string,
  overlayColor: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string,
  subHeaderPosition: PropTypes.string,
  minHeight: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  particlesParams: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.string,
  imgFilter: PropTypes.string,
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
