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
    code="<button>Button</button>"
/>`,
      tabsActive: ['code'],
      cssVariables: [
        '--CodeMirror__header_with',
        '--CodeMirror__header_height',
        '--CodeMirror__header_backgroundColor',
        '--CodeMirror__header_color',
        '--CodeMirror__height',
        '--CodeMirror__font_family',
        '--CodeMirror__Btn-background-color',
        '--CodeMirror__Btn-padding',
        '--CodeMirror__Container-border',
        '--CodeMirror-fontSize',
        '--CodeMirror__Footer-backgroundColor',
        '--CodeMirror__Footer-color',
        '--CodeMirror-borderRadius'
      ]
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
    code="<button>Button</button>"
/>`,
      tabsActive: ['code'],
      cssVariables: [
        '--CodeMirror__header_with',
        '--CodeMirror__header_height',
        '--CodeMirror__header_backgroundColor',
        '--CodeMirror__header_color',
        '--CodeMirror__height',
        '--CodeMirror__font_family',
        '--CodeMirror__Btn-background-color',
        '--CodeMirror__Btn-padding',
        '--CodeMirror__Container-border',
        '--CodeMirror-fontSize',
        '--CodeMirror__Footer-backgroundColor',
        '--CodeMirror__Footer-color',
        '--CodeMirror-borderRadius'
      ]
    },
    {
      name: 'Code css',
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
    code=".my-css{color: red;}"
/>`,
      tabsActive: ['code'],
      cssVariables: [
        '--CodeMirror__header_with',
        '--CodeMirror__header_height',
        '--CodeMirror__header_backgroundColor',
        '--CodeMirror__header_color',
        '--CodeMirror__height',
        '--CodeMirror__font_family',
        '--CodeMirror__Btn-background-color',
        '--CodeMirror__Btn-padding',
        '--CodeMirror__Container-border',
        '--CodeMirror-fontSize',
        '--CodeMirror__Footer-backgroundColor',
        '--CodeMirror__Footer-color',
        '--CodeMirror-borderRadius'
      ]
    }
  ]
};
