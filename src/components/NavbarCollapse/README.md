# NavbarCollapse

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarCollapse` is used to create navbar collapse.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

2- Importing font-awesome or any other font (Optional)

```js
import "font-awesome/css/font-awesome.min.css";
```

3- Add following content to import the component:

###### (Recommended)
```js
import NavbarCollapse from "@front10/landing-page-book/dist/components/NavbarCollapse";
import "@front10/landing-page-book/dist/components/NavbarCollapse/style.css";
```
or

```js
import { NavbarCollapse } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

4- Put this code into jsx page:
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
