# Label

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Label` is used to create labels.

## How to use
1- Add following content to import the component:
```js
import {Label} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Label label="This is a label"/>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| colon      | `Boolean` | Show or hide colon. Default `false` |
| label      | `String` | Text of label. Default `""` |
| className      | `String` | Class to apply to label. Default `""` |
| htmlFor      | `String` | Id of input. Default `""` |
