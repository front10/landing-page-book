# LocationMarker

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/LocationMarker` is used to create a map marker.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

2- Importing font-awesome or any other font (Optional)

```js
import "font-awesome/css/font-awesome.min.css";
```

3- Add following content to import the component:

###### (Recommended)
```js
import LocationMarker from "@front10/landing-page-book/dist/components/LocationMarker";
import "@front10/landing-page-book/dist/components/LocationMarker/style.css";
```
or

```js
import { LocationMarker } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

4- Put this code into jsx page:
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
