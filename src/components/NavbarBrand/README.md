# NavbarBrand

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarBrand` is used to create a brand into navbar.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import NavbarBrand from "@front10/landing-page-book/dist/components/NavbarBrand";
import "@front10/landing-page-book/dist/components/NavbarBrand/style.css";
```
or

```js
import { NavbarBrand } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
```html
<NavbarBrand>
    <Image  alt="Company logo"
            src="https://logourl.com"/>
</NavbarBrand>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| className      | `String` | Class to apply to button. Default `""` |
| href      | `String` | Url to go when NavbarBrand is clicked. Default `""` |
