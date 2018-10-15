<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Section/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Section

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Section` is used to wrap component.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Section from '@front10/landing-page-book/dist/components/Section';
import '@front10/landing-page-book/dist/components/Section/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Section>
    <!--Your code here-->
</Section>
```
<a target="_blank" href="https://codesandbox.io/s/738zn8p3p1">
  <img alt="Edit Section demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Properties:

| </br>Name        | </br>Type | </br>Summary                                         |
| ---------------- | --------- | ---------------------------------------------------- |
| gray             | `Boolean` | If section background color is gray. Default `false` |
| title            | `String`  | Section title. Default `""`                          |
| subTitle         | `String`  | Section subtitle. Default `""`                       |
| sectionClass     | `String`  | Section css class. Default `""`                      |
| contentClassName | `String`  | Section content css class. Default `""`              |

## Theming variables

| </br>Name                       | </br>Summary                        | </br>Default |
| ------------------------------- | ----------------------------------- | ------------ |
| --Section\_\_Title-fontSize     | Title font size                     | `2rem`       |
| --Section\_\_Title-color        | Title color                         | `#000`       |
| --Section\_\_Subtitle-fontSize  | Subtitle font size                  | `0.9rem`     |
| --Section\_\_Subtitle-color     | Subtitle color                      | `#b5b5b5`    |
| --Section--gray-backgroundColor | Background color if section is gray | `#f8f9fa`    |
| --Section--gray-backgroundImage | Background image if section is gray | `none`       |
