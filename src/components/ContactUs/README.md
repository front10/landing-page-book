# ContactUs
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| apiUrl | `string` | Url to send contact data, component make a request via post method and send `name`, `email`, `phone` and `message` params. Default `""` | `''` |
| loading | `bool` | Define if component is loading. Default `false` | `false` |
| mail | `string` | Value of mail input. Default `""` | `''` |
| mailText | `string` | Label and placeholder of email input. Default `"Your Email"` | `'Your Email'` |
| message | `string` | Value of message input. Default `""` | `''` |
| messageText | `string` | Label and placeholder of message input. Default `"Your Message"` | `'Your Message'` |
| name | `string` | Value of name input. Default `""` | `''` |
| nameText | `string` | Label and placeholder of name input. Default `"Your Name"` | `'Your Name'` |
| onApiFail | `func` | Function called when `apiUrl` is defined and request was error | `() => {}` |
| onApiSuccess | `func` | Function called when `apiUrl` is defined and request was executed successfully | `() => {}` |
| onSubmit | `func` | Function called when Submit button has clicked. Params `{name, mail, phone, message}` | `() => {}` |
| phone | `string` | Value of phone input. Default `""` | `''` |
| phoneText | `string` | Label and placeholder of phone input. Default `"Your Phone"` | `'Your Phone'` |
| showPlaceholder | `bool` | Show or hide placeholders to inputs. Default `true` | `true` |
| showText | `bool` | Show or hide labels to inputs. Default `false` | `false` |
| submitButtonAlign | `string` | Align of Submit button. Default `"center"` | `'center'` |
| submitButtonColor | `string` | Color of Submit button. Default `"default"` | `'default'` |
| submitButtonText | `string` | Label of submit button. Default `"Submit"` | `'Submit'` |