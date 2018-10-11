<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Label/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Label

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Label` is used to create labels.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Label from '@front10/landing-page-book/dist/components/Label';
import '@front10/landing-page-book/dist/components/Label/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Label label="This is a label"/>
```

## Properties

| </br>Name | </br>Type | </br>Summary                          |
| --------- | --------- | ------------------------------------- |
| colon     | `Boolean` | Show or hide colon. Default `false`   |
| label     | `String`  | Text of label. Default `""`           |
| className | `String`  | Class to apply to label. Default `""` |
| htmlFor   | `String`  | Id of input. Default `""`             |

## Theming variables

| </br>Name        | </br>Summary       | </br>Default |
| ---------------- | ------------------ | ------------ |
| --Label-fontSize | Font size of label | `0.7rem`     |
