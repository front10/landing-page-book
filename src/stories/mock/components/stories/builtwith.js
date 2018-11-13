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
    imageCssFilter="grayscale(100%)"
    companies={[
        { image: 'https://front10.com/landing-page-book/images/buildwith/bootstrap.png' },
        { image: 'https://front10.com/landing-page-book/images/buildwith/browserstack.png' },
        { image: 'https://front10.com/landing-page-book/images/buildwith/jest.png' },
        { image: 'https://front10.com/landing-page-book/images/buildwith/react.png' },
        { image: 'https://front10.com/landing-page-book/images/buildwith/storybook.png' }
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
