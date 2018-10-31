import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import '../components/Navbar/style.legacy_browsers.css';
import '../components/Footer/style.legacy_browsers.css';

import Navbar from '../components/Navbar';
import NavbarNav from '../components/NavbarNav';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import '../themes/default/index.legacy_browsers.css';

import '../pages/app.css';

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <Navbar brandLink="/" brandLogo="/images/logo/logoMainBLACK.png" fixed>
          <NavbarNav>
            <Link className="nav-link NavbarLink" to="/" activeClassName="activeLink" exact>
              Introduction
            </Link>
            <Link
              className="nav-link NavbarLink"
              to="/components"
              activeClassName="activeLink"
              exact
            >
              Components
            </Link>
          </NavbarNav>
          <NavbarNav alignItems="right">
            {/* eslint-disable */}
            <iframe
              className="first-iframe mt-2"
              src="http://ghbtns.com/github-btn.html?user=front10&amp;repo=landing-page-book&amp;type=watch&amp;count=true"
              frameBorder="0"
              scrolling="0"
              width="86"
              height="30"
            />
            <a
              title="Github"
              className="text-secondary pull-right nav-link NavbarLink"
              href="https://github.com/front10/landing-page-book/tree/master/src/components/Button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-slack github-link-icon" title="" />
              <span className="d-none d-sm-inline">Slack</span>
            </a>
            <a
              title="Github"
              className="text-secondary pull-right nav-link NavbarLink"
              href="https://github.com/front10/landing-page-book/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github github-link-icon" title="" />
              <span className="d-none d-sm-inline">Github</span>
            </a>
            {/* eslint-enable */}
          </NavbarNav>
        </Navbar>
        {children}
        <Footer
          socialUrl="https://front10.com"
          copyright="Front10, LLC"
          socials={['facebook', 'linkedin', 'google', 'twitter']}
        />
        <style>
          {`/**
            * okaidia theme for JavaScript, CSS and HTML
            * Loosely based on Monokai textmate theme by http://www.monokai.nl/
            * @author ocodia
            */
           code[class*="language-"],
           pre[class*="language-"] {
             color: #f8f8f2!important;
             background: none!important;
             text-shadow: 0 1px rgba(0, 0, 0, 0.3)!important;
             font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace!important;
             text-align: left!important;
             white-space: pre!important;
             word-spacing: normal!important;
             word-break: normal!important;
             word-wrap: normal!important;
             line-height: 1.5!important;
           
             -moz-tab-size: 4!important;
             -o-tab-size: 4!important;
             tab-size: 4!important;
           
             -webkit-hyphens: none!important;
             -moz-hyphens: none!important;
             -ms-hyphens: none!important;
             hyphens: none!important;
             font-size: 14px!important;
             font-weight: 400!important;
           }
           
           /* Code blocks */
           pre[class*="language-"] {
             padding: 1em!important;
             margin: .5em 0!important;
             overflow: auto!important;
             border-radius: 0.3em!important;
           }
           
           :not(pre) > code[class*="language-"],
           pre[class*="language-"] {
             background: #272822!important;
           }
           
           /* Inline code */
           :not(pre) > code[class*="language-"] {
             padding: .1em!important;
             border-radius: .3em!important;
             white-space: normal!important;
           }
           
           pre.prism-code{
            //  background: none!important;
            //  background-color: #1e3952!important;
             color: #fff!important;
             font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace!important;
             font-size: 15px !important;
             font-weight: 400 !important;
             hyphens: none !important;
             line-height: 1.6em !important;
             overflow: auto !important;
             padding: 12px !important;
             tab-size: 2 !important;
             text-align: left !important;
             white-space: pre !important;
             word-break: normal !important;
             word-spacing: normal !important;
             word-wrap: normal !important;
           }

           .token.comment,
           .token.prolog,
           .token.doctype,
           .token.cdata {
             color: slategray!important;
           }
           
           .token.punctuation {
             color: #fefefe!important;
           }
           
           .namespace {
             opacity: .7!important;
           }
           
           .token.property,
           .token.tag,
           .token.constant,
           .token.symbol,
           .token.deleted {
             color: #ff8985!important;
           }
           
           .token.boolean,
           .token.number {
             color: #ae81ff!important;
           }
           
           .token.selector,
           .token.attr-name,
           .token.string,
           .token.char,
           .token.builtin,
           .token.inserted {
             color: #f7d154!important;
           }
           
           .token.operator,
           .token.entity,
           .token.url,
           .language-css .token.string,
           .style .token.string,
           .token.variable {
             color: #f8f8f2!important;
           }
           
           .token.atrule,
           .token.attr-value,
           .token.function,
           .token.class-name {
             color: #45ffa5!important;
           }
           
           .token.keyword {
             color: #66d9ef!important;
           }
           
           .token.regex,
           .token.important {
             color: #fd971f!important;
           }
           
           .token.important,
           .token.bold {
             font-weight: bold!important;
           }
           .token.italic {
             font-style: italic!important;
           }
           
           .token.entity {
             cursor: help!important;
           }
           
           `}
        </style>
      </React.Fragment>
    );
  }
}

MainLayout.propTypes = {
  // route: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
MainLayout.defaultProps = {
  // route: '',
  children: null
};

export default MainLayout;
