export default {
  name: 'Browser',
  summary: 'Show the browser logo with the version.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Browser vendor="chrome" version=">= 20.0" />`,
      tabsActive: ['code']
    }
  ]
};
