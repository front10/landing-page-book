import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

// import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';
import GridComponent from '../../../../storybook-utils/components/GridComponents';
import SideBar from '../../../../storybook-utils/components/SideBar';
import { Navbar, Footer } from '../../../components';
// Import DATA
import { navbarData, elements } from './data/data';
// import { story, importCode } from './data/data';

const stories = storiesOf('Pages', module);

stories.add('Landing Page Book', () => (
  <ThemeSelector>
    <div className="ReactPage">
      <Navbar
        transparent={false}
        fixed
        brandName="Landing Page Book"
        brandLink="https://front10.com/landing-page-book/"
        brandLogo="images/logo/front10.png"
        expand="md"
        rightItems={navbarData.rightItems}
        leftItems={navbarData.leftItems}
      />
      <GridComponent elements={elements} />
      {/* <DetailsComponent
        name="Card"
        linkGithub="https://github.com/front10/landing-page-book/tree/master/src/components/Card"
        description="Cards are surfaces that display content and actions on a single topic. They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy."
        stories={story}
        importCode={importCode}
      /> */}
      <Footer
        socialUrl="https://front10.com"
        copyright="Front10, LLC"
        socials={['facebook', 'linkedin', 'google', 'twitter']}
      />
    </div>
    <SideBar />
  </ThemeSelector>
));
