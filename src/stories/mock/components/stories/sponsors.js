export default {
  name: 'Sponsors',
  summary:
    'A person or organization that provides funds for you project or activity, give them an acknowledgment.',
  import: '',
  withStyles: true,
  extractProps: ['image'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Sponsors
    imageCssFilter="grayscale(100%)"
    sponsors={[
        { image: 'https://front10.com/landing-page-book/images/sponsors/facebook.png' },
        { image: 'https://front10.com/landing-page-book/images/sponsors/google.png' },
        { image: 'https://front10.com/landing-page-book/images/sponsors/twitter.png' },
        { image: 'https://front10.com/landing-page-book/images/sponsors/salesforce.png' },
        { image: 'https://front10.com/landing-page-book/images/sponsors/amazon.png' }
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
