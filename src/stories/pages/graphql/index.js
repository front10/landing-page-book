import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { GraphqlCodeBlock } from 'graphql-syntax-highlighter-react';
import JSONPretty from 'react-json-pretty';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarNav,
  NavbarLink,
  NavbarCollapse,
  Hero,
  Section,
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

const graphqlJson = {
  hero: {
    name: 'Luke Skywalker',
    height: 1.72,
    mass: 77
  }
};

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
        <Section title="A query language for your API">
          <Row>
            <Column />
            <Column className="col col-md-8">
              <p>
                GraphQL is a query language for APIs and a runtime for fulfilling those queries with
                your existing data. GraphQL provides a complete and understandable description of
                the data in your API, gives clients the power to ask for exactly what they need and
                nothing more, makes it easier to evolve APIs over time, and enables powerful
                developer tools.
              </p>
            </Column>
            <Column />
          </Row>
          <Row className="row mt-5 mb-5 First_section">
            <Column />
            <Column className="col col-md-3 col-ms-6 col-xs-12">
              <div className="Code_container">
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock"
                  queryBody="{
                      hero {
                        name
                        height
                        mass
                      }
                    }"
                />
                <JSONPretty id="json-pretty" json={graphqlJson} />
              </div>
            </Column>
            <Column className="col col-md-3 col-sm-6 col-xs-12">
              <br />
              <h3>Ask for what you need, get exactly that</h3>
              <br />
              <p>
                Send a GraphQL query to your API and get exactly what you need, nothing more and
                nothing less. GraphQL queries always return predictable results. Apps using GraphQL
                are fast and stable because they control the data they get, not the server.
              </p>
            </Column>
            <Column />
          </Row>
        </Section>
        <Section gray title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words." />
        <Section title="OUR FOUNDERS" subTitle="Dariel & Alberto." />
        <Section gray>
          <Container>
            <BuiltWith companies={frameworks} gray />
          </Container>
        </Section>
      </div>
    </div>
  </ThemeSelector>
));
