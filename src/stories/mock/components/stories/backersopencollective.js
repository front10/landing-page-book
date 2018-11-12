export default {
  name: 'Backers Open Collective',
  summary:
    'A person, institution, or country that supports something, especially financially throw opencollective platform. Its important show the people who support your idea.',
  import: ``,
  withStyles: true,
  extractProps: ['icon', 'backer'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<BackersOpenCollective collective="webpack" />`,
      tabsActive: ['code']
    }
  ]
};
