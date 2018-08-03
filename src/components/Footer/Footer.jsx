import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import Copyright from '../Copyright';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  renderSocials() {
    const { socials, socialRounded, socialUrl, socialGray } = this.props;
    return socials.map((social, index) => (
      <Social key={index} type={social} gray={socialGray} rounded={socialRounded} url={socialUrl} />
    ));
  }

  renderSections() {
    const { sections } = this.props;
    return sections.map((section, index) => (
      <div className="col-sm-12 col-md text-center" key={index}>
        <div className="Footer__Sections__Header">{section.name}</div>
        {section.sections.length > 0 && (
          <ul className="list-unstyled text-small">{this.renderLinks(section.sections)}</ul>
        )}
      </div>
    ));
  }

  renderLinks(links) {
    return links.map((link, index) => (
      <li key={index}>
        <a className="Footer__Sections__Link" href={link.url}>
          {link.name}
        </a>
      </li>
    ));
  }

  render() {
    const { sections, socials, copyright, children } = this.props;
    return (
      <footer className="Footer p-5">
        {sections.length > 0 && <div className="row Footer__Sections">{this.renderSections()}</div>}
        {socials.length > 0 && <div className="mt-3">{this.renderSocials()}</div>}
        {copyright && (
          <div className="mt-3 Footer__Copyright">
            <Copyright text={copyright} />
          </div>
        )}
        {children && <React.Fragment>{children}</React.Fragment>}
      </footer>
    );
  }
}

Footer.propTypes = {
  socialRounded: PropTypes.bool,
  socialGray: PropTypes.bool,
  socialUrl: PropTypes.string,
  copyright: PropTypes.string,
  socials: PropTypes.array,
  sections: PropTypes.array
};
Footer.defaultProps = {
  socialRounded: true,
  socialGray: false,
  socialUrl: '',
  copyright: '',
  socials: [],
  sections: []
};

export default Footer;
