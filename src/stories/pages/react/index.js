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

const leftItems = [
  {
    title: 'Docs',
    href: 'https://facebook.com'
  },
  {
    title: 'Tutorial'
  },
  {
    title: 'Community'
  },
  {
    title: 'Blog'
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
    text: 'Get Started',
    onClick: () => {}
  },
  {
    text: 'Get the tutorial',
    onClick: () => {}
  }
];

const stories = storiesOf('Pages', module);

stories.addDecorator(withKnobs);

stories.add('React', () => (
  <ThemeSelector>
    <Navbar
      companyName="React"
      companyLink="https://reactjs.org/"
      companyLogo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
      leftItems={leftItems}
      expand="md"
    />
    <Hero
      overlayColor="#283A43"
      particles
      opacity={1}
      subHeaderPosition="bottom"
      subHeader="A JavaScript library for building user interfaces"
      header="React"
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
