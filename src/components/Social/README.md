# Social

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Social` is used to share in social networks.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Social from "@front10/landing-page-book/dist/components/Social";
import "@front10/landing-page-book/dist/components/Social/style.css";
```
or

```js
import { Social } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:
```html
<Social url="https://front10.com"
        type="facebook"/>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| gray      | `Boolean` | Define if image is gray scale. Default `false` |
| rounded      | `Boolean` | Show buttons rounded or square. Default `true` |
| type      | `String` | Type of button. Default `"email"`, possibles values are: `facebook`, `google`, `linkedin`, `twitter`, `telegram`, `whatsapp`, `pinterest`, `vk`, `ok`, `reddit`, `tumblr`, `livejournal`, `email`, `viber` |
| url      | `String` | Url to share. Default `""` |
