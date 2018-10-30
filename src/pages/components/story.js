import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from '../layouts/main';
import DetailsComponent from '../../../storybook-utils/components/DetailsComponent';
// import SideBar from '../../../storybook-utils/components/SideBar';
import * as components from '../../stories/mock/components/stories';

import * as nameComponents from '../../components/index';

const elements = [];
Object.keys(nameComponents).map(component => {
  if (component.includes('__') === false) {
    elements.push({
      name: component,
      link: `components/${component.toLowerCase()}`
    });
  }
  return false;
});

class ComponentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: undefined, toggleSideBar: false };
  }

  componentDidMount() {
    const { location } = this.props;
    const component = components[location.search.substring(1)];
    this.setState({ component });
    this.handletoggleSideBar = this.handletoggleSideBar.bind(this);
  }

  handletoggleSideBar(toogle) {
    this.setState({ toggleSideBar: toogle }, () => {
      // const { toggleSideBar } = this.state;
      // const { pagePushedFunction } = this.props;
      // pagePushedFunction(toggleSideBar);
    });
  }

  render() {
    const { component, toggleSideBar } = this.state;
    return (
      <MainLayout pagePushedFunction={this.handlepushedPageLayout}>
        {component && (
          <DetailsComponent
            name={component.name}
            linkGithub={`https://github.com/front10/landing-page-book/tree/master/src/components/${
              component.name
            }`}
            description={component.summary}
            stories={component.stories}
            importCode={component.import}
            pagePushed={toggleSideBar}
          />
        )}
        {/* <SideBar components={elements} sideBarFunction={this.handletoggleSideBar} /> */}
      </MainLayout>
    );
  }
}
ComponentView.propTypes = {
  location: PropTypes.objectOf(PropTypes.any)
};

ComponentView.defaultProps = {
  location: {}
};

export default ComponentView;
