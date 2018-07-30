import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import withReadme from 'storybook-readme/with-readme';
import { ThemeSelector } from '../../../addons/ThemeSwitcher';

import { BuiltWith } from '../../../components';
import Readme from '../../../components/BuiltWith/README.md';

const companies = [{
  image: 'https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png',
}, {
  image: 'https://qph.fs.quoracdn.net/main-qimg-5f4deb2eafbed371d07b24cfe4a11f6e',
}, {
  image: 'http://iol13.linguistics-bg.com/wp-content/uploads/2015/05/Coca-Cola-Logo-Red.png',
}, {
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQizYke0pb5GJsX7q7EhWSIKAcGNZv53eI2H_TTPfF3p5IKNpx',
}, {
  image: 'https://i.pinimg.com/originals/de/fd/43/defd4347f12a7fa7bbfa192be11532d6.png',
}];

const stories = storiesOf('Components', module);

stories.addDecorator(withKnobs);

stories.add('BuiltWith', withReadme([Readme], () => {
  return (
    <ThemeSelector>
      <div className="container">
        <BuiltWith
          gray={boolean('Use gray', true)}
          companies={companies}
        />
      </div>
    </ThemeSelector>
  );
}));
