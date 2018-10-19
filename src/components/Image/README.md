<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Image/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Image

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Image` is used to create images.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Image from '@front10/landing-page-book/dist/components/Image';
import '@front10/landing-page-book/dist/components/Image/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Image src="https://myimage.com"
        alt="This is an image">
```

## Properties:

| </br>Name | </br>Type         | </br>Summary                                              |
| --------- | ----------------- | --------------------------------------------------------- |
| border    | `Boolean`         | Show or hide image borders. Default `false`               |
| rounded   | `Boolean`         | Show circled image. Default `false`                       |
| shadow    | `Boolean`         | Define if image is show with shadow. Default `false`      |
| className | `String`          | Class to apply to image. Default `"img-fluid"`            |
| width     | `String`          | Image width. Default `undefined`                          |
| alt       | `String`          | Image alt. Default `undefined`, this field is required    |
| tooltip   | `String`          | Image tooltip. Default `""`                               |
| src       | `String`,`Object` | Image source. Default `undefined`, this field is required |

## Theming variables

| </br>Name         | </br>Summary  | </br>Default                                                        |
| ----------------- | ------------- | ------------------------------------------------------------------- |
| --Image-boxShadow | Images shadow | 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15); |
