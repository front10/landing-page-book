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

###### (Recommended)
```js
import NavbarNav from "@front10/landing-page-book/dist/components/NavbarNav";
import "@front10/landing-page-book/dist/components/NavbarNav/style.css";
```
or

```js
import { NavbarNav } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

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
