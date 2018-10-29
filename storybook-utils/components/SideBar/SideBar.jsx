import React from 'react';
import PropTypes from 'prop-types';
// import { GoRocket } from 'react-icons/go';
// import { Link as LinkScroll, Element } from 'react-scroll';
import { Button } from '../../../src/components';

// import PropsManager from '../PropsManager';
import './style.css';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openSideBar: false };
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.renderChilds = this.renderChilds.bind(this);
  }

  toggleSideBar() {
    const { openSideBar } = this.state;
    this.setState({ openSideBar: !openSideBar }, () => {
      const { sideBarFunction } = this.props;
      const { openSideBar } = this.state;
      return sideBarFunction(openSideBar);
    });
  }

  renderChilds(elements) {
    return elements.map(element => (
      <li key={element.name}>
        <a className={`fa fa-${element.icon}`} href={element.link}>
          {element.name}
        </a>
      </li>
    ));
  }

  render() {
    const { openSideBar } = this.state;
    const { components } = this.props;
    console.info(components);
    return (
      <div
        className={`morph-button morph-button-sidebar morph-button-fixed ${
          openSideBar ? 'active open scroll' : ''
          }`}
      >
        <Button type="button" onClick={this.toggleSideBar}>
          <span className="fa fa-th-large" />
          Components
        </Button>
        <div className="morph-content">
          <div className="content-style-sidebar">
            <span className="fa fa-close" onClick={this.toggleSideBar} />
            <input className="search-box form-control mt-3" type="text" placeholder="Search " />
            <h6 className="text-center mt-3 mb-3">Components</h6>
            <div className="container-ul">
              <ul>{this.renderChilds(components)}</ul>
            </div>
            <h6 className="text-center mt-3 mb-3">Elements</h6>
            <ul className="container-ul">
              <li>
                <a className="fa fa-globe" href="to_global">
                  Global Options
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
SideBar.propTypes = {
  sideBarFunction: PropTypes.func,
  components: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string
      // code: PropTypes.string,
      //     tabsActive: PropTypes.string
    })
  )
};

SideBar.defaultProps = {
  sideBarFunction: () => { },
  components: []
};

export default SideBar;
