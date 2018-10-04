# Sponsors

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Sponsors` is used to show all sponsors brand.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Sponsors from "@front10/landing-page-book/dist/components/Sponsors";
import "@front10/landing-page-book/dist/components/Sponsors/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Sponsors sponsors={sponsors}/>
```
[![Edit Sponsors demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8mjq19zrj)
## Example

```js
const sponsors = [
  {
    image: "/images/sponsors/facebook.png"
  },
  {
    image: "/images/sponsors/google.png"
  },
  {
    image: "/images/sponsors/twitter.png"
  },
  {
    image: "/images/sponsors/salesforce.png"
  },
  {
    image: "/images/sponsors/amazon.png"
  }
];
```

## Properties

| </br>Name | </br>Type | </br>Summary                                         |
| --------- | --------- | ---------------------------------------------------- |
| gray      | `Boolean` | Define if image is gray scale. Default `false`       |
| sponsors  | `Array`   | Companies to show. Default `[]`, see example section |
