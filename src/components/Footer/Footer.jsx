import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Social from '../Social';
import Link from '../Link';
import Header from '../Header';
import Copyright from '../Copyright';
import withStyles from '../../helpers/WithStyles';
import extractProps from '../../helpers/ExtractProps';

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
        {...extractProps('social', this.props)}
      />
    ));
  }

  renderSections() {
    const { sections } = this.props;
    return sections.map(section => (
      <div className="col-sm-12 col-md text-center" key={section.name}>
        <div className="Footer__Sections__Header">
          <Header type="h3" {...extractProps('header', this.props)}>
            {section.name}
          </Header>
        </div>
        {section.sections.length > 0 && (
          <ul className="list-unstyled text-small">{this.renderLinks(section.sections)}</ul>
        )}
      </div>
    ));
  }

  renderLinks(links) {
    return links.map(link => (
      <li key={link.name}>
        <Link href={link.url} {...extractProps('link', this.props)}>
          {link.name}
        </Link>
      </li>
    ));
  }

  render() {
    const { sections, socials, copyright, children, className } = this.props;
    return (
      <footer className={`Footer ${className}`}>
        {sections.length > 0 && <div className="row Footer__Sections">{this.renderSections()}</div>}
        {socials.length > 0 && <div className="mt-3">{this.renderSocials()}</div>}
        {copyright && (
          <div className="mt-3 Footer__Copyright">
            <Copyright text={copyright} {...extractProps('copyright', this.props)} />
          </div>
        )}
        {children && <React.Fragment>{children}</React.Fragment>}
      </footer>
    );
  }
}

Footer.propTypes = {
  /**
   * Define if socials buttons are rounded. Default `true`
   */
  socialRounded: PropTypes.bool,
  /**
   * Define if socials buttons are gray. Default `false`
   */
  socialGray: PropTypes.bool,
  /**
   * Url to share in socials networks. Default `""`
   */
  socialUrl: PropTypes.string,
  /**
   * Text of copyright. Default `""`
   */
  copyright: PropTypes.string,
  /**
   * Array of string with values of socials networks to display. Default `[]`
   */
  socials: PropTypes.arrayOf(PropTypes.string),
  /**
   * Sections to show . Default `[]`
   */
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
  /**
   * Class to apply to icon. Default `""`
   */
  className: PropTypes.string,
  /**
   *  Padding to apply to Footer.
   */
  padding: PropTypes.string,
  /**
   *  Elements to show inside of Footer.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
Footer.defaultProps = {
  socialRounded: true,
  socialGray: false,
  socialUrl: '',
  copyright: '',
  socials: [],
  sections: [],
  className: '',
  padding: '5',
  children: null
};

export default withStyles(Footer);
