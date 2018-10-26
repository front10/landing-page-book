import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent'
import { Navbar } from '../../../components';
// Import DATA
import { navbarData } from './data/navbar';

const stories = storiesOf('Pages', module);

stories.add('Landing Page Book', () => (
  <ThemeSelector theme="react">
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
      <DetailsComponent />
    </div>
  </ThemeSelector>
));
