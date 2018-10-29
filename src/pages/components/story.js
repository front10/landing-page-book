import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from '../layouts/main';
import DetailsComponent from '../../../storybook-utils/components/DetailsComponent';
import * as components from '../../stories/mock/components/stories';

class ComponentView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { component: undefined };
  }

  componentDidMount() {
    const { location } = this.props;
    const component = components[location.search.substring(1)];
    this.setState({ component });
  }

  render() {
    const { component } = this.state;
    return (
      <MainLayout>
        {component && (
          <DetailsComponent
            name={component.name}
            linkGithub={`https://github.com/front10/landing-page-book/tree/master/src/components/${
              component.name
            }`}
            description={component.summary}
            stories={component.stories}
            importCode={component.import}
          />
        )}
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
