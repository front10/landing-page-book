import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';
import jsxConfig from '../../mock/jsxConfig';
import { Footer, Social, Copyright } from '../../../components';
import Readme from '../../../components/Footer/README.md';

const sections = [
  {
    name: 'Features',
    sections: [
      {
        name: 'Cool stuff',
        url: 'https://front10.com'
      },
      {
        name: 'Random feature',
        url: 'https://front10.com'
      },
      {
        name: 'Team feature',
        url: 'https://front10.com'
      },
      {
        name: 'Stuff for developers',
        url: 'https://front10.com'
      },
      {
        name: 'Another one',
        url: 'https://front10.com'
      },
      {
        name: 'Last time',
        url: 'https://front10.com'
      }
    ]
  },
  {
    name: 'Resources',
    sections: [
      {
        name: 'Resource',
        url: 'https://front10.com'
      },
      {
        name: 'Resource name',
        url: 'https://front10.com'
      },
      {
        name: 'Another resource',
        url: 'https://front10.com'
      },
      {
        name: 'Final resource',
        url: 'https://front10.com'
      }
    ]
  },
  {
    name: 'About',
    sections: [
      {
        name: 'Team',
        url: 'https://front10.com'
      },
      {
        name: 'Locations',
        url: 'https://front10.com'
      },
      {
        name: 'Privacy',
        url: 'https://front10.com'
      },
      {
        name: 'Terms',
        url: 'https://front10.com'
      }
    ]
  }
];

setAddon(JSXAddon);
const stories = storiesOf('Components/Footer', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Default',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Footer
        socialGray={boolean('Social gray', false)}
        socialRounded={boolean('Social rounded', true)}
        socialUrl={text('Social url', 'https://front10.com')}
        copyright={text('Copyright', 'Front10, Inc')}
        socials={array('Socials', ['facebook', 'linkedin', 'google', 'twitter'], ',')}
        sections={sections}
      />
    </ThemeSelector>
  )),
  jsxConfig
);

stories.addWithJSX(
  'Children',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Footer>
        <div className="row">
          <div className="col-sm-12 col-md">
            <Copyright text="Front10, Inc" showAllRightText={false} />
          </div>
          <div className="col-sm-12 col-md mt-3 mt-md-0">
            <img src="https://front10.com/img/logos/logo-main.png" width={80} alt="Front 10 logo" />
          </div>
          <div className="col-sm-12 col-md mt-3 mt-md-0">
            <Social type="twitter" url="https://front10.com" gray />
            <Social type="facebook" url="https://front10.com" gray />
            <Social type="linkedin" url="https://front10.com" gray />
          </div>
        </div>
      </Footer>
    </ThemeSelector>
  )),
  jsxConfig
);
