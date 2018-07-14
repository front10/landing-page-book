# ContactUs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/ContactUs` is used to create a contact form.

## How to use
1- Add following content to import the component:
```js
import {ContactUs} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<ContactUs />
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showText      | `Boolean` | Show or hide labels to inputs. Default `false` |
| showPlaceholder      | `Boolean` | Show or hide placeholders to inputs. Default `true` |
| nameText      | `String` | Label and placeholder of name input. Default `"Your Name"` |
| mailText      | `String` | Label and placeholder of email input. Default `"Your Email"` |
| phoneText      | `String` | Label and placeholder of phone input. Default `"Your Phone"` |
| messageText      | `String` | Label and placeholder of message input. Default `"Your Message"` |
| name      | `String` | Value of name input. Default `""` |
| mail      | `String` | Value of mail input. Default `""` |
| phone      | `String` | Value of phone input. Default `""` |
| message      | `String` | Value of message input. Default `""` |
| submitButtonText      | `String` | Label of submit button. Default `"Submit"` |
| submitButtonAlign      | `String` | Align of Submit button. Default `"center"` |
| onSubmit      | `Function` | Function called when Submit button has clicked. Params `{name, mail, phone, message}` |
