# BuiltWith

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/BuiltWith` is used to show companies that use your components.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import BuiltWith from "@front10/landing-page-book/dist/components/BuiltWith";
import "@front10/landing-page-book/dist/components/BuiltWith/style.css";
```
or

```js
import { BuiltWith } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
```html
<BuiltWith companies={companies}/>
```
## Example
```js
const companies = [{
	image: "https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png"
}, {
	image: "https://qph.fs.quoracdn.net/main-qimg-5f4deb2eafbed371d07b24cfe4a11f6e"
}, {
	image: "http://iol13.linguistics-bg.com/wp-content/uploads/2015/05/Coca-Cola-Logo-Red.png"
}, {
	image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQizYke0pb5GJsX7q7EhWSIKAcGNZv53eI2H_TTPfF3p5IKNpx"
}, {
	image: "https://i.pinimg.com/originals/de/fd/43/defd4347f12a7fa7bbfa192be11532d6.png"
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| gray      | `Boolean` | Define if image is gray scale. Default `false` |
| companies      | `Array` | Companies to show. Default `[]`, see example section |
