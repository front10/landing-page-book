# Navbar

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Navbar` show a navigation bar based in [Reactstrap navbar](https://reactstrap.github.io/components/navbar/).

## How to use
1- Add following content to import the component:
```js
import {Navbar} from '`@front10/landing-page-book/src/components';
``` 

2- Put this code into jsx page:
```html
<Navbar>
    <NavItem>
        <NavLink href="https://landing-page-book.front10.com">Book</NavLink>
    </NavItem>
    <NavItem>
        <NavLink href="https://gitlab.com/front10-devs/landing-page-book">GitLab</NavLink>
    </NavItem>
</Navbar>
```

## Properties

| </br>Name   | </br>Type | </br>Summary                                                                                  | 
| ------------| -------- |------------------------------------------------------------------------------------------------------ |
| dark  | `Boolean` | Define color is dark in navbar's links. Default `false`                                                                     |  
| light  | `Boolean` | Define color is light in navbar's links. Default `false`                                                            |  
| shadow  | `Boolean` | Define navbar shadow. Default `true`                                                                     |  
| color  | `String` | Define button color. Default `""`                                                                     |  
| fixed  | `String` | If layout is fixed, possibles values `top` or `bottom`. Default `""`                                                                     |  
| logo  | `String` | Logo to show in navbar. Default `""`                                                                     |  
| logoRef  | `String` | Url to open when logo is clicked. Default `""`                                                                     |  
| role  | `String` | Role attribute of navbar. Default `""`                                                                     |  
| expand  | `String` `Boolean` | Resolution to collapse navbar. Default `"md"`                                                                     |  
  