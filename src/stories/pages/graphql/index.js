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
  Button,
  Image,
  Row,
  Column,
  Video,
  Footer,
  Copyright,
  TextBox
} from '../../../components';

const frameworks = [
  {
    image: 'https://graphql.org/users/logos/facebook.png'
  },
  {
    image: 'https://graphql.org/users/logos/github.png'
  },
  {
    image: 'https://graphql.org/users/logos/pinterest.png'
  },
  {
    image: 'https://graphql.org/users/logos/intuit.png'
  },
  {
    image: 'https://graphql.org/users/logos/coursera.png'
  },
  {
    image: 'https://graphql.org/users/logos/shopify.png'
  }
];

const graphqlJson = {
  hero: {
    name: 'Luke Skywalker',
    height: 1.72,
    mass: 77
  }
};
const HerographqlResponseJson = {
  project: {
    tagline: 'A query language for APIs'
  }
};

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('GraphQl', () => (
  <ThemeSelector theme="graphql">
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
              <Input
                icon="fa fa-search text-white"
                className="Nav_search_input right"
                placeholder="Search docs..."
              />
            </NavbarNav>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Hero
        particles={false}
        image="images/pages/graphql/hero.png"
        backgroundColor="#1D232A"
        subHeaderPosition="top"
        minHeight="60vh"
      >
        <Container>
          <Row className="first-hero-row justify-content-center">
            <Column className="col-12 col-md-3">
              <Image
                className="graphql-hero-logo"
                alt="GraphQL"
                src="https://graphql.org/img/logo.svg"
                width="90px"
                height="90px"
              />
              <h2 className="Hero__GraphQL_title">GraphQL</h2>
            </Column>
            <Column className="col-12 col-md-3">
              <h6 className="Hero__code_header">Describe your data</h6>
              <GraphqlCodeBlock
                className="GraphqlCodeBlock"
                queryBody="type Project {
                  name: String,
                  tagline: String
                  }
                  "
              />
            </Column>
            <Column className="col-12 col-md-3">
              <h6 className="Hero__code_header">Ask for what you want</h6>
              <GraphqlCodeBlock
                className="GraphqlCodeBlock"
                queryBody="{
                  project(name: $Name) { 
                    tagline 
                  }
                }"
              />
            </Column>
            <Column className="col-sm-12 col-md-3">
              <h6 className="Hero__code_header">Get predictable results</h6>
              <JSONPretty id="json-pretty" className="jsonPretty" json={HerographqlResponseJson} />
            </Column>
          </Row>
          <Row className="pt-5">
            <Column>
              <Button type="button" className="btn btn-outline-light Hero__btn mr-2 btn-hero">
                {'Get Started'}
              </Button>

              <Button type="button" className="btn btn-outline-light Hero__btn ml-2 btn-hero">
                {'Learn More'}
              </Button>
            </Column>
          </Row>
        </Container>
      </Hero>
      <div className="mt-5">
        <Section title="A query language for your API">
          <Row>
            <Column className="col-12 col-md-8">
              <p>
                GraphQL is a query language for APIs and a runtime for fulfilling those queries with
                your existing data. GraphQL provides a complete and understandable description of
                the data in your API, gives clients the power to ask for exactly what they need and
                nothing more, makes it easier to evolve APIs over time, and enables powerful
                developer tools.
              </p>
            </Column>
          </Row>
          <Row className="row mt-5 mb-5 Code_section vertical">
            <Column className="col-12 col-md-4">
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
            <Column className="col-12 col-md-4">
              <TextBox
                className="TextBox"
                title="Ask for what you need, get exactly that"
                text="Send a GraphQL query to your API and get exactly what you need, nothing more and
            nothing less. GraphQL queries always return predictable results. Apps using GraphQL
            are fast and stable because they control the data they get, not the server."
              />
            </Column>
          </Row>
        </Section>
        <Section gray>
          <Row>
            <Column className="col12 col-md-4">
              <TextBox
                className="TextBox"
                title="Get many resources in a single request"
                text="GraphQL queries access not just the properties of one resource but also smoothly
                follow references between them. While typical REST APIs require loading from
                multiple URLs, GraphQL APIs get all the data your app needs in a single request.
                Apps using GraphQL can be quick even on slow mobile network connections."
              />
            </Column>
            <Column className="col-12 col-md-4">
              <Image
                alt="Many resources in single request"
                src="images/pages/graphql/code.png"
                width="600px"
                height="auto"
              />
            </Column>
          </Row>
        </Section>
        <Section>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col-12 col-md-6">
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
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                    hero: Character
                  }
                  
                  type Character {
                    name: String
                    friends: [Character]
                    homeWorld: Planet
                    species: Species
                  }
                  
                  type Planet {
                    name: String
                    climate: String
                  }
                  
                  type Species {
                    name: String
                    lifespan: Int
                    origin: Planet
                  }"
                />
              </div>
            </Column>
            <Column className="col-12 col-md-4">
              <TextBox
                className="TextBox"
                title="Get many resources in a single request"
                text="GraphQL queries access not just the properties of one resource but also smoothly
            follow references between them. While typical REST APIs require loading from
            multiple URLs, GraphQL APIs get all the data your app needs in a single request.
            Apps using GraphQL can be quick even on slow mobile network connections."
              />
            </Column>
          </Row>
        </Section>
        <Section
          className="Section__background-dark"
          title="Move faster with powerful developer tools"
          contentClassName="Section__content-bottom"
        >
          <Row>
            <Column />
            <Column className="col-12 col-md-6">
              <p className="Graphql__p">
                Know exactly what data you can request from your API without leaving your editor,
                highlight potential issues before sending a query, and take advantage of improved
                code intelligence. GraphQL makes it easy to build powerful tools like GraphiQL by
                leveraging your API’s type system.
              </p>
            </Column>
            <Column />
          </Row>
          <Row>
            <Column>
              <Video
                source="https://graphql.org/img/graphiql.mp4"
                playing
                loop
                className="Video__botton"
              />
            </Column>
          </Row>
        </Section>
        <Section gray>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col-12 col-md-6">
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
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                  hero: Character
                }
                
                type Character {
                  name: String
                  friends: [Character]
                  homeWorld: Planet
                  species: Species
                }
                
                type Planet {
                  name: String
                  climate: String
                }
                
                type Species {
                  name: String
                  lifespan: Int
                  origin: Planet
                }"
                />
              </div>
            </Column>
            <Column className="col-12 col-md-4">
              <TextBox
                className="TextBox"
                title="Evolve your API without versions"
                text=" Add new fields and types to your GraphQL API without impacting existing queries.
            Aging fields can be deprecated and hidden from tools. By using a single evolving
            version, GraphQL APIs give apps continuous access to new features and encourage
            cleaner, more maintainable server code."
              />
            </Column>
          </Row>
        </Section>
        <Section>
          <Row className="row mt-5 mb-5 Code_section_vertical">
            <Column className="col-12 col-md-4">
              <TextBox
                className="TextBox"
                title="Bring your own data and code"
                text="GraphQL creates a uniform API across your entire application without being limited
                by a specific storage engine. Write GraphQL APIs that leverage your existing data
                and code with GraphQL engines available in many languages. You provide functions for
                each field in the type system, and GraphQL calls them with optimal concurrency."
              />
            </Column>
            <Column className="col-12 col-md-6">
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
                <GraphqlCodeBlock
                  className="GraphqlCodeBlock border_separator"
                  queryBody="type Query {
                hero: Character
              }
              
              type Character {
                name: String
                friends: [Character]
                homeWorld: Planet
                species: Species
              }
              
              type Planet {
                name: String
                climate: String
              }
              
              type Species {
                name: String
                lifespan: Int
                origin: Planet
              }"
                />
              </div>
            </Column>
          </Row>
        </Section>
        <Section gray title="Who’s using GraphQL?">
          <Container>
            <Row>
              <Column>
                <p>
                  Facebook mobile apps have been powered by GraphQL since 2012. A GraphQL spec was
                  open sourced in 2015 and is now available in many environments and used by teams
                  of all sizes.
                </p>
              </Column>
            </Row>
            <Row>
              <Column className="text-center">
                <BuiltWith companies={frameworks} className="justify-content-center" />
              </Column>
            </Row>
          </Container>
        </Section>
        <Footer>
          <Container>
            <Row>
              <Column>
                <img
                  src="https://graphql.org/img/logo-gray.svg"
                  width={40}
                  alt="GraphQL logo"
                  className="float-right"
                />
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Learn</li>
                  <li className="list-group-item">Introduction</li>
                  <li className="list-group-item">Query Language</li>
                  <li className="list-group-item">Type System</li>
                  <li className="list-group-item">Execution</li>
                  <li className="list-group-item">Best Practices</li>
                </ul>
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Code</li>
                  <li className="list-group-item">Servers</li>
                  <li className="list-group-item">Clients</li>
                  <li className="list-group-item">Tools</li>
                </ul>
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">Community</li>
                  <li className="list-group-item">Upcoming Events</li>
                  <li className="list-group-item">Stack Overflow</li>
                  <li className="list-group-item">Facebook Group</li>
                  <li className="list-group-item">Twitter</li>
                </ul>
              </Column>
              <Column>
                <ul className="list-group">
                  <li className="list-group-item disabled">More</li>
                  <li className="list-group-item">GraphQL Team Blog</li>
                  <li className="list-group-item">Read the Spec</li>
                  <li className="list-group-item">GitHub</li>
                  <li className="list-group-item">Edit this page</li>
                </ul>
              </Column>
            </Row>
            <Row className="pt-5">
              <Column>
                <Copyright text="Front10, Inc" showAllRightText={false} />
              </Column>
            </Row>
          </Container>
        </Footer>
      </div>
    </div>
  </ThemeSelector>
));
