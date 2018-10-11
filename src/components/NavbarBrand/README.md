<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/NavbarBrand/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

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


```js
import NavbarBrand from "@front10/landing-page-book/dist/components/NavbarBrand";
import "@front10/landing-page-book/dist/components/NavbarBrand/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

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
