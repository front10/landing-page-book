# NavbarNav

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarNav` is used to create navigation align into navbar.

## How to use
1- Add following content to import the component:
```js
import {NavbarNav} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
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
