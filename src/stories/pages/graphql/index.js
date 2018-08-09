import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarNav,
  NavbarLink,
  NavbarCollapse,
  Hero,
  Section,
  Video,
  Team,
  Container,
  BuiltWith,
  Input,
  Icon,
  Button,
  Image,
  Row,
  Column,
  Code
} from '../../../components';

const services = [
  {
    image: 'images/demo/default.svg',
    name: 'Component libraries',
    summary: 'React & AngularJs reusable component libraries creation.'
  },
  {
    image: 'images/demo/default.svg',
    name: 'Project acceleration',
    summary: 'Help you to accelerate and scale your Front-End projects.'
  },
  {
    image: 'images/demo/default.svg',
    name: 'Consulting',
    summary: 'More than 10 years of experience doing Front-End development.'
  }
];

const team = [
  {
    image: 'https://front10.com/img/team/dariel.jpeg',
    name: 'Dariel Vila',
    job: 'Co-Founder'
  },
  {
    image: 'https://front10.com/img/team/albe.jpeg',
    name: 'Alberto Roman',
    job: 'Co-Founder'
  }
];

const frameworks = [
  {
    image: 'images/frameworks/react.png'
  },
  {
    image: 'images/frameworks/angularjs.png'
  },
  {
    image: 'images/frameworks/graphql.png'
  },
  {
    image: 'images/frameworks/storybook.png'
  }
];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('GraphQl', () => (
  <ThemeSelector>
    <div className="GraphQL__page">
      <Navbar expand="md">
        <Container>
          <NavbarCollapse>
            <NavbarNav alignItems="left">
              <NavbarLink href="#">Learn</NavbarLink>
              <NavbarLink href="#">Code</NavbarLink>
              <NavbarLink href="#">Community</NavbarLink>
              <NavbarLink href="#">Blog</NavbarLink>
              <NavbarLink href="#">Spec</NavbarLink>
            </NavbarNav>
            <NavbarNav alignItems="right">
              <Icon className="Nav_search_icon" icon="fa fa-search" />
              <Input type="text" className="Nav_search_input right" placeholder="Search docs..." />
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Hero
        particles={false}
        image="https://graphql.org/img/graph-wash.png"
        backgroundColor="#1D232A"
        subHeaderPosition="top"
        minHeight="50vh"
      >
        <Container>
          <Row className="row mt-5">
            <Column>
              <Image
                alt="GraphQL"
                src="https://graphql.org/img/logo.svg"
                width="100px"
                height="auto"
              />
              <h2 className="Hero__GraphQL_title">GraphQL</h2>
            </Column>
            <Column>
              <h6 className="Hero__code_header">Describe your data</h6>
              <Code
                code={
                  'type Project {\n\tname: String,\n\ttagline: String,\n\tcontributors: [User]\n};'
                }
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
            <Column>
              <h6 className="Hero__code_header">Ask for what you want</h6>
              <Code
                code={'{\n\tproject(name: "GraphQL"){\n\t\ttagline\n\t}\n};'}
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
            <Column>
              <h6 className="Hero__code_header">Get predictable results</h6>
              <Code
                code={'"project": {\n\t"tagline": "A query language for APIs"\n};'}
                readOnly
                lineNumbers={false}
                showheader={false}
                showfooter={false}
                languageCode="css"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Button type="button" className="btn btn-outline-light Hero__btn mr-2 btn-lg">
                {'Get Started'}
              </Button>

              <Button type="button" className="btn btn-outline-light Hero__btn ml-2 btn-lg">
                {'Learn More'}
              </Button>
            </Column>
          </Row>
        </Container>
      </Hero>
      <div className="mt-5">
        <Section title="OUR SERVICES" subTitle="We do scalable Front-End development 3x faster.">
          <Team members={services} imageBorder showBorder={false} />
        </Section>
        <Section gray title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words.">
          <Video source="https://youtu.be/dCrLwWdju68" />
        </Section>
        <Section title="OUR FOUNDERS" subTitle="Dariel & Alberto.">
          <Container>
            <Team
              members={team}
              imageBorder
              showBorder={false}
              socials={['twitter', 'facebook', 'linkedin']}
              socialGray
            />
          </Container>
        </Section>
        <Section gray>
          <Container>
            <BuiltWith companies={frameworks} gray />
          </Container>
        </Section>
      </div>
    </div>
  </ThemeSelector>
));
