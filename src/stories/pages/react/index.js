import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import {
  simpleComponentCodeExample,
  statefulComponentCodeExample,
  anApplicationCodeExample,
  aComponentUsingExternalPluginsCodeExample
} from '../../mock/pages/react/code';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarCollapse,
  NavbarLink,
  Icon,
  Image,
  Input,
  Hero,
  Container,
  Header,
  Column,
  Button,
  Row,
  Link,
  Code,
  Footer
} from '../../../components';

setAddon(JSXAddon);

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'React',
  () => (
    <ThemeSelector theme="react">
      <div className="ReactPage">
        <Navbar expand="md">
          <Container>
            <NavbarCollapse>
              <NavbarBrand href="https://reactjs.org/">
                <Image
                  width="24"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                  alt="React logo"
                />
                React
              </NavbarBrand>
              <NavbarNav>
                <NavbarLink href="https://reactjs.org/docs/getting-started.html">Docs</NavbarLink>
                <NavbarLink href="https://reactjs.org/tutorial/tutorial.html">Tutorial</NavbarLink>
                <NavbarLink href="https://reactjs.org/community/support.html">Community</NavbarLink>
                <NavbarLink href="https://reactjs.org/blog/2018/08/01/react-v-16-4-2.html">
                  Blog
                </NavbarLink>
              </NavbarNav>
              <NavbarNav alignItems="right">
                <Input
                  placeholder="Search docs"
                  className="ReactPage__Navbar__SearchInput"
                  icon="fa fa-search"
                />
                <NavbarLink>v16.4.2</NavbarLink>
                <NavbarLink>GitHub</NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-share" />
                </NavbarLink>
              </NavbarNav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Hero
          particles={false}
          backgroundColor="#282c34"
          isFixed={false}
          image="images/pages/react/logo.png"
          minHeight="55vh"
        >
          <Container>
            <Row className="pb-2">
              <Column>
                <Header className="ReactPage__MainHeader">React</Header>
                <Header className="text-white ReactPage__MainSubHeader">
                  A JavaScript library for building user interfaces
                </Header>
              </Column>
            </Row>
            <Row className="pt-5">
              <Column>
                <Button className="btn-lg Hero__Button">Get Started</Button>
                <Button className="btn-lg Hero__ButtonTutorial">
                  Take the Tutorial <Icon icon="fa fa-chevron-right" />
                </Button>
              </Column>
            </Row>
          </Container>
        </Hero>
        <Container>
          <div className="mt-5 pt-2 mb-5">
            <Row>
              <Column>
                <Header className="ReactPage__FeaturesHeader">Declarative</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  React makes it painless to create interactive UIs. Design simple views for each
                  state in your application, and React will efficiently update and render just the
                  right components when your data changes.
                </p>
                <p className="ReactPage__FeaturesSummary pt-3">
                  Declarative views make your code more predictable and easier to debug.
                </p>
              </Column>
              <Column>
                <Header className="ReactPage__FeaturesHeader">Component-Base</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  Build encapsulated components that manage their own state, then compose them to
                  make complex UIs.
                </p>
                <p className="ReactPage__FeaturesSummary pt-3">
                  Since component logic is written in JavaScript instead of templates, you can
                  easily pass rich data through your app and keep state out of the DOM.
                </p>
              </Column>
              <Column>
                <Header className="ReactPage__FeaturesHeader">Learn Once, Write Anywhere</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  We don’t make assumptions about the rest of your technology stack, so you can
                  develop new features in React without rewriting existing code.
                </p>
                <p className="ReactPage__FeaturesSummary pt-3">
                  React can also render on the server using Node and power mobile apps using{' '}
                  <Link
                    className="ReactPage__FeaturesSummary__ReacNativeLink"
                    href="https://facebook.github.io/react-native/"
                  >
                    React Native
                  </Link>
                  .
                </p>
              </Column>
            </Row>
          </div>
          <hr />
          <div className="mt-5">
            <Row>
              <Column className="col-12 col-md-4">
                <Header className="ReactPage__ExampleHeader">A Simple Component</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  React components implement a <code>render()</code> method that takes input data
                  and returns what to display. This example uses an XML-like syntax called JSX.
                  Input data that is passed into the component can be accessed by{' '}
                  <code>render()</code> via <code>this.props</code>.
                </p>
                <p className="ReactPage__FeaturesSummary pt-3">
                  <b>JSX is optional and not required to use React.</b> Try the{' '}
                  <Link
                    className="ReactPage__FeaturesSummary__ReacNativeLink"
                    href="https://babeljs.io/repl/#?presets=react&code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA"
                  >
                    Babel REPL
                  </Link>{' '}
                  to see the raw JavaScript code produced by the JSX compilation step.
                </p>
              </Column>
              <Column className="col-12 col-md-8">
                <Code
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  theme="oceanic-next"
                  languageCode="jsx"
                  code={simpleComponentCodeExample}
                />
              </Column>
            </Row>
          </div>
          <div className="mt-5">
            <Row>
              <Column className="col-12 col-md-4">
                <Header className="ReactPage__ExampleHeader">A Stateful Component</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  In addition to taking input data (accessed via <code>this.props</code>
                  ), a component can maintain internal state data (accessed via{' '}
                  <code>this.state</code>
                  ). When a component’s state data changes, the rendered markup will be updated by
                  re-invoking <code>render()</code>.
                </p>
              </Column>
              <Column className="col-12 col-md-8">
                <Code
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  theme="oceanic-next"
                  languageCode="jsx"
                  code={statefulComponentCodeExample}
                />
              </Column>
            </Row>
          </div>
          <div className="mt-5">
            <Row>
              <Column className="col-12 col-md-4">
                <Header className="ReactPage__ExampleHeader">An Application</Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  Using <code>props</code> and <code>state</code>, we can put together a small Todo
                  application. This example uses <code>state</code> to track the current list of
                  items as well as the text that the user has entered. Although event handlers
                  appear to be rendered inline, they will be collected and implemented using event
                  delegation.
                </p>
              </Column>
              <Column className="col-12 col-md-8">
                <Code
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  theme="oceanic-next"
                  languageCode="jsx"
                  code={anApplicationCodeExample}
                />
              </Column>
            </Row>
          </div>
          <div className="mt-5">
            <Row>
              <Column className="col-12 col-md-4">
                <Header className="ReactPage__ExampleHeader">
                  A Component Using External Plugins
                </Header>
                <p className="ReactPage__FeaturesSummary pt-3">
                  React is flexible and provides hooks that allow you to interface with other
                  libraries and frameworks. This example uses remarkable, an external Markdown
                  library, to convert the <code>&#60;textarea /&#62;</code>
                  ’s value in real time.
                </p>
              </Column>
              <Column className="col-12 col-md-8">
                <Code
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  theme="oceanic-next"
                  languageCode="jsx"
                  code={aComponentUsingExternalPluginsCodeExample}
                />
              </Column>
            </Row>
          </div>
        </Container>
        <div className="mt-5">
          <Hero
            particles={false}
            overlayColor="#282c34"
            isFixed={false}
            opacity={1}
            minHeight="150px"
          >
            <Container>
              <Row className="pt-5 pb-5">
                <Column>
                  <Button className="btn-lg Hero__Button">Get Started</Button>
                  <Button className="btn-lg Hero__ButtonTutorial">
                    Take the Tutorial <Icon icon="fa fa-chevron-right" />
                  </Button>
                </Column>
              </Row>
            </Container>
          </Hero>
          <Footer>
            <Container>
              <Row>
                <Column className="col text-left">
                  <Link href="https://code.facebook.com/projects/">
                    <Image
                      width="160"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFx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"
                      alt="Fcebook Open source"
                    />
                  </Link>
                </Column>
                <Column className="col text-left">
                  <Header className="Header">DOCS</Header>
                  <Link className="d-block" href="https://reactjs.org/docs/getting-started.html">
                    Installation
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/docs/hello-world.html">
                    Main Concepts
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/docs/accessibility.html">
                    Advanced Guides
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/docs/react-api.html">
                    API Reference
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/docs/how-to-contribute.html">
                    Contributing
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/docs/faq-ajax.html">
                    FAQ
                  </Link>
                </Column>
                <Column className="col text-left">
                  <Header className="Header">CHANNELS</Header>
                  <Link className="d-block" href="https://github.com/facebook/react">
                    GitHub
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link
                    className="d-block"
                    href="http://stackoverflow.com/questions/tagged/reactjs"
                  >
                    Stack Overflow
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link className="d-block" href="https://discuss.reactjs.org/">
                    Discussion Forum
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link className="d-block" href="https://discord.gg/0ZcbPKXt5bZjGY5n">
                    Reactiflux Chat
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link className="d-block" href="https://dev.to/t/react">
                    DEV Community
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link className="d-block" href="https://www.facebook.com/react">
                    Facebook
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                  <Link className="d-block" href="https://twitter.com/reactjs">
                    Twitter
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                </Column>
              </Row>
              <Row className="row mt-5">
                <Column className="col text-left" />
                <Column className="col text-left">
                  <Header className="Header">COMMUNITY</Header>
                  <Link className="d-block" href="https://reactjs.org/community/support.html">
                    Community Resources
                  </Link>
                  <Link
                    className="d-block"
                    href="https://reactjs.org/community/debugging-tools.html"
                  >
                    Tools
                  </Link>
                </Column>
                <Column className="col text-left">
                  <Header className="Header">MORE</Header>
                  <Link className="d-block" href="https://reactjs.org/tutorial/tutorial.html">
                    Tutorial
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/blog/">
                    Blog
                  </Link>
                  <Link className="d-block" href="https://reactjs.org/acknowledgements.html">
                    Acknowledgements
                  </Link>
                  <Link className="d-block" href="http://facebook.github.io/react-native/">
                    React Native
                    <Icon icon="fa fa-share-square-o" className="ml-1" />
                  </Link>
                </Column>
              </Row>
            </Container>
          </Footer>
        </div>
      </div>
    </ThemeSelector>
  ),
  jsxConfig
);
