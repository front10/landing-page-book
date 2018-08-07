# Backers

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Backers` is used to make a backers list.

## How to use

1- Add following content to import the component:

```js
import { Backers } from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:

```html
<Backers backers={backers}/>
```

## Example

```js
const backers = [
  {
    name: 'Alberto Roman Vieito',
    profile: 'https://twitter.com/romanvieito',
    image: 'https://pbs.twimg.com/profile_images/946622143449661440/c_e7BcSM_400x400.jpg',
    contributionAmount: '125'
  },
  {
    name: 'Dariel Noel',
    profile: 'https://twitter.com/dariel_noel',
    image: 'https://pbs.twimg.com/profile_images/954398138516869120/uRSkGwhe_400x400.jpg',
    contributionAmount: '47'
  },
  {
    name: 'Yulier Camilo Garrido Garrido',
    profile: 'https://twitter.com/ycgarrido',
    image: 'https://pbs.twimg.com/profile_images/985858821850415104/88svfp18_400x400.jpg',
    contributionAmount: '200'
  },
  {
    name: 'Yoandry Collazo Barroso',
    profile: 'https://www.facebook.com/ycbarroso',
    image:
      'https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/p160x160/33982916_1794458947240880_8061391612997009408_n.jpg?_nc_cat=0&oh=46256828ab9b2f3c3fe3b67cbd9e67c1&oe=5C134566',
    contributionAmount: '250'
  }
];
```

## Properties

| </br>Name     | </br>Type | </br>Summary                                          |
| ------------- | --------- | ----------------------------------------------------- |
| imageRounded  | `Boolean` | Define if images are rounded. Default `true`          |
| imageBordered | `Boolean` | Define images with border. Default `true`             |
| imageGray     | `Boolean` | Define if images are with gray scale. Default `false` |
| backers       | `Array`   | List of backers. Default `[]`, see example section    |
