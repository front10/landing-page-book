# Donation

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Donation` is used to donate and it's integrated with [OpenCollective](https://opencollective.com])

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Donation from "@front10/landing-page-book/dist/components/Donation";
import "@front10/landing-page-book/dist/components/Donation/style.css";
```
or

```js
import { Donation } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
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
