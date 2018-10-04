import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  NavbarNav,
  NavbarLink,
  NavbarBrand,
  NavbarCollapse,
  Icon,
  Image,
  Container,
  LanguageSwitcher,
  Hero,
  Header,
  Section,
  Column,
  Row,
  Code,
  Link,
  Backers,
  Button,
  BackersOpenCollective,
  Footer
} from '../../../components';

import lastBackers from '../../mock/pages/webpack/lastBackers';
import platinumBackers from '../../mock/pages/webpack/platinumBackers';
import {
  indexCodeExample,
  barCodeExample,
  configCodeExample,
  pageCodeExample
} from '../../mock/pages/webpack/code';

const languages = ['US', 'FR', 'ES', 'DE'];

const customLabels = {
  US: 'English',
  FR: 'Français',
  ES: 'Español',
  DE: 'Deutsch'
};

setAddon(JSXAddon);

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Webpack',
  () => (
    <ThemeSelector theme="webpack">
      <div className="WebpackPage">
        <Navbar expand="md">
          <Container>
            <NavbarCollapse>
              <NavbarBrand>
                <Image
                  width="120"
                  src="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
                  alt="Webpack logo"
                />
              </NavbarBrand>
              <NavbarNav alignItems="right">
                <NavbarLink>Documentation</NavbarLink>
                <NavbarLink>Contribute</NavbarLink>
                <NavbarLink>Vote</NavbarLink>
                <NavbarLink>Blog</NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-search" />
                </NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-github" />
                </NavbarLink>
                <NavbarLink>
                  <Icon icon="fa fa-stack-overflow" />
                </NavbarLink>
                <LanguageSwitcher
                  languages={languages}
                  customLabels={customLabels}
                  showArrow={false}
                />
              </NavbarNav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Hero particles={false} overlayColor="#383d45" opacity={1}>
          <Container>
            <Header className="text-white">bundle your scripts</Header>
            <Image src="images/pages/webpack/hero.svg" alt="Webpack flow" />
          </Container>
        </Hero>
        <Section title="Write your code" gray>
          <Container>
            <Row>
              <Column className="col-md-6">
                <Header type="h6" className="mb-4 text-center">
                  <b>src/index.js</b>
                </Header>
                <Code
                  theme="oceanic-next"
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  code={indexCodeExample}
                />
              </Column>
              <Column className="col-md-6">
                <Header type="h6" className="mb-4 text-center">
                  <b>src/bar.js</b>
                </Header>
                <Code
                  theme="oceanic-next"
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  code={barCodeExample}
                />
              </Column>
            </Row>
          </Container>
        </Section>
        <Section title="Bundle with webpack" gray>
          <Container>
            <Row>
              <Column className="col-md-6">
                <Header type="h6" className="mb-4 text-center">
                  <Link href="https://youtu.be/3Nv9muOkb6k?t=21293">Without config</Link>
                  <Link href="http://savefrom.net/?url=https%3A%2F%2Fyoutu.be%2F3Nv9muOkb6k%3Ft%3D21293&utm_source=chameleon&utm_medium=extensions&utm_campaign=link_modifier" />{' '}
                  or provide custom <b>webpack.config.js</b>
                </Header>
                <Code
                  theme="oceanic-next"
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  code={configCodeExample}
                />
              </Column>
              <Column className="col-md-6">
                <Header type="h6" className="mb-4 text-center">
                  <b>page.html</b>
                </Header>
                <Code
                  theme="oceanic-next"
                  showheader={false}
                  showfooter={false}
                  lineNumbers={false}
                  readOnly
                  languageCode="jsx"
                  code={pageCodeExample}
                />
              </Column>
              <Column className="col-12 mt-5 text-center">
                Then run <span className="badge badge-light">webpack</span> on the command-line to
                create <span className="badge badge-light">bundle.js</span>.
              </Column>
            </Row>
          </Container>
        </Section>
        <Section title="It's that simple" gray>
          <Container className="text-center">
            <Link href="https://webpack.js.org/guides/getting-started">Get Started</Link> quickly in
            our
            <b>Guides</b> section, or dig into the{' '}
            <Link href="https://webpack.js.org/concepts">Concepts</Link> section for more high-level
            information on the core notions behind webpack.
          </Container>
        </Section>
        <Section title="Support the Team">
          <Container className="text-center">
            <p>
              Through contributions, donations, and sponsorship, you allow webpack to thrive. Your
              donations directly support office hours, continued enhancements, and most importantly,
              great documentation and learning material!
            </p>
            <Header type="h4"> Latest Sponsors </Header>
            <p>
              The following persons/organizations made their first donation in the last 14 days.
            </p>
            <Backers backers={lastBackers} imageRounded={false} imageBordered={false} />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A SPONSOR</Button>
            <Header type="h4"> Platinum Sponsors </Header>
            <p>
              <b>Platinum Sponsors</b> are those who have pledged $50,000 or more to webpack.
            </p>
            <Backers backers={platinumBackers} imageRounded={false} imageBordered={false} />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A SPONSOR</Button>
            <Header type="h4"> Gold Sponsors </Header>
            <p>
              <b>Gold Sponsors</b> are those who have pledged $10,000 to $50,000 to webpack.
            </p>
            <Backers backers={lastBackers} imageRounded={false} imageBordered={false} />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A SPONSOR</Button>
            <Header type="h4"> Silver Sponsors </Header>
            <p>
              <b>Silver Sponsors</b> are those who have pledged $2,000 to $10,000 to webpack.
            </p>
            <Backers backers={lastBackers} imageRounded={false} imageBordered={false} />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A SPONSOR</Button>
            <Header type="h4"> Bronze Sponsors </Header>
            <p>
              <b>Bronze Sponsors</b> are those who have pledged $200 to $2,000 to webpack.
            </p>
            <Backers backers={lastBackers} imageRounded={false} imageBordered={false} />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A SPONSOR</Button>
            <Header type="h4"> Backers </Header>
            <p>
              The following <b>Backers</b> are individuals who have contributed various amounts of
              money in order to help support webpack. Every little bit helps, and we appreciate even
              the smallest contributions.
            </p>
            <BackersOpenCollective collective="webpack" />
            <Button className="btn-outline-primary mt-3 mb-3">BECOME A BACKER</Button>
          </Container>
        </Section>
        <Footer>
          <Container>
            <Row>
              <Column className="col-sm-12 col-md-5 text-left">
                <Link className="p-2" href="https://webpack.js.org/guides/getting-started/">
                  Get Started
                </Link>
                <Link className="p-2" href="https://webpack.js.org/organization/">
                  Organization
                </Link>
                <Link className="p-2" href="https://webpack.js.org/starter-kits/">
                  Starter Kits
                </Link>
                <Link className="p-2" href="https://webpack.js.org/comparison/">
                  Comparison
                </Link>
              </Column>
              <Column className="col-sm-12 col-md-2 mt-3 mt-md-0">
                <Image
                  src="https://webpack.js.org/d19378a95ebe6b15d5ddea281138dcf4.svg"
                  alt="Webpack logo"
                  width="30"
                />
              </Column>
              <Column className="col-sm-12 col-md-5 mt-3 mt-md-0 text-right">
                <Link className="p-2" href="https://webpack.js.org/glossary/">
                  Glossary
                </Link>
                <Link className="p-2" href="https://webpack.js.org/branding/">
                  Branding
                </Link>
                <Link className="p-2" href="https://gitter.ijsxConfigm/webpack/webpack">
                  Gitter
                </Link>
                <Link className="p-2" href="https://github.com/webpack/webpack/releases">
                  Changelog
                </Link>
                <Icon className="p-2" icon="fa fa-cc" />
                <Icon className="p-2" icon="fa fa-male" />
              </Column>
            </Row>
          </Container>
        </Footer>
      </div>
    </ThemeSelector>
  ),
  jsxConfig
);
