import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
// import { withKnobs, select, text, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import jsxConfig from '../../mock/jsxConfig';
import { Card, Link, Icon } from '../../../components';

setAddon(JSXAddon);

const stories = storiesOf('Introduction', module);

// stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Showcase',
  withReadme([], () => (
    <ThemeSelector>
      <h1>Showcase</h1>
      <div className="row">
        <div className="col-6 col-md-6 col-lg-6">
          <Card
            image="images/showcase/get-landing-page-book.png"
            subTitle="Landing page book it’s an react components library with more than 40 components and elements. This library is based en react 16.2 and was wrote with ES6."
            imageCircle={false}
            title="Get Landing Page Book"
            contentAlign="left"
          >
            <Link
              href="https://front10.com/get-landing-page-book/"
              tooltip="View web site"
              target="__blank"
            >
              <Icon icon="fa fa-view" />
              <span>See more ...</span>
            </Link>
          </Card>
        </div>
      </div>
    </ThemeSelector>
  )),
  jsxConfig
);
