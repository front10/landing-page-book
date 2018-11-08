# Code
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| buttonBgColor | `string` | Background color of the buttons in the header | `'dark'` |
| buttonBorderNone | `bool` | Hide or show buttons border | `true` |
| buttonPaddingBottom | `string` | Paddin bottom of the buttons in the header | `'0'` |
| buttonPaddingTop | `string` | Paddin top of the buttons in the header | `'0'` |
| buttonTextColor | `string` | Color of the buttons in the header | `'warning'` |
| children | `union` | Array of element to show inside Code | `null` |
| code<font color="red">*</font> | `string` | Code to show on component |  |
| codeLink | `string` | Link to code, ex: CodeSandbox, CodePen | `''` |
| collapsed | `bool` | Define if component is collapsed | `false` |
| collapsible | `bool` | Define if component is collapsible | `false` |
| languageCode | `string` | language in which the code is written to embellish the syntax | `'javascript'` |
| lineNumbers | `bool` | Shows line numbers | `true` |
| readOnly | `bool` | No allow to change the code | `false` |
| showCopyButton | `bool` | Show or hide copy button | `true` |
| showDeleteButton | `bool` | Show or hide delete button | `true` |
| showheader | `bool` | Shows header bar | `true` |
| theme | `string` | Theme of code | `'monokai'` |
| updateCode | `func` | Function to handle the change made in the code. | `() => {}` |