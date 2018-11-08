export default {
  name: 'Contact Us',
  summary: 'Simple contact form, so that your users communicate easily through your website.',
  import: ``,
  withStyles: true,
  extractProps: ['input', 'button'],
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<ContactUs
    showText
    showPlaceholder
    apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"
/>`,
      tabsActive: ['code']
    }
  ]
};
