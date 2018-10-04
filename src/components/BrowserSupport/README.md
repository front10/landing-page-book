# BrowserSupport

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/BrowserSupport` is used to create an array of browsers.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import BrowserSupport from "@front10/landing-page-book/dist/components/BrowserSupport";
import "@front10/landing-page-book/dist/components/BrowserSupport/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<BrowserSupport browsers={browsers}/>
```
<a target="_blank" href="https://codesandbox.io/s/j76zk2k8ow">
  <img alt="Edit Browser support" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Example
```js
const browsers = [{
	vendor: "firefox",
	version: "> 56"
},{
	vendor: "chrome",
	version: "= 62"
},{
	vendor: "iexplore",
	version: "> 9"
},{
	vendor: "safari",
	version: "> 25"
},{
	vendor: "netscape",
	version: "> 42.6"
},{
	vendor: "opera",
	version: "< 15.6"
},{
	vendor: "maxthon",
	version: ">= 10"
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showText      | `Boolean` | Show or hide text in browsers. Default `true` |
| browsers      | `Array` | Array of browsers. Default `[]`, see example section |