export default {
  name: 'Header',
  summary:
    'Search engines use the headings to index the structure and content of your web pages. Users skim your pages by its headings. It is important to use headings to show the document structure.',
  import: '',
  withStyles: true,
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<React.Fragment>
    <Header type="h1">h1. Landing Page Heading</Header>
    <Header type="h2">h2. Landing Page Heading</Header>
    <Header type="h3">h3. Landing Page Heading</Header>
    <Header type="h4">h4. Landing Page Heading</Header>
    <Header type="h5">h5. Landing Page Heading</Header>
    <Header type="h6">h6. Landing Page Heading</Header>
</React.Fragment>`,
      tabsActive: ['code']
    }
  ]
};
