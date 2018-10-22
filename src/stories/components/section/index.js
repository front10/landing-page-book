import React from 'react';
import { storiesOf } from '@storybook/react';
import withReadme from 'storybook-readme/with-readme';
import StoryHeader from '../../../../storybook-utils/components/StoryHeader';
import PropsManager from '../../../../storybook-utils/components/PropsManager';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import { Section, Video, Button, Container, Row, Column, Card } from '../../../components';
import Readme from '../../../components/Section/README.md';

const stories = storiesOf('Components/Section', module);

const pStyle = {
  color: '#3d3d3d'
};

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <PropsManager scope={{ React, Container, Section }}>
        <Section gray title="Introduction" subTitle="Once upon a time...">
          <Container className="text-left">
            <p style={pStyle}>
              Once upon a time, there was a boy named James. He always got pushed around. One day, a
              wizard appeared in front of the boy. The wizard gave James three wishes. One of James
              wishes was that tge wizard could make James go away. The next day James tried to make
              a wish, but he found himself to be in the land of the forgotten.
            </p>
          </Container>
        </Section>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.addWithJSX(
  'With Video',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        storyName="With Video"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <PropsManager scope={{ React, Container, Section, Video, Button }}>
        <Section title="WHAT WE DO" subTitle="One Look Is Worth A Thousand Words.">
          <Container className="text-center">
            <Video source="https://youtu.be/dCrLwWdju68" />
            <Button className="mt-5">Explore</Button>
          </Container>
        </Section>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.addWithJSX(
  'Two Columns Text',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        storyName="Two Columns Text"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <PropsManager scope={{ React, Container, Section, Row, Column }}>
        <Section title="WHO WE ARE ?" subTitle="One Look Is Worth A Thousand Words.">
          <Container className="text-justify">
            <Row>
              <Column className="col-12 col-sm-6">
                <p style={pStyle}>
                  We are a group of talented software developers with more than 10 years of
                  experience creating front-end applications. We are tired to see how many brilliant
                  minds are reworking in the same thing because there are not standar and defined
                  processes. We are tired of seeing how many companies are struggling to find good
                  programmers. We are tired of seeing how there a lot of software in a trash because
                  somebody does not defined the requirements at the right time.
                </p>
              </Column>
              <Column className="col-12 col-sm-6">
                <p style={pStyle}>
                  We are tired of seeing great people which talent is not being used 100% because
                  they had not being trained in a proper way. We are tired of seeing projects that
                  ended up in a failure just because the team that executed them does not receive
                  the proper advice in time. We are tired of seeing companies investing a lot of
                  money building software that does not scale.
                </p>
                <p style={pStyle}>
                  We are the guys that believes that fixing all this issues is critical for our
                  civilization. We are the guys that are going to go to the roots of all of this
                  problems and are going to fixed it.
                </p>
              </Column>
            </Row>
          </Container>
        </Section>
      </PropsManager>
    </ThemeSelector>
  ))
);

stories.addWithJSX(
  'Two Columns Cards',
  withReadme([Readme], () => (
    <ThemeSelector>
      <StoryHeader
        name="Section"
        storyName="Two Columns Cards"
        description="A section is a thematic grouping of content, typically with a heading. A landing page could normally be split into sections for introduction, content, and contact information."
      />
      <PropsManager scope={{ React, Container, Section, Row, Column, Card }}>
        <Section
          title="COMPONENT-DRIVEN DEVELOPMENT"
          subTitle="Build UIs in a better way: from the component up"
        >
          <Container className="text-justify">
            <Row>
              <Column className="col-12 col-sm-4">
                <div>
                  <Card
                    contentAlign="left"
                    image="images/card/image1.jpg"
                    imageCircle={false}
                    imageShadow
                    subTitle="A tool for Component-Driven Development"
                    summary="A component explorer is a separate application which showcases 
                    the components in your app in various test “states”. A state is essentially
                    a visual test case — an typical input to the component."
                    title="Component Explorer"
                  />
                </div>
              </Column>
              <Column className="col-12 col-sm-8">
                <p style={pStyle}>
                  He biggest trend in frontend user interface (UI) development for the web in recent
                  years has been towards components. The React library, although by no means the
                  first, has in large part established patterns for building UIs out of well
                  specified component parts.
                </p>
                <p style={pStyle}>
                  Of course, the trend toward software built from smaller pieces that perform a
                  well-specified role is nothing new; modularization has been one of the key tenets
                  of software engineering since long before I learned the concepts of “coupling and
                  cohesion”.
                </p>
                <p style={pStyle}>
                  Using the explorer you can test a given component in all the states that have been
                  defined to be important. This isolation is key in enabling a workflow where you
                  build one component at a time.
                </p>
                <p style={pStyle}>
                  Adding a component to an explorer is typically as simple as programmatically
                  enumerating the interesting states (in React this is the props and context of that
                  component). This may be familiar to you — enumerating states is exactly how you do
                  snapshot testing or screenshot testing (and it’s no surprise to see features that
                  combine the above with component explorers).
                </p>
                <p style={pStyle}>
                  Once you have detailed the interesting states of a component, you can exhaustively
                  visually test the component with just a few clicks. Learn more about component
                  explorers below.
                </p>
              </Column>
            </Row>
          </Container>
        </Section>
      </PropsManager>
    </ThemeSelector>
  ))
);
