# NavbarLink

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/NavbarLink` is used to create link in navbars.

## How to use
1- Add following content to import the component:
```js
import {NavbarLink} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
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
