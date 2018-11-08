export default {
  name: 'Donation',
  summary:
    'Something that is given to a charity, especially a sum of money. Allow your users to donate easily and safely.',
  import: ``,
  withStyles: true,
  extractProps: ['image'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Donation url="https://opencollective.com/webpack/donate" />`,
      tabsActive: ['code']
    }
  ]
};
