# NavbarLink

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarLink` is used to create link in navbars.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import NavbarLink from "@front10/landing-page-book/dist/components/NavbarLink";
import "@front10/landing-page-book/dist/components/NavbarLink/style.css";
```
or

```js
import { NavbarLink } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
```html
<NavbarLink>
    <Icon className="mr-1"
          icon="fa fa-google" />
    Google
</NavbarLink>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| href      | `String` | Url to redirect on intem click. Default `"#"` |
| target      | `String` | Link target. Default `""` |
| onClick      | `Function` | Called when link is clicked |
