# NavbarBrand

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarBrand` is used to create a brand into navbar.

## How to use
1- Add following content to import the component:
```js
import {NavbarBrand} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
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
