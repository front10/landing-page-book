export default {
  name: 'Image List',
  summary: 'Easy way to show an image list on your website.',
  import: ``,
  withStyles: true,
  extractProps: ['image'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<ImageList 
    imageCssFilter="grayscale(100%)"
    images={[
        {image: 'https://front10.com/landing-page-book/images/image-list/react.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/graphql.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/apollo.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/storybook.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/angularjs.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/bootstrap.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/browserstack.png'},
        {image: 'https://front10.com/landing-page-book/images/image-list/jest.png'}
    ]}
/>`,
      tabsActive: ['code']
    }
  ]
};
