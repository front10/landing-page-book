<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Button/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Header

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Header` is used to show e header.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Header from '@front10/landing-page-book/dist/components/Header';
import '@front10/landing-page-book/dist/components/Header/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Header>
    This is a header
</Header>
```

## Properties

| </br>Name    | </br>Type | </br>Summary                                                                   |
| ------------ | --------- | ------------------------------------------------------------------------------ |
| borderBottom | `Boolean` | Define a border bottom in header. Default `false`                              |
| borderTop    | `Boolean` | Define if header have border on top. Default `false`                           |
| className    | `String`  | Class name of header. Default `""`                                             |
| color        | `String`  | Color of header. Default `""`                                                  |
| type         | `String`  | Type of tag element. Default `"h1"`, can be `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| textAlign    | `String`  | Aligment of component. Default `"left"`, can be `center`, `right` and `left`.                                      |
| icon         | `String`  | Icon to show in component. Default `""`                                        |
