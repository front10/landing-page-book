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

## Example

```js
const sponsors = [
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Acer-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Microsoft-Company-Logo1.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/ASUS-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/Compaq-Company-Logo.jpg'
  },
  {
    image: 'https://brandongaille.com/wp-content/uploads/2013/07/HP-Company-Logos.jpg'
  }
];
```

## Properties

| </br>Name | </br>Type | </br>Summary                                         |
| --------- | --------- | ---------------------------------------------------- |
| gray      | `Boolean` | Define if image is gray scale. Default `false`       |
| sponsors  | `Array`   | Companies to show. Default `[]`, see example section |
