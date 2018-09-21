# Header

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Header` is used to show e header.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Header from "@front10/landing-page-book/dist/components/Header";
import "@front10/landing-page-book/dist/components/Header/style.css";
```
or

```js
import { Header } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
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

