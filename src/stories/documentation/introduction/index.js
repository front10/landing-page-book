import React from 'react';
import { storiesOf } from '@storybook/react';
// import Markdown from 'wix-storybook-utils/Markdown';
import Markdown from '../../../../storybook-utils/components/Markdown';
import Readme from '../../../../readme.md';

storiesOf('Introduction', module).add('Getting Started', () => <Markdown source={Readme} />);
