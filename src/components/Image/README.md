# Image

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Image` is used to create images.

## How to use
1- Add following content to import the component:
```js
import {Image} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Image src="https://myimage.com"
        alt="This is an image">
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| border      | `Boolean` | Show or hide image borders. Default `false` |
| rounded      | `Boolean` | Show circled image. Default `false` |
| className      | `String` | Class to apply to image. Default `"img-fluid"` |
| width      | `String` | Image width. Default `undefined` |
| height      | `String` | Image height. Default `undefined` |
| alt      | `String` | Image alt. Default `undefined`, this field is required |
| tooltip      | `String` | Image tooltip. Default `""` |
| src      | `String`,`Object` | Image source. Default `undefined`, this field is required |
