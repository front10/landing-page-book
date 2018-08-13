# Input

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Input` is used to create input.

## How to use

1- Add following content to import the component:

```js
import { Input } from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:

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
