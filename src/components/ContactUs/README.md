<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/ContactUs/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>


# ContactUs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/ContactUs` is used to create a contact form.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import ContactUs from '@front10/landing-page-book/dist/components/ContactUs';
import '@front10/landing-page-book/dist/components/ContactUs/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<ContactUs />
```
<a target="_blank" href="https://codesandbox.io/s/w0z992nv5w">
  <img alt="Edit ContactUs demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Properties:

| </br>Name         | </br>Type  | </br>Summary                                                                                                                            |
| ----------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| showText          | `Boolean`  | Show or hide labels to inputs. Default `false`                                                                                          |
| showPlaceholder   | `Boolean`  | Show or hide placeholders to inputs. Default `true`                                                                                     |
| loading           | `Boolean`  | Define if component is loading. Default `false`                                                                                         |
| nameText          | `String`   | Label and placeholder of name input. Default `"Your Name"`                                                                              |
| mailText          | `String`   | Label and placeholder of email input. Default `"Your Email"`                                                                            |
| phoneText         | `String`   | Label and placeholder of phone input. Default `"Your Phone"`                                                                            |
| messageText       | `String`   | Label and placeholder of message input. Default `"Your Message"`                                                                        |
| name              | `String`   | Value of name input. Default `""`                                                                                                       |
| mail              | `String`   | Value of mail input. Default `""`                                                                                                       |
| phone             | `String`   | Value of phone input. Default `""`                                                                                                      |
| message           | `String`   | Value of message input. Default `""`                                                                                                    |
| submitButtonText  | `String`   | Label of submit button. Default `"Submit"`                                                                                              |
| submitButtonAlign | `String`   | Align of Submit button. Default `"center"`                                                                                              |
| apiUrl            | `String`   | Url to send contact data, component make a request via post method and send `name`, `email`, `phone` and `message` params. Default `""` |
| onApiSuccess      | `Function` | Function called when `apiUrl` is defined and request was executed successfully                                                          |
| onApiFail         | `Function` | Function called when `apiUrl` is defined and request was error                                                                          |
| onSubmit          | `Function` | Function called when Submit button has clicked. Params `{name, mail, phone, message}`                                                   |

## Theming variables

| </br>Name                                          | </br>Summary                            | </br>Default |
| -------------------------------------------------- | --------------------------------------- | ------------ |
| --ContactUs\_\_SubmitButton-color                  | Color of button submit                  | `#fff`       |
| --ContactUs\_\_SubmitButton-backgroundColor        | Background color of button submit       | `#065ac5`    |
| --ContactUs\_\_SubmitButton--hover-color           | Hover color of button submit            | `#ffffff`    |
| --ContactUs\_\_SubmitButton--hover-backgroundColor | Hover background color of button submit | `#065ac5`    |
