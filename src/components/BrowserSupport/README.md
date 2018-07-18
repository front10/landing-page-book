# BrowserSupport

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/BrowserSupport` is used to create an array of browsers.

## How to use
1- Add following content to import the component:
```js
import {BrowserSupport} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<BrowserSupport items={browsers}/>
```

## Example
```js
const browsers = [{
	type: "firefox",
	version: "> 56"
},{
	type: "chrome",
	version: "= 62"
},{
	type: "iexplore",
	version: "> 9"
},{
	type: "safari",
	version: "> 25"
},{
	type: "netscape",
	version: "> 42.6"
},{
	type: "opera",
	version: "< 15.6"
},{
	type: "maxthon",
	version: ">= 10"
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showText      | `Boolean` | Show or hide text in browsers. Default `true` |
| items      | `Array` | Array of browsers. Default `[]`, see example section |