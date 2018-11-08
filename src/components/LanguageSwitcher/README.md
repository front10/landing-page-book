# LanguageSwitcher
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| className | `string` | Class to apply. | `''` |
| customLabels | `objectOf` | Configure label of languages. | `{}` |
| disabled | `bool` | Disable or enable the component. | `false` |
| languages | `arrayOf` | Array of languages to show, an array with countries codes. The complete list of countries can be found https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js | `[]` |
| onSelect | `func` | Called when language selection change. Params `{language}` | `() => {}` |
| placeholder | `string` | Placeholder to show when not selected language. | `'Language'` |
| selectedLanguage | `string` | Selected language. | `''` |
| showArrow | `bool` | Show or hide arrow expand. | `true` |
| showFlag | `bool` | Show or hide flags. | `true` |
| showLabel | `bool` | Show or hide the label of selected language. | `false` |
| showOptionLabel | `bool` | Show or hide labels in option list. | `true` |