<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/NavbarNav/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# NavbarNav

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarNav` is used to create navigation align into navbar.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import NavbarNav from "@front10/landing-page-book/dist/components/NavbarNav";
import "@front10/landing-page-book/dist/components/NavbarNav/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<NavbarNav>
    <NavbarLink>
        <Icon className="mr-1"
              icon="fa fa-google" />
        Google
    </NavbarLink>
</NavbarNav>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| alignItems      | `String` | Position of items. Default `"left"`, can be `left` or `right` |
