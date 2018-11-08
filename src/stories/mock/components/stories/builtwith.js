export default {
  name: 'Built With',
  summary: 'Libraries or projects that you used to achieve your goals.',
  withStyles: true,
  extractProps: ['image'],
  import: ``,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<BuiltWith
    gray
    companies={[
        { image: '/images/buildwith/bootstrap.png' },
        { image: '/images/buildwith/browserstack.png' },
        { image: '/images/buildwith/jest.png' },
        { image: '/images/buildwith/react.png' },
        { image: '/images/buildwith/storybook.png' }
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
