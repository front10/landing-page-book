# Header

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Header` is used to create a nav-bar component.

## How to use
1- Add following content to import the component:
```js
import {Header} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Header rightItems={rightItems}
        leftItems={leftItems}/>
```

## Example
```js
const leftItems = [{
	title: "Google",
	href: "https://google.com",
	target: "_blank",
	icon: "fa fa-google"
}, {
	title: "Facebook",
	href: "https://facebook.com",
	target: "_blank",
	icon: "fa fa-facebook-official"
}];

const rightItems = [{
	title: "Our Services"
}, {
	title: "What we do"
}, {
	title: "The Process"
}, {
	title: "Founders"
}, {
	title: "Contact"
}];
```
## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| transparent      | `Boolean` | Define if component is transparent. Default `false` |
| fixed      | `Boolean` | Define if component is fixed. Default `false` |
| companyName      | `String` | Company name of component. Default `""` |
| companyLink      | `String` | Link to go when company name or logo has clicked. Default `""` |
| companyLogo      | `String` | Image logo url. Default `""` |
| leftItems      | `Array` | Array of items to show in nav-bar left side. Default `[]` |
| rightItems      | `Array` | Array of items to show in nav-bar right side. Default `[]`, see example section|
