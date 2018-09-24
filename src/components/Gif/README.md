# Gif

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Gif` is used to create animated gif.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Gif from "@front10/landing-page-book/dist/components/Gif";
import "@front10/landing-page-book/dist/components/Gif/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<Gif/>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| autoplay      | `Boolean` | Define if gif is auto play. Default `false` |
| image      | `String` | Image gif url. Default `""` |
| preview      | `String` | Initial image url. Default `""` |
| onPlayPause      | `Function` | Called when gif is payed or paused|