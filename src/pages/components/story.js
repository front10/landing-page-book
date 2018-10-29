import React from 'react';

import ContainerLayout from '../layouts/container';
import DetailsComponent from '../../../storybook-utils/components/DetailsComponent';
import { navbarData, story, importCode } from '../../stories/pages/landing-page-book/data/data';

class ComponentView extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <ContainerLayout>
        {/* Here story on component {location.search.substring(1)} !!!! */}
        {
          <DetailsComponent
            name="Card"
            linkGithub="https://github.com/front10/landing-page-book/tree/master/src/components/Card"
            description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
            stories={story}
            importCode={importCode}
          />
        }
      </ContainerLayout>
    );
  }
}

export default ComponentView;
