import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, array } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import JSXAddon from 'storybook-addon-jsx';

import jsxConfig from '../../mock/jsxConfig';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { Team } from '../../../components';
import Readme from '../../../components/Team/README.md';

const members = [
  {
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Sander',
    job: 'Architect',
    summary:
      'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.',
    profile: 'https://front10.com'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Rachel',
    job: 'QA',
    summary:
      'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.',
    profile: 'https://front10.com'
  },
  {
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Nick',
    job: 'Developer',
    summary:
      'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.',
    profile: 'https://front10.com'
  },
  {
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    name: 'Anna',
    job: 'Developer',
    summary:
      'Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.',
    profile: 'https://front10.com'
  }
];

setAddon(JSXAddon);

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.addWithJSX(
  'Team',
  withReadme([Readme], () => (
    <ThemeSelector>
      <Team
        showBorder={boolean('Show border', true)}
        showName={boolean('Show name', true)}
        showImage={boolean('Show image', true)}
        showJob={boolean('Show job', true)}
        showSummary={boolean('Show summary', true)}
        imageCircle={boolean('Image circle', true)}
        imageBorder={boolean('Image border', false)}
        socialGray={boolean('Social gray', false)}
        contentAlign={select(
          'Content align',
          {
            center: 'center',
            left: 'left',
            right: 'right'
          },
          'center'
        )}
        members={members}
        socials={array('Socials', ['facebook', 'linkedin', 'google', 'twitter'], ',')}
      />
    </ThemeSelector>
  )),
  jsxConfig
);
