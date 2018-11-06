export default {
  name: 'Input',
  summary:
    'The Label defines a label for an Input element. The Label element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the Label element, it toggles the control. The for attribute of the Label should be equal to the id attribute of the related element to bind them together.',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Label content="This is a label" />`,
      tabsActive: ['code']
    }
  ]
};
