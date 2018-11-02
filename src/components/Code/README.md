# Code
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| children | `union` | Array of element to show inside Code | `null` |
| code<font color="red">*</font> | `string` | Code to show on component, Default `Js code example` |  |
| codeLink | `string` | Link to code, ex: CodeSandbox, CodePen. Default `""` | `''` |
| collapsed | `bool` | Define if component is collapsed, Default `false` | `false` |
| collapsible | `bool` | Define if component is collapsible, Default `false` | `false` |
| languageCode | `string` | language in which the code is written to embellish the syntax, Default `javascript` | `'javascript'` |
| lineNumbers | `bool` | Shows line numbers, Default `true` | `true` |
| readOnly | `bool` | No allow to change the code, Default `false` | `false` |
| showCopyButton | `bool` | Show or hide copy button, Default `true` | `true` |
| showDeleteButton | `bool` | Show or hide delete button, Default `true` | `true` |
| showheader | `bool` | Shows header bar, Default `true` | `true` |
| theme | `string` | Theme of code, Default `"idea"` | `'monokai'` |
| updateCode | `func` | Function to handle the change made in the code. | `() => {}` |