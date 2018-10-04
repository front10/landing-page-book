import React from 'react';
import { storiesOf } from '@storybook/react';
// import Markdown from 'wix-storybook-utils/Markdown';
import Markdown from '../../../../storybook-utils/components/Markdown';
import Readme from '../../../../theming.md';

storiesOf('Introduction', module).add('Theming', () => <Markdown source={Readme} />);
