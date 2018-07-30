# LocationMarker

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/LocationMarker` is used to create a map marker.

## How to use
1- Add following content to import the component:
```js
import {LocationMarker} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<LocationMarker />
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| lat | `Number` | Marker latitude. Default `undefined`, this field is required |
| lng | `Number` | Marker longitude. Default `undefined`, this field is required |
| icon | `String` | Icon to show in the marker. Default `"fa fa-map-marker"` |
| color | `String` | Marker color. Default `"#d43131"` |
