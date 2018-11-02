# Button
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| active | `bool` | Define if button is active. Default `false` | `false` |
| ariaLabel | `string` | Aria label of the button. Default `""` | `''` |
| children | `union` | Button styles. Default `""` | `null` |
| circle | `bool` | Show circle button. Default `false` | `false` |
| className | `string` | Class to apply to button. Default `""` | `''` |
| color | `string` | Color to apply to button. Default `"default"` | `'light'` |
| disabled | `bool` | Disable or enable button. Default `false` | `false` |
| loading | `bool` | Show loading mode. Default `false` | `false` |
| loadingClass | `string` | Class to show loading indicator. Default `"fa fa-circle-o-notch fa-spin"` | `'fa fa-circle-o-notch fa-spin'` |
| onClick | `func` | Called when button is clicked | `() => {}` |
| outline | `bool` | Define if button is only with border. Default `false` | `false` |
| rounded | `bool` | Show rounded button. Default `true` | `true` |
| size | `string` | Button size, can be `lg` or `sm`. Default `""` | `''` |
| style | `objectOf` |  | `{}` |
| tooltip | `string` | Button tooltip. Default `""` | `''` |
| type | `string` | Type of the button. Default `"button"` | `'button'` |