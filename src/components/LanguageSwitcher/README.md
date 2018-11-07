# LanguageSwitcher
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| className | `string` | Class to apply. Default `""` | `''` |
| customLabels | `objectOf` | Configure label of languages. Default `"{}"` | `{}` |
| disabled | `bool` | Disable or enable the component. Default `false` | `false` |
| languages | `arrayOf` | Array of languages to show, an array with countries codes. Default `"[]"`, see example section. The complete list of countries can be found https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js | `[]` |
| onSelect | `func` | Called when language selection change. Params `{language}` | `() => {}` |
| placeholder | `string` | Placeholder to show when not selected language. Default `"Language"` | `'Language'` |
| selectedLanguage | `string` | Selected language. Default `""` | `''` |
| showArrow | `bool` | Show or hide arrow expand. Default `true` | `true` |
| showFlag | `bool` | Show or hide flags. Default `true` | `true` |
| showLabel | `bool` | Show or hide the label of selected language. Default `true` | `false` |
| showOptionLabel | `bool` | Show or hide labels in option list. Default `true` | `true` |