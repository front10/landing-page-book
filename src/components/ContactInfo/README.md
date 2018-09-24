# ContactInfo

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/ContactInfo` is used to a contact info card.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import ContactInfo from '@front10/landing-page-book/dist/components/ContactInfo';
import '@front10/landing-page-book/dist/components/ContactInfo/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<ContactInfo />
```

## Properties:

| </br>Name      | </br>Type | </br>Summary                                                              |
| -------------- | --------- | ------------------------------------------------------------------------- |
| showBorder     | `Boolean` | Show or hide card border. Default `true`                                  |
| showIcons      | `Boolean` | Show or hide icons in the information. Default `true`                     |
| lng            | `Number`  | Marker longitude. Default `0`                                             |
| lat            | `Number`  | Marker latitude. Default `0`                                              |
| locationApiKey | `String`  | Key of the map. Default `""`                                              |
| address        | `String`  | Address info. Default `""`                                                |
| email          | `String`  | Email contact info. Default `""`                                          |
| phone          | `String`  | Phone contact info. Default `""`                                          |
| mobile         | `String`  | Mobile contact info. Default `""`                                         |
| fax            | `String`  | Fax contact info. Default `""`                                            |
| website        | `String`  | Web contact info. Default `""`                                            |
| contentAlign   | `String`  | Card content align. Default `"left"`, can be `left`, `center` and `right` |

Note: if `lng`, `lng` or `locationApiKey` attributes are not defined, the map not will be shown.

## Theming variables

| </br>Name                             | </br>Summary   | </br>Default |
| ------------------------------------- | -------------- | ------------ |
| --ContactInfo\_\_Location-height      | Height of map  | `300px`      |
| --ContactInfo\_\_Information-fontSize | Text font size | `0.7rem`     |
