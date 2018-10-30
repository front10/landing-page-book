import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyHero from 'react-lazy-hero';
import Particles from 'react-particles-js';
import Container from '../Container/Container';
import Button from '../Button/Button';
import Header from '../Header/Header';
import Image from '../Image/Image';
import Input from '../Input/Input';
import Link from '../Link/Link';
import Icon from '../Icon/Icon';
import { crazyStars } from './particlesSugarMapping';

class Hero extends Component {
  static onButtonClick(button) {
    if (button.onClick && typeof button.onClick === 'function') button.onClick({ button });
  }

  static getCustomCssFilterForImg(backgroundCssFilter) {
    return `
    .Hero [src] {
      filter: ${backgroundCssFilter};
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
  render() {
    const {
      backgroundImageSrc,
      backgroundIsFixed,
      backgroundParallaxOffset,
      backgroundCssFilter,
      header,
      subHeader,
      minHeight,
      subHeaderPosition,
      particles,
      particlesParams,
      particlesSugar,
      children,
      style,
      align,
      headerTextAlign,
      subHeaderTextAlign
    } = this.props;

    const customCssFilter = Hero.getCustomCssFilterForImg(backgroundCssFilter);
    const particlesPresetParams = Hero.getParticlesParams(
      particles,
      particlesSugar,
      particlesParams
    );

    return (
      <div className="Hero text-center">
        <LazyHero
          isFixed={backgroundIsFixed}
          imageSrc={backgroundImageSrc}
          opacity={0}
          parallaxOffset={backgroundParallaxOffset}
          minHeight={minHeight}
          style={style}
        >
          {particles && (
            <div className="Hero__Particles">
              <Particles params={particlesPresetParams} />
            </div>
          )}
          <Container className="Hero__Container">
            {!children && (
              <React.Fragment>
                <div className="Hero_Content_Wrapper">
                  <Header className="Hero__Header" textAlign={headerTextAlign ? headerTextAlign : align}>
                    Hey Im the Hero Header.
                  </Header>                
                  <Header className="Hero__SubHeader" type="h2" textAlign={subHeaderTextAlign ? subHeaderTextAlign : align}>
                    Hey Im the Hero__SubHeader.
                  </Header>
                  <p className="Hero_Description">Hero_Description: Lorem ipsum dolore asimet</p>
                  {/* This is a Component of type: CallToAction*/}
                  <Button className="Hero_CallToAction" color="primary"> Get Started </Button>
                  {/* This is a Component of type: CallToAction*/}
                  <Button className="Hero_SecondaryCallToAction" color="secondary">Look</Button>
                </div>
                <div className="Hero_Visual_Wrapper">
                  {/* This is a Component  of type: Media*/}
                  <Image alt="This is an image example" src="images/backers/woman.svg" tooltip="This is a woman" width="200"/>
                </div>
                <div className="Hero_Form">
                  {/* This is a Component of type: EmailSignUpForm */}
                  <Input name="myInput" placeholder="Enter a value"/>
                  <Button className="Hero_SecondaryCallToAction" color="secondary">Look</Button>
                  <p className="Hero_Form_Disclaimer">Hero_Description: Lorem ipsum dolore asimet</p>
                </div>
                <div className="Hero_EngageDown_Wrapper">
                  {/* This is a Component of type: EngageDown*/}
                  <Link className="Hero_EngageDown" href="#">Go Down</Link>
                  <Icon icon="fa fa-arrow-down"/>
                </div>
              </React.Fragment>
            )}
            {children}
          </Container>
          {backgroundCssFilter && <style>{customCssFilter}</style>}
        </LazyHero>
      </div>
    );
  }



  // renderOld() {
  //   const {
  //     image,
  //     parallaxOffset,
  //     isFixed,
  //     isCentered,
  //     overlayColor,
  //     opacity,
  //     header,
  //     subHeader,
  //     minHeight,
  //     subHeaderPosition,
  //     particles,
  //     particlesParams,
  //     particlesSugar,
  //     backgroundColor,
  //     buttons,
  //     children,
  //     style,
  //     imgFilter
  //   } = this.props;

  //   const customCssFilter = Hero.getCustomCssFilterForImg(this.props);
  //   const particlesSugarParams = Hero.getParticlesParams(
  //     particles,
  //     particlesSugar,
  //     particlesParams
  //   );

  //   // const TemplateComponent = Hero.getTemplate(template);

  //   return (
  //     <div className="Hero" style={{ backgroundColor }}>
  //       <LazyHero
  //         isFixed={isFixed}
  //         isCentered={isCentered}
  //         imageSrc={image}
  //         opacity={opacity}
  //         color={overlayColor}
  //         parallaxOffset={parallaxOffset}
  //         minHeight={minHeight}
  //         style={style}
  //       >
  //         {particles && (
  //           <div className="Hero__Particles">
  //             <Particles params={particlesSugarParams} />
  //           </div>
  //         )}
  //         <div className="Hero__Container d-flex align-content-center">
  //           {/* {!children && template && (
  //            <TemplateComponent {...this.props.templateProps} {...this.props}/>
  //           )} */}
  //           {!children && (
  //             <Container>
  //               {subHeader &&
  //                 subHeaderPosition === 'top' && (
  //                   <Header textAlign={isCentered && 'center'} className="Hero__SubHeader mb-5">
  //                     {subHeader}
  //                   </Header>
  //                 )}
  //               {header && (
  //                 <Header textAlign={isCentered && 'center'} className="Hero__Header mb-5">
  //                   {header}
  //                 </Header>
  //               )}
  //               {subHeader &&
  //                 subHeaderPosition !== 'top' && (
  //                   <Header
  //                     textAlign={isCentered && 'center'}
  //                     type="h2"
  //                     className="Hero__SubHeader mb-5"
  //                   >
  //                     {subHeader}
  //                   </Header>
  //                 )}
  //               {buttons.map(button => (
  //                 <Button
  //                   className="btn-xl Hero__Button"
  //                   key={button.text}
  //                   onClick={() => Hero.onButtonClick(button)}
  //                 >
  //                   {button.text}
  //                 </Button>
  //               ))}
  //             </Container>
  //           )}
  //           {children}
  //         </div>
  //         {imgFilter && <style>{customCssFilter}</style>}
  //       </LazyHero>
  //     </div>
  //   );
  // }
}

Hero.propTypes = {
  backgroundImageSrc: PropTypes.string,
  backgroundCssFilter: PropTypes.string,
  backgroundIsFixed: PropTypes.bool,
  backgroundColor: PropTypes.string,

  header: PropTypes.string,
  subHeader: PropTypes.string,
  description: PropTypes.string,

  subHeaderPosition: PropTypes.string,
  minHeight: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.string,

  particles: PropTypes.bool,
  particlesParams: PropTypes.objectOf(PropTypes.any),
  particlesSugar: PropTypes.string
};
Hero.defaultProps = {
  backgroundImageSrc: null,
  backgroundCssFilter: null,
  backgroundIsFixed: 1,
  backgroundColor: null,    
  particles: true,
  header: '',
  subHeader: '',
  subHeaderPosition: 'bottom',
  minHeight: '100vh',
  particlesParams: null,
  children: null,
  style: null,
  particlesSugar: null,

  align: 'center',
  headerTextAlign: null,
  subHeaderTextAlign: null
};

// const otherProps = {
//   background: {
    //    imageSrc: 
    //    cssFilter: 
    //    isFixed: 
    //    color: ''
    //  }
//   contentContainer: "", 
//   header: "",
//   subHeader: "",
//   description: "",
//   visualContainer: "",
//   visual: {
//     alt: '',
//     src: '',
//     type: ''
//   },
//   callToAction: {
//     link: ""
//     onClick: "",
//     text: "",
//     target: ""
//   },
//   secondaryCallToAction: {
//     link: "",
//     onClick: "", 
//     text: "",
//   },
//   form: {

//   }

// } 

export default Hero;
