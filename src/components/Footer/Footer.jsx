import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import Copyright from '../Copyright';

class Footer extends Component {
  renderSocials() {
    const { socials, socialRounded, socialUrl, socialGray } = this.props;
    return socials.map(social => (
      <Social
        key={social}
        type={social}
        gray={socialGray}
        rounded={socialRounded}
        url={socialUrl}
      />
    ));
  }

  renderSections() {
    const { sections } = this.props;
    return sections.map(section => (
      <div className="col-sm-12 col-md text-center" key={section.name}>
        <div className="Footer__Sections__Header">{section.name}</div>
        {section.sections.length > 0 && (
          <ul className="list-unstyled text-small">{Footer.renderLinks(section.sections)}</ul>
        )}
      </div>
    ));
  }

  static renderLinks(links) {
    return links.map(link => (
      <li key={link.name}>
        <a href={link.url}>{link.name}</a>
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
  socials: PropTypes.arrayOf(PropTypes.string),
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          url: PropTypes.string
        })
      )
    })
  ),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Footer.defaultProps = {
  socialRounded: true,
  socialGray: false,
  socialUrl: '',
  copyright: '',
  socials: [],
  sections: [],
  children: null
};

export default Footer;
