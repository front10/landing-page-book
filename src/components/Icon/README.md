# Icon

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Icon` is used to create icons with fonts.

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
import Icon from "@front10/landing-page-book/dist/components/Icon";
import "@front10/landing-page-book/dist/components/Icon/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page:
```html
<Icon icon="fa fa-home" />
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| icon      | `String` | Icon name. Default `undefined`, this prop is required |
| className      | `String` | Class to apply to icon. Default `""` |
| style      | `Object` | Css to apply to component. Default `{}` |

