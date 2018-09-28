# BackersOpenCollective

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/BackersOpenCollective` is used to make a backers list from opencollective.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import BackersOpenCollective from '@front10/landing-page-book/dist/components/BackersOpenCollective';
import '@front10/landing-page-book/dist/components/BackersOpenCollective/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).\*

3- Put this code into jsx page:

```html
<BackersOpenCollective collective="webpack"/>
```

## Properties

| </br>Name     | </br>Type | </br>Summary                                                |
| ------------- | --------- | ----------------------------------------------------------- |
| imageRounded  | `Boolean` | Define if images are rounded. Default `true`                |
| imageBordered | `Boolean` | Define images with border. Default `true`                   |
| imageGray     | `Boolean` | Define if images are with gray scale. Default `false`       |
| collective    | `String`  | Name of collective in opencollective. This prop is required |
| sortDirection | `String`  | Sort backers. Default `desc`, can be `asc` or `desc`        |
