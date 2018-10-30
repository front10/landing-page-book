import React from 'react';
import PropTypes from 'prop-types';
import { GoRocket } from 'react-icons/go';
import { Link as LinkScroll, Element } from 'react-scroll';
import {
  Section,
  Column,
  Row,
  Link,
  Icon,
  Header,
  Paragraphs,
  NavbarCollapse,
  Button,
  Container
} from '../../../src/components';

import PropsManager from '../PropsManager';
import './style.css';

class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toogle = this.toogle.bind(this);
  }

  toogle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { name, linkGithub, description, importCode, stories, pagePushed } = this.props;
    const { open } = this.state;
    return (
      <div id="container" className={`page ${pagePushed ? 'pushed' : ''}`}>
        {/* <Section sectionClass="p-2 title-component" gray> */}
        <div className="title-component bg-light p-2">
          <Container className="pb-4 prl-11">
            <Header type="h2" className="name d-inline">
              {name}
            </Header>
            <Link
              className="text-muted pull-right pt-2"
              href={linkGithub}
              tooltip="View on Github"
              target="_blank"
            >
              <Icon icon="fa fa-github" />
              <span className="d-none d-sm-inline">View on Github</span>
            </Link>
          </Container>
        </div>
        {/* </Section> */}
        <div className="container prl-11">
          <Row>
            <Column className="col-12 col-md-12 pt-4">
              <Header type="h2" className="name d-inline">
                Intro
              </Header>
              <Paragraphs fontWeight="light" text={description} />
            </Column>
            <Column className="col-12 col-md-12">
              <div className="code-import pl-0 pt-2 pb-2">
                <div className="col-5 text-truncate pl-0">
                  <Button className="pl-0" onClick={this.toogle} color="link">
                    <code className="text-monospace text-muted text-truncate">{importCode}</code>
                  </Button>
                </div>
                <NavbarCollapse isOpen={open}>
                  <pre>
                    <code className="text-monospace text-muted">{importCode}</code>
                  </pre>
                </NavbarCollapse>
              </div>
              {stories.map(story => (
                <Element name={story.name} className="element pb-4" key={story.name}>
                  <Header type="h3" className="mt-3">
                    {story.name}
                  </Header>
                  <Paragraphs fontWeight="light" text={story.summary} />
                  <PropsManager active={story.tabsActive}>{story.code}</PropsManager>
                </Element>
              ))}
            </Column>
          </Row>
        </div>
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  importCode: PropTypes.string,
  linkGithub: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
      code: PropTypes.string,
      tabsActive: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  pagePushed: PropTypes.bool
};

DetailsComponent.defaultProps = {
  name: 'Header component',
  description: '',
  importCode: '',
  linkGithub: 'Link',
  stories: [],
  pagePushed: false
};

export default DetailsComponent;
