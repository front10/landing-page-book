# Location

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Location` is used to display locations in map.

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

```js
import Location from "@front10/landing-page-book/dist/components/Location";
import "@front10/landing-page-book/dist/components/Location/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page:
```html
<Location key="my_google_key"/>
```

<a target="_blank" href="https://codesandbox.io/s/48wl966zxw">
  <img alt="Edit Location demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Example
```js
const markers = [{
	icon: "fa fa-map-marker",
	color: "#d20000",
	lat: 26.5,
	lng: -80.2
},{
	icon: "fa fa-map-marker",
	color: "#d2a430",
	lat: 26.6,
	lng: -80.3
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| lat      | `Number` | Latitude to initial center map. Default `0` |
| lng      | `Number` | Longitude to initial center map. Default `0` |
| zoom      | `Number` | Zoom level of map. Default `1` |
| apiKey      | `String` | Key of google maps project. Default `""` |
| language      | `String` | Language of map. Default `"en"` |
| markers      | `Array` | Markers to shoe in the map. Default `[]`, see example section |
