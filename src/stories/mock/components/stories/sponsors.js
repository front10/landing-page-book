export default {
  name: 'Sponsors',
  summary:
    'A person or organization that provides funds for you project or activity, give them an acknowledgment.',
  import: '',
  extractProps: ['image'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Sponsors
    gray
    sponsors={[
        { image: '/images/sponsors/facebook.png' },
        { image: '/images/sponsors/google.png' },
        { image: '/images/sponsors/twitter.png' },
        { image: '/images/sponsors/salesforce.png' },
        { image: '/images/sponsors/amazon.png' }
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
