# ImageList

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/ImageList` is used to show a list of images.

## How to use

1- Add following content to import the component:

```js
import { ImageList } from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:

```html
<ImageList images={images}/>
```

## Example

```js
const images = [
  {
    image: 'https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png'
  },
  {
    image: 'https://qph.fs.quoracdn.net/main-qimg-5f4deb2eafbed371d07b24cfe4a11f6e'
  },
  {
    image: 'http://iol13.linguistics-bg.com/wp-content/uploads/2015/05/Coca-Cola-Logo-Red.png'
  },
  {
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQizYke0pb5GJsX7q7EhWSIKAcGNZv53eI2H_TTPfF3p5IKNpx'
  },
  {
    image: 'https://i.pinimg.com/originals/de/fd/43/defd4347f12a7fa7bbfa192be11532d6.png'
  }
];
```

## Properties:

| </br>Name     | </br>Type | </br>Summary                                      |
| ------------- | --------- | ------------------------------------------------- |
| gray          | `Boolean` | Define if image is gray scale. Default `false`    |
| imageRounded  | `Boolean` | Define if image is rounded. Default `false`       |
| imageBordered | `Boolean` | Define if image is borded. Default `false`        |
| imageWidth    | `String`  | Image width. Default `"100"`                      |
| imageHeight   | `String`  | Image height. Default `"100"`                     |
| images        | `Array`   | Images to show. Default `[]`, see example section |
