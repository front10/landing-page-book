/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Hero, Container, Image, Header, GithubButton, Button, Link } from '../../../components';
import Readme from '../../../components/Hero/README.md';

import particles from '../../mock/components/particles';

const stories = storiesOf('Components/Hero', module);

const buttons = [
  {
    text: 'TELL ME MORE',
    onClick: () => {}
  }
];

stories.add(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero }}>
        <Hero
          opacity={1}
          overlayColor="#373D45"
          header="Landing Page Book"
          subHeader="React components to build!"
          buttons={buttons}
          particlesParams={particles}
        />
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'Via children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="Via children"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Image, Header, Button, GithubButton }}>
        <Hero opacity={1} overlayColor="#373D45" particlesParams={particles}>
          <Container>
            <Image
              src="images/logo/front10.png"
              rounded
              width="160"
              alt="Front10 logo"
              className="main-logo"
            />
            <Header className="text-warning">Landing Page Book</Header>
            <Header type="h5" className="text-warning">
              React components to build!
            </Header>
            <div className="mt-5">
              <Button>Explore</Button>
              <GithubButton
                btnType="star"
                btnText="Stars"
                username="front10"
                repository="landing-page-book"
              />
            </div>
          </Container>
        </Hero>
      </PropsManager>
    </ThemeSelector>
  ))
);

const ctaButtonStyles = {
  color: 'white',
  border: '2px solid white',
  padding: '5px 15px',
  float: 'left'
};

stories.add(
  'With image',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        <Hero
          image="images/hero/alone-architecture-buildings-220444.jpg"
          parallaxOffset={350}
          particles={false}
        >
          <Container>
            <Header type="h6" className="text-white text-left">
              LANDING PAGE BOOK
            </Header>
            <Header className="text-white text-left mt-4 mb-4">
              React UI Kit to easily build landing pages.
            </Header>
            <div className="">
              <Link href="https://front10.com" style={ctaButtonStyles} target="_blank">
                READ MORE
              </Link>
            </div>
          </Container>
        </Hero>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image (blurred)',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image (Blurred)"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        <Hero
          image="images/hero/alone-architecture-buildings-220444.jpg"
          parallaxOffset={350}
          particles={false}
          imgFilter="blur(2px)"
        >
          <Container>
            <Header type="h6" className="text-white text-left">
              LANDING PAGE BOOK
            </Header>
            <Header className="text-white text-left mt-4 mb-4">
              React UI Kit to easily build landing pages.
            </Header>
            <div className="">
              <Link href="https://front10.com" style={ctaButtonStyles} target="_blank">
                READ MORE
              </Link>
            </div>
          </Container>
        </Hero>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.add(
  'With image (gray)',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Hero"
        storyName="With Image (Gray)"
        description="The hero image is often the first visual element a visitor encounters on the site. It presents an overview of the site's most important content."
      />
      <PropsManager scope={{ React, Hero, Container, Header, Link }}>
        <Hero
          image="images/hero/alone-architecture-buildings-220444.jpg"
          parallaxOffset={350}
          particles={false}
          imgFilter="grayscale(90%)"
        >
          <Container>
            <Header type="h6" className="text-white text-left">
              LANDING PAGE BOOK
            </Header>
            <Header className="text-white text-left mt-4 mb-4">
              React UI Kit to easily build landing pages.
            </Header>
            <div className="">
              <Link href="https://front10.com" style={ctaButtonStyles} target="_blank">
                READ MORE
              </Link>
            </div>
          </Container>
        </Hero>
      </PropsManager>
    </ThemeSelector>
  ))
);

// stories.add(
//   'With product',
//   withReadme([Readme], () => (
//     <ThemeSelector>
//       <Hero
//         isFixed={boolean('Fixed', true)}
//         backgroundColor={color('Overlay color', 'rgba(57,55,77,0.9)')}
//         opacity={number('Opacity', 0)}
//         parallaxOffset={number('Parallax offset', 350)}
//         minHeight={text('Min height', '100vh')}
//         particles={false}
//       >
//         <Container className="p-5">
//           <Row>
//             <Column className="col-md-3 d-none d-md-block">
//               <Image className="img-fluid" src="images/hero/front10-iphone.svg" />
//             </Column>
//             <Column className="col-md-9 mt-5">
//               <div className="pt-3">
//                 <Image
//                   src="images/logo/front10.png"
//                   rounded
//                   width="40"
//                   alt="Front10 logo"
//                   className="float-left"
//                 />
//                 <Header type="h5" className="text-warning float-left pl-2 mt-3">
//                   LANDING PAGE BOOK
//                 </Header>
//               </div>
//               <div className="clearfix" />
//               <Header type="h2" className="text-white text-left d-block pt-2">
//                 Use the platform you prefer, Create React App, Gatsby or Next.
//               </Header>
//               <div className="text-left mt-3">
//                 <Link
//                   href="https://front10.com/get-landing-page-book/"
//                   tooltip="Search in NPM"
//                   target="_blank"
//                 >
//                   <span className="Button btn">
//                     Explore library &nbsp;
//                     <Icon icon="fa fa-arrow-right" />
//                   </span>
//                 </Link>
//               </div>
//             </Column>
//           </Row>
//         </Container>
//       </Hero>
//       <div className="mt-4">
//         <Code
//           code={products}
//           languageCode="jsx"
//           readOnly
//           collapsible
//           collapsed
//           showDeleteButton={false}
//         />
//       </div>
//     </ThemeSelector>
//   )),
//   jsxConfig
// );

// stories.add(
//   'Go minimal',
//   withReadme([Readme], () => (
//     <ThemeSelector>
//       <Hero
//         backgroundColor={color('Overlay color', '#FFFFFF')}
//         opacity={number('Opacity', 0)}
//         parallaxOffset={number('Parallax offset', 350)}
//         minHeight={text('Min height', '100vh')}
//         particles={false}
//       >
//         <Container className="p-5">
//           <Row>
//             <Column className="col-12 col-md-7">
//               <Image className="img-fluid" src="images/hero/persons.png" />
//             </Column>
//             <Column className="col-12 col-md-5">
//               <h1
//                 style={{
//                   color: '#392F4C',
//                   fontSize: '3rem',
//                   fontWeight: '600'
//                 }}
//                 className="float-left text-left mt-3"
//               >
//                 Landing Page Book
//               </h1>
//               <div className="clearfix" />
//               <p
//                 style={{ color: '#392F4C', lineHeight: '33px' }}
//                 className="text-black text-left d-block pt-2"
//               >
//                 Landing page book it’s an react components library with more than 40 components and
//                 elements, is based en react 16.2 and was wrote with ES6.
//               </p>
//               <Row>
//                 <Column className="col-12 col-sm-8 mt-5 pl-1 pr-1">
//                   <input
//                     type="email"
//                     placeholder="Email address"
//                     style={{ display: 'block', width: '100%', padding: '1.03rem 1rem' }}
//                   />
//                 </Column>
//                 <Column className="col-12 col-sm-4 mt-5 pl-1 pr-1">
//                   <input
//                     type="button"
//                     className="Button"
//                     style={{ padding: '1.15rem 1rem' }}
//                     tooltip="Send email"
//                     value="GET STARTED"
//                   />
//                 </Column>
//               </Row>
//             </Column>
//           </Row>
//         </Container>
//       </Hero>
//       <div className="mt-4">
//         <Code
//           code={minimal}
//           languageCode="jsx"
//           readOnly
//           collapsible
//           collapsed
//           showDeleteButton={false}
//         />
//       </div>
//     </ThemeSelector>
//   )),
//   jsxConfig
// );
