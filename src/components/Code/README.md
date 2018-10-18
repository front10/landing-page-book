<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Code/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

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

| </br>Name        | </br>Type | </br>Summary                                                                        |
| ---------------- | --------- | ----------------------------------------------------------------------------------- |
| readOnly         | `Boolean` | No allow to change the code, Default `false`                                        |
| lineNumbers      | `Boolean` | Shows line numbers, Default `true`                                                  |
| showheader       | `Boolean` | Shows header bar, Default `true`                                                    |
| showfooter       | `Boolean` | Shows footer bar, Default `true`                                                    |
| collapsible      | `Boolean` | Define if component is collapsible, Default `false`                                 |
| collapsed        | `Boolean` | Define if component is collapsed, Default `false`                                   |
| showCopyButton   | `Boolean` | Show or hide copy button, Default `true`                                            |
| showDeleteButton | `Boolean` | Show or hide delete button, Default `true`                                          |
| code             | `String`  | Code to show on component, Default `Js code example`                                |
| theme            | `String`  | Theme of code, Default `"idea"`                                                     |
| languageCode     | `String`  | language in which the code is written to embellish the syntax, Default `javascript` |
| codeLink         | `String`  | Link to code, ex: CodeSandbox, CodePen. Default `""`                                |
| updateCode       | `func`    | Function to handle the change made in the code.                                     |

## Theming variables

| </br>Name                              | </br>Summary                    | </br>Default  |
| -------------------------------------- | ------------------------------- | ------------- |
| --CodeMirror\_\_header_with            | Code's header width             | `100%`        |
| --CodeMirror\_\_header_height          | Code's header height            | `45px`        |
| --CodeMirror\_\_header_backgroundColor | Code's header background color  | `#304148`     |
| --CodeMirror\_\_header_color           | Color from header's buttons     | `#fed136`     |
| --CodeMirror\_\_height                 | Height of Code                  | `auto`        |
| --CodeMirror\_\_font_family            | Code's font family              | `Lato`        |
| --CodeMirror\_\_Btn-background-color   | Code's buttons background color | `transparent` |
| --CodeMirror\_\_Btn-padding            | Code's buttons padding          | `6px 20px`    |
| --CodeMirror\_\_Container-border       | Code's container border         | `6px 20px`    |
| --CodeMirror-fontSize                  | Code font size                  | `16px`        |
| --CodeMirror\_\_Footer-backgroundColor | Code footer background color    | `transparent` |
| --CodeMirror\_\_Footer-color           | Code footer color               | `#304148`     |
| --CodeMirror-borderRadius              | Code border radius              | `5px`         |
