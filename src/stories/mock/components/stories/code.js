export default {
  name: 'Code',
  summary: 'Show code chunks can help to quickly explain the most complicated stuff ;)',
  import: '',
  stories: [
    {
      name: 'Basic',
      summary: '',
      code: `<Code
    languageCode="jsx"
    collapsible
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Code Simple',
      summary: '',
      code: `<Code
    languageCode="jsx"
    lineNumbers
    showheader
    collapsible={false}
    showCopyButton={false}
    showDeleteButton={false}
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`,
      tabsActive: ['code']
    },
    {
      name: 'Code Simple',
      summary: '',
      code: `<Code
    languageCode="css"
    readOnly={false}
    lineNumbers
    showheader={false}
    collapsible
    showCopyButton
    showDeleteButton
    codeLink="https://codesandbox.io/s/pmjvk5wl27"
    code=""
/>`,
      tabsActive: ['code']
    }
  ]
};
