# ContactUs
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| apiUrl | `string` | Url to send contact data, component make a request via post method and send <code>name</code>, <code>email</code>, <code>phone</code> and <code>message</code> params | `''` |
| className | `string` | Class to apply to icon | `''` |
| loading | `bool` | Define if component is loading | `false` |
| mail | `string` | Value of mail input | `''` |
| mailText | `string` | Label and placeholder of email input | `'Your Email'` |
| message | `string` | Value of message input | `''` |
| messageText | `string` | Label and placeholder of message input | `'Your Message'` |
| name | `string` | Value of name input | `''` |
| nameText | `string` | Label and placeholder of name input | `'Your Name'` |
| onApiFail | `func` | Function called when <code>apiUrl</code> is defined and request was error | `() => {}` |
| onApiSuccess | `func` | Function called when <code>apiUrl</code> is defined and request was executed successfully | `() => {}` |
| onSubmit | `func` | Function called when Submit button has clicked. Params <code>{name, mail, phone, message}</code> | `() => {}` |
| phone | `string` | Value of phone input | `''` |
| phoneText | `string` | Label and placeholder of phone input | `'Your Phone'` |
| showPlaceholder | `bool` | Show or hide placeholders to inputs | `true` |
| showText | `bool` | Show or hide labels to inputs | `false` |
| style | `objectOf` | Css style applied to the component | `null` |
| submitButtonAlign | `string` | Align of Submit button | `'center'` |
| submitButtonColor | `string` | Color of Submit button | `'default'` |
| submitButtonText | `string` | Label of submit button | `'Submit'` |