import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import Particles from 'react-particles-js';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Header from '../Header/Header';

class Hero extends Component {
  static onButtonClick(button) {
    if (button.onClick && typeof button.onClick === 'function') button.onClick({ button });
  }

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
      backgroundColor,
      buttons,
      children
    } = this.props;
    return (
      <div className="Hero" style={{ backgroundColor }}>
        <LazyHero
          isFixed={isFixed}
          isCentered={isCentered}
          imageSrc={image}
          opacity={opacity}
          color={overlayColor}
          parallaxOffset={parallaxOffset}
          minHeight={minHeight}
        >
          {particles && (
            <div className="Hero__Particles">
              <Particles params={particlesParams} />
            </div>
          )}
          <div className="Hero__Container d-flex align-content-center">
            {!children && (
              <Container>
                {subHeader &&
                  subHeaderPosition === 'top' && (
                    <Header className="Hero__SubHeader mb-5">{subHeader}</Header>
                  )}
                {header && <Header className="Hero__Header mb-5">{header}</Header>}
                {subHeader &&
                  subHeaderPosition !== 'top' && (
                    <Header className="Hero__SubHeader mb-5">{subHeader}</Header>
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Hero.defaultProps = {
  isFixed: true,
  isCentered: true,
  particles: true,
  opacity: 0,
  parallaxOffset: 0,
  image: 'https://front10.com/img/header-bg.jpg',
  overlayColor: '#fff',
  header: '',
  subHeader: '',
  subHeaderPosition: 'bottom',
  minHeight: '100vh',
  backgroundColor: 'transparent',
  buttons: [],
  particlesParams: {},
  children: null
};

export default Hero;
