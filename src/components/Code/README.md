# Code

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Code` is used to write/show code in many language.

## How to use

1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Code from "@front10/landing-page-book/dist/components/Code";
import "@front10/landing-page-book/dist/components/Code/style.css";
```
or

```js
import { Code } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page

```html
<Code />
```

## Properties

| </br>Name    | </br>Type | </br>Summary                                                                        |
| ------------ | --------- | ----------------------------------------------------------------------------------- |
| bgColorDark  | `Boolean` | Shows background color dark, Default `false`                                        |
| readOnly     | `Boolean` | No allow to change the code, Default `false`                                        |
| lineNumbers  | `Boolean` | Shows line numbers, Default `true`                                                  |
| showheader   | `Boolean` | Shows header bar, Default `true`                                                    |
| showfooter   | `Boolean` | Shows footer bar, Default `true`                                                    |
| code         | `String`  | Code to show on component, Default `Js code example`                                |
| theme        | `String`  | Theme of code, Default `"idea"`                                                     |
| languageCode | `String`  | language in which the code is written to embellish the syntax, Default `javascript` |
| updateCode   | `func`    | Function to handle the change made in the code.                                     |
