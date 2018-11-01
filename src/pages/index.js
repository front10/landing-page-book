import React from 'react';
import Slider from 'react-slick';
import Main from '../gatsby-layouts/main';
import Container from '../components/Container';

import sliders from './data/slider.json';
import team from './data/team.json';
import features from './data/features.json';
import particles from './data/particles.json';
import build from './data/build.json';
import backers from './data/backers.json';
import carousel from './data/carousel.json';
import { navBarCode, importThemes } from './data/code';
// core
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// theme for code
import 'codemirror/theme/oceanic-next.css';

import AnimatedHero from './data/hero';
import {
  Hero,
  Image,
  Header,
  Link,
  GithubButton,
  Features,
  Section,
  Gif,
  Row,
  Column,
  Code,
  Team,
  BuiltWith,
  Backers
} from '../components';

const IndexPage = () => (
  <React.Fragment>
    <Main>
      <Hero opacity={1} overlayColor="#212529" particlesParams={particles}>
        <Container>
          <Image
            src="/images/logo/front10.png"
            rounded
            width="160"
            alt="Front10 logo"
            className="main-logo"
          />
          <Header textAlign="center" className="main-header">
            Landing Page Book
          </Header>
          <Header textAlign="center" className="main-subheader" type="h2">
            React components to build!
          </Header>
          <div className="mt-5">
            <Link className="btn btn-primary btn-started" href="/components">
              Explore
            </Link>
            <GithubButton
              btnType="star"
              btnText="Stars"
              username="front10"
              repository="landing-page-book"
            />
          </div>
          <AnimatedHero />
        </Container>
      </Hero>
      <Section gray>
        <Container className="text-center">
          <Gif autoplay image="/images/demo/code.gif" />
        </Container>
      </Section>
      <Section
        alignHeader="center"
        subTitle="Landing page book is a scalable choice for developers"
        title="FEATURES"
      >
        <Container>
          <Features features={features} imageCircle={false} showBorder={false} showSubtitle />
        </Container>
        <Container className="text-center">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
        </Container>
      </Section>
      <Section alignHeader="center" title="AT A GLANCE" subTitle="Some of the components" gray>
        <Container className="text-center">
          <Slider {...carousel}>
            {sliders.map(item => (
              <div key={item.name}>
                <Link href={item.link} target="_blank">
                  <Image src={item.image} alt="Navigation" width="50" />
                  <Header className="mt-3 component-link text-center" type="h6">
                    {item.name}
                  </Header>
                </Link>
              </div>
            ))}
          </Slider>
        </Container>
        <Container className="text-center mt-5">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
        </Container>
      </Section>
      <Section alignHeader="center" subTitle="Don't try this at home ;)" title="AN EXAMPLE">
        <Container>
          <Row>
            <Column className="col col-md-12">
              <div className="text-center">
                {/* eslint-disable react/no-unescaped-entities */}
                <p>Let's import the HERO component</p>
                {/* eslint-enable react/no-unescaped-entities */}
              </div>
              <Code
                readOnly
                theme="oceanic-next"
                languageCode="jsx"
                code={importThemes}
                showheader={false}
                showfooter={false}
                lineNumbers
              />
            </Column>
          </Row>
          <Row>
            <Column className="col col-md-6 mt-5 code-secondary">
              <div className="text-center">
                <p>An example used to create a beautiful Hero component</p>
              </div>
              <Code
                readOnly
                theme="oceanic-next"
                languageCode="jsx"
                code={navBarCode}
                showheader={false}
                showfooter={false}
                lineNumbers
              />
            </Column>
            <Column className="col col-md-6 mt-5">
              <div className="text-center">
                {/* eslint-disable react/no-unescaped-entities */}
                <p>It's that easy to have a beautiful Hero</p>
                {/* eslint-enable react/no-unescaped-entities */}
              </div>
              <div className="mt-3">
                <Hero
                  backgroundColor="#212529"
                  minHeight="350px"
                  image="/images/hero/map-image.png"
                  particlesParams={{
                    particles: {
                      shape: {
                        type: 'star',
                        stroke: {
                          width: 1,
                          color: '#fff'
                        }
                      },
                      line_linked: {
                        enable: false
                      }
                    }
                  }}
                >
                  <Container>
                    <Header className="main-header" type="h2">
                      Front10
                    </Header>
                    <Header className="main-subheader" type="h3">
                      Rewriting the world with React
                    </Header>
                  </Container>
                </Hero>
              </div>
            </Column>
          </Row>
        </Container>
        <Container className="text-center mt-5">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
        </Container>
      </Section>
      <Section
        alignHeader="center"
        title="THEMING"
        subTitle=" Change the appearance of the components using standard CSS variables"
        gray
      >
        <Container>
          <Row>
            <Column>
              <Gif autoplay image="/images/demo/themes.gif" />
            </Column>
          </Row>
        </Container>
        <Container className="text-center mt-5">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
        </Container>
      </Section>
      <Section alignHeader="center" subTitle="Used tecnologies and frameworks" title="BUILD WITH">
        <Container className="text-center BuildWith">
          <BuiltWith gray companies={build} />
        </Container>
      </Section>
      <Section alignHeader="center" subTitle="These are our members" title="TEAM" gray>
        <Container>
          <Team showBorder={false} members={team} socials={['linkedin', 'twitter']} />
        </Container>
        <Container className="text-center">
          <Link
            className="btn btn-primary btn-started"
            href="https://front10.com/landing-page-book"
            target="_blank"
          >
            Explore
          </Link>
        </Container>
      </Section>
      <Section
        alignHeader="center"
        subTitle="We are very happy to help ;)"
        title="FEEDBACK AND SUPPORT"
      >
        <Container className="text-center BuildWith">
          <Image
            src="/images/support/maintenance.svg"
            alt="Maintenance"
            width="100"
            className="ml-3 mr-3"
          />
          <Image
            src="/images/support/happy.svg"
            alt="Maintenance"
            width="100"
            className="ml-3 mr-3"
          />
          <p className="mt-3">
            For feedback, issues or if you want us to include <i>**new components**</i> please{' '}
            <Link href="https://github.com/front10/landing-page-book/issues" target="_blank">
              click here
            </Link>
            .
          </p>
        </Container>
      </Section>
      <Section alignHeader="center" subTitle="Who donates us" title="BACKERS" gray>
        <Container className="text-center">
          <Backers backers={backers} imageBordered={false} />
        </Container>
      </Section>
    </Main>
  </React.Fragment>
);
// eslint-enable react/no-unescaped-entities
export default IndexPage;
