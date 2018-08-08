import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import {
  Navbar,
  Hero,
  Section,
  Video,
  Team,
  Container,
  BuiltWith,
  ContactUs
} from '../../../components';

const rightItems = [
  {
    title: 'Documentation',
    href: 'https://facebook.com'
  },
  {
    title: 'Contribute'
  },
  {
    title: 'Vote'
  },
  {
    title: 'Blog'
  },
  {
    title: 'Contact'
  }
];

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

const buttons = [
  {
    text: 'TELL ME MORE',
    onClick: () => {}
  }
];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('Webpack', () => (
  <ThemeSelector>
    <Navbar
      companyLink="https://front10.com"
      companyLogo="https://webpack.js.org/e0b5805d423a4ec9473ee315250968b2.svg"
      rightItems={rightItems}
      expand="md"
    />
    <Hero
      overlayColor="#283A43"
      particles
      opacity={1}
      subHeaderPosition="top"
      subHeader="Leverage your process!"
      header="REACT & ANGULARJS COMPONENTS"
      buttons={buttons}
    />
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
      <Hero
        isFixed={false}
        image="images/hero/map-image.png"
        particles={false}
        backgroundColor="#383d45"
      >
        <ContactUs />
      </Hero>
    </div>
  </ThemeSelector>
));
