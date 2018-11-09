import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkScroll, Element } from 'react-scroll';
import { withPrefix } from 'gatsby-link';
import { Column, Row, Link, Header, Paragraph, Container } from '../../../src/components';
import withStylesMap from '../../../src/helpers/WithStyles/map.json';

import PropsManager from '../PropsManager';
import './style.css';

const github =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABZVBMVEUAAAAfQWAfQF8fQmH///8fQWD///8eQV8eQGAxUW0eQGAgQmD///8lR2T1+fn///////////8gQmAkRGRtgpcuTmr6+vsfQWAgQmEiQ2IjRGIkRWQlRmQmR2UnSGYoSGYpSWcqSmcrS2kuTmswT2wxUGwyUW4zUm42VHA4V3I8WnVAXXhEYHpFYXtKZn9LZn9MZ4BNaIBOaIFTbYVUboVVb4dcdYxgeI5lfZJmfZNqgJVtg5dyiJt5jaB6jqF7kKJ9kaN+kaN/kqSBlKWBlKaFl6iHmaqImqqImquJm6uKnKyPoK+UpLObqrijsb6lsr+mtMCotcGptsKqt8Ort8OtusWvu8ayvci6xc7DzNXI0NjJ0tnL09rQ2N7S2d/T2uDU2uDV2+HW3OLX3eLa4OXg5enh5urk6Ozp7O/t7/Lv8vTx8/Xz9fb09vj3+Pn4+fr5+vv6+/v7+/z7/P38/f3+/v7///+Rr4cJAAAAF3RSTlMAcnN0dHV1dnd3f4CAgoSFhoeIzdvs/pTfOK0AAAABYktHRHYxY8lBAAAB/ElEQVRYw63Wd1vUQBTF4WMvsbcbQBcQVKxYEOyIsnYRe0cRe1nRZc/n94/AkiwT9iae3wd4n8xMnrmDHaYNiNSgWIRahFqEWoRahFqEWoRahFqEWkQ5sdsHesX4yrdbPtAnxhPk7wEf6BLHSfKeE2wrHh57+JMk33vB5cWeB3UmNQ55weXE/ndsNjPoBfPFrldMVa96wVxxgtkmO51gjjjUaAH5PHaCYfEFl3TTC7aKHWZWqS0F5057wRaxWjU7xkBT+71gVrxc67cTIZD117cP+sCMeIlnra/BcLW7sQtMi/d5ymw6B+SPPh+YEj/xgNnVPPC6OcGmeJTca7bvc9h7GrvBBfE4OWRmw6Fd/HWnw/zgvNj5nW96rev8hwD4zPvbZMRr5PRoeMU3CoKJGD8h/wa9uSNFwXnxUdjjpBUGEZnZuT9hb6pSAsTmnbv2LBofU2f9dsDKgNie/qgLI18W5srjipUDsW3R+9pjlbEZkrMvz3hHQKCtzdtlOBlXJwe73UMq2NrEmx0p8lhqL7b1CoBY7fGKgNjEiyYFsWW3GMQGNYgVarC9WBTESjXYToRahFqEWoRaLAdilRrMF6EWoRahFqEWoRb/C8QaNRgQoRahFqEWoRYFINapwYwItQi1CLUItQi1qAOxXg0mohLERjWISA0iUoOI/gEF0t9LkkpxtQAAAABJRU5ErkJggg==';
const image =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAS1BMVEUAAABmd4hggI9peIdkeoVidoloe45mdYpmeIpneIpmeItneIpmeIpmeYpmd4pmeIlmeIpmeIpmeIpmeIpmeItmeIpmeIpmeIr////qXIHVAAAAF3RSTlMADxARFxobI7u9xcfIy83O0tTY2tvu9cW9EVEAAAABYktHRBibaYUeAAAATElEQVQY02NgIA6wCHCh8gXFuZH5bMLiPIx4+ED1QuzMUAAS4BdHAjxAAT5xcTFRGOAECjDxiouwoVgKFBHGFGFFdxgPmtN5OBiIBgBwewSBxP8LIAAAAABJRU5ErkJggg==';

class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.toogle = this.toogle.bind(this);
    this.extractProps = this.extractProps.bind(this);
    this.state = {
      open: false,
      propsDescription: this.extractProps()
    };
  }

  extractProps() {
    const { extractProps, withStyles, propsDescription } = this.props;
    const newPropsDescription = withStyles
      ? Object.assign(propsDescription, withStylesMap)
      : propsDescription;
    extractProps.map(extractProp => {
      Object.keys(withStylesMap).map(withStyle => {
        const item =
          propsDescription[
            `${extractProp}${withStyle.charAt(0).toUpperCase() + withStyle.slice(1)}`
          ];
        newPropsDescription[
          `${extractProp}${withStyle.charAt(0).toUpperCase() + withStyle.slice(1)}`
        ] = item
          ? { ...withStylesMap[withStyle], defaultValue: item.defaultValue }
          : withStylesMap[withStyle];
        return withStyle;
      });
      return extractProp;
    });
    return newPropsDescription;
  }

  toogle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  renderNavigationsStories() {
    const { stories } = this.props;
    return (
      <div className="storiesList d-none d-lg-block">
        <ul>
          {stories.map(story => (
            <li key={story.name}>
              <LinkScroll
                activeClass="active"
                to={story.name}
                spy
                smooth
                hashSpy
                duration={500}
                isDynamic
              >
                {story.name}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { name, linkGithub, description, stories, pagePushed, showBack } = this.props;
    const { propsDescription } = this.state;
    // const { open } = this.state;
    return (
      <div id="container" className={`page ${pagePushed ? 'pushed' : ''}`}>
        {/* <Section sectionClass="p-2 title-component" gray> */}
        <div className="title-component bg-light p-2">
          <Container className="pb-4 pt-3 prl-11">
            {showBack && (
              <Link
                href={withPrefix('/components')}
                tooltip="Go Back"
                className="btn btn-back btn-everblue"
              >
                <img src={image} alt="Go Back" />
              </Link>
            )}
            <Header type="h2" className="name title-component d-inline">
              {name}
            </Header>
            <Link
              className="github-component btn btn-everblue pull-right pt-2"
              href={linkGithub}
              tooltip="View on Github"
              target="_blank"
            >
              <span>View on Github</span>
            </Link>
            <Link
              href={linkGithub}
              className="git-component-fixed"
              tooltip="View on Github"
              target="_blank"
            >
              <img src={github} alt="View on Github" />
            </Link>
          </Container>
        </div>
        {/* </Section> */}
        <div className="container prl-11">
          <Row>
            <Column className={`${stories.length > 1 ? 'col-11' : 'col-12'} pt-4`}>
              <Header type="h4" className="name mb-2">
                Intro
              </Header>
              <Paragraph fontWeight="light" text={description} />
              {stories.map(story => (
                <Element name={story.name} className="element pb-4" key={story.name}>
                  <Header type="h3" className="mt-3">
                    {story.name}
                  </Header>
                  <Paragraph fontWeight="light" text={story.summary} />
                  <PropsManager
                    propsDescription={propsDescription}
                    active={story.tabsActive}
                    cssVariables={story.cssVariables}
                    columnSize={story.columnSize}
                    columnAlign={story.columnAlign}
                  >
                    {story.code}
                  </PropsManager>
                </Element>
              ))}
            </Column>
            {stories.length > 1 && (
              <Column className="col-1 col-md-1 pt-4">{this.renderNavigationsStories()}</Column>
            )}
            {/* <Column className="col-12 col-md-12"> */}
            {/* <div className="code-import pl-0 pt-2 pb-2">
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
              </div> */}
            {/* </Column> */}
          </Row>
        </div>
      </div>
    );
  }
}

DetailsComponent.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  propsDescription: PropTypes.objectOf(PropTypes.any),
  linkGithub: PropTypes.string,
  stories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      summary: PropTypes.string,
      code: PropTypes.string,
      tabsActive: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  pagePushed: PropTypes.bool,
  showBack: PropTypes.bool,
  withStyles: PropTypes.bool,
  extractProps: PropTypes.arrayOf(PropTypes.string)
};

DetailsComponent.defaultProps = {
  name: 'Header component',
  description: '',
  propsDescription: null,
  linkGithub: 'Link',
  stories: [],
  pagePushed: false,
  showBack: true,
  withStyles: false,
  extractProps: []
};

export default DetailsComponent;
