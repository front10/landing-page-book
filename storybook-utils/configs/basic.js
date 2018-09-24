import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import paddingDecorator from '../decorators/paddingDecorator';

export default function(options) {
  const { loadStories, uiOptions } = options;

  addDecorator(paddingDecorator);

  configure(loadStories, module);

  setOptions(uiOptions);
}
