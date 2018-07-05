# Button

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Button` show a button based in [Reactstrap button](https://reactstrap.github.io/components/buttons/).

## How to use
1- Add following content to import the component:
```js
import {Button} from '`@front10/landing-page-book/src/components';
``` 

2- Put this code into jsx page:
```html
<Button> primary </Button>
```
## Properties

| </br>Name   | </br>Type | </br>Summary                                                                                  | 
| ------------| -------- |------------------------------------------------------------------------------------------------------ |
| active  | `Boolean` | Change an active state of the button. Default `false`                                                                     |  
| block  | `Boolean` | Define if a button is expanded. Default `false`                                                                     |  
| disabled  | `Boolean` | Enable or disable the button. Default `false`                                                                     |  
| outline  | `Boolean` | Show button outline style. Default `false`                                                                     |  
| color  | `String` | Define button color. Default `primary`                                                                     |  
| className  | `String` | Define a class attribute. Default `""`                                                                     |  
| size  | `String` | Define the button size. Default `"md"`                                                                     |  
| tooltip  | `String` | Define the button tooltip (if this attr not have value, tooltip not be show). Default `""`                                                                     |  
| tooltipPosition  | `String` | Position of the tooltip. Default `"top"`                                                                     |  
| onClick  | `Function` | Called when button has clicked                                                                     |  