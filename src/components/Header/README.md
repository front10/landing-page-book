# Header

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Header` is used to show e header.

## How to use
1- Add following content to import the component:
```js
import {Header} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Header>
    This is a header
</Header>
```

## Properties

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| borderBottom      | `Boolean` | Define a border bottom in header. Default `false`|
| className      | `String` | Class name of header. Default `""`|
| type      | `String` | Type of tag element. Default `"h1"`, can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6`|

