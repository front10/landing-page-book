# Hero

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Hero` is used to create cool heroes components.

## How to use
1- Add following content to import the component:
```js
import {Hero} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Hero />
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| isFixed      | `Boolean` | Define if background image is fixed. Default `true`
| isCentered      | `Boolean` | Define if content is centered. Default `true`
| particles      | `Boolean` | Define if component show particles animations. Default `true`
| opacity      | `Number` | Opacity level. Default `0`
| parallaxOffset      | `Number` | Offset of background image. Default `0`
| image      | `String` | Url of background image. Default `"https://front10.com/img/header-bg.jpg"`
| overlayColor      | `String` | Overlay color of the component . Default `#fff`
| header      | `String` | Header of the hero . Default `""`
| subHeader      | `String` | Sub header of the hero . Default `""`
| subHeaderPosition      | `String` | Position of hero sub header. Default `"bottom"`, can be `"top"`
| minHeight      | `String` | Min height of hero. Default `"100vh"`
| particlesParams      | `Object` | Object with particles config. Default `{}`, yow can see [react-particles-js](https://www.npmjs.com/package/react-particles-js)
| buttons      | `Array` | Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}`
