# Code

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Code` is used to write/show code in many language.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Importing font-awesome or any other font (Optional)

```js
import 'font-awesome/css/font-awesome.min.css';
```

3- Add following content to import the component:

```js
import Code from '@front10/landing-page-book/dist/components/Code';
import '@front10/landing-page-book/dist/components/Code/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page

```html
<Code />
```

<a target="_blank" href="https://codesandbox.io/s/pmjvk5wl27">
  <img alt="Edit Code demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Properties

| </br>Name    | </br>Type | </br>Summary                                                                        |
| ------------ | --------- | ----------------------------------------------------------------------------------- |
| readOnly     | `Boolean` | No allow to change the code, Default `false`                                        |
| lineNumbers  | `Boolean` | Shows line numbers, Default `true`                                                  |
| showheader   | `Boolean` | Shows header bar, Default `true`                                                    |
| showfooter   | `Boolean` | Shows footer bar, Default `true`                                                    |
| code         | `String`  | Code to show on component, Default `Js code example`                                |
| theme        | `String`  | Theme of code, Default `"idea"`                                                     |
| languageCode | `String`  | language in which the code is written to embellish the syntax, Default `javascript` |
| updateCode   | `func`    | Function to handle the change made in the code.                                     |

## Theming variables

| </br>Name                               | </br>Summary                          | </br>Default     |
| --------------------------------------- | ------------------------------------- | ---------------- |
| --CodeMirror\_\_lines_backgroundColor   | Code's lines background color         | `#fff`           |
| --CodeMirror\_\_header_with             | Code's header width                   | `100%`           |
| --CodeMirror\_\_header_height           | Code's header height                  | `45px`           |
| --CodeMirror\_\_header_backgroundColor  | Code's header background color        | `#dcdcdc`        |
| --CodeMirror\_\_footer_with             | Code's footer width                   | `100%`           |
| --CodeMirror\_\_footer_height           | Code's footer height                  | `15px`           |
| --CodeMirror\_\_footer_backgroundColor  | Code's footer bacground color         | `#dcdcdc`        |
| --CodeMirror\_\_header_copybtn_margin   | Margin of copy button in header       | `10px -10px 0 0` |
| --CodeMirror\_\_header_deletebtn_margin | Margin of clear code button in header | `10px 0 0 0`     |
| --CodeMirror\_\_height                  | Height of Code                        | `250px`          |
| --CodeMirror\_\_font_family             | Code's font family                    | `Lato`           |
