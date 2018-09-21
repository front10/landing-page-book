# Browser

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Browser` is used to show a browser with version.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Browser from "@front10/landing-page-book/dist/components/Browser";
import "@front10/landing-page-book/dist/components/Browser/style.css";
```
or

```js
import { Browser } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
```html
<Browser vendor="chrome"/>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showText      | `Boolean` | Define if text is show. Default `true`|
| vendor      | `String` | Vendor of button. Default `""`, can be `firefox`, `chrome`, `iexplore`, `safari`, `opera`, `maxthon`, `flock`|
| version      | `String` | Version of browser. Default `""`|
