# Donation

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Donation` is used to donate and it's integrated with [OpenCollective](https://opencollective.com])

## How to use
1- Add following content to import the component:
```js
import {OpenCollective} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Donation url="https://opencollective.com/webpack/donate"/>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| url      | `String` | Url of the project to donate. Default `undefined`, this prop is `required` |
| image      | `String` | Link image. Default `"https://opencollective.com/webpack/donate/button@2x.png?color=blue"` |
| imageAlt      | `String` | Image alt to accessibility. Default `"Open collective logo"` |
| imageWidth      | `String` | Image width. Default `"300"` |
