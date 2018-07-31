# NavbarCollapse

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarCollapse` is used to create navbar collapse.

## How to use
1- Add following content to import the component:
```js
import {NavbarCollapse} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<NavbarCollapse>
    <NavbarNav>
        <NavbarLink>
            <Icon className="mr-1"
                  icon="fa fa-google"/>
            Google
          </NavbarLink>
    </NavbarNav>
</NavbarCollapse>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| isOpen      | `Boolean` | Open or close component. Default `true` |
