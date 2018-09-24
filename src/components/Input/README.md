# Input

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Input` is used to create input.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

2- Importing font-awesome or any other font (Optional)

```js
import "font-awesome/css/font-awesome.min.css";
```

3- Add following content to import the component:

```js
import Input from "@front10/landing-page-book/dist/components/Input";
import "@front10/landing-page-book/dist/components/Input/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page:

```html
<Input />
```

## Properties:

| </br>Name   | </br>Type  | </br>Summary                                                                  |
| ----------- | ---------- | ----------------------------------------------------------------------------- |
| labelColon  | `Boolean`  | Show or hide `:` in label. Default `false`                                    |
| className   | `String`   | Class to apply to input. Default `""`                                         |
| type        | `String`   | Input type. Default `"text"`, can be `text`, `number`, `email` and `textarea` |
| id          | `String`   | Input id. Default `""`                                                        |
| name        | `String`   | Input name. Default `""`                                                      |
| value       | `String`   | Input value. Default `""`                                                     |
| placeholder | `String`   | Input placeholder. Default `""`                                               |
| label       | `String`   | Label to show on input top. Default `""`                                      |
| icon        | `String`   | Icon to show with input. Default `""`                                         |
| iconAlign   | `String`   | Align of icon. Default `"left"`, can be `"left"` and `"right"`                |
| onChange    | `Function` | Called when input change. Params `{value}`                                    |
