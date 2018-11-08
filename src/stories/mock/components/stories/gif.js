export default {
  name: 'Gif',
  summary:
    'A lossless format for image files that supports both animated and static images, Its one of the most used image format on web.',
  import: '',
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Gif image="/images/gif/write.gif" preview="/images/demo/develop.png" />`,
      tabsActive: ['code']
    },
    {
      name: 'Autoplay',
      summary: '',
      code: `<Gif image="/images/gif/write.gif" preview="/images/demo/develop.png" autoplay />`,
      tabsActive: []
    }
  ]
};
