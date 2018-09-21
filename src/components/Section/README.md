# Section

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Section` is used to wrap component.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Section from "@front10/landing-page-book/dist/components/Section";
import "@front10/landing-page-book/dist/components/Section/style.css";
```
or

```js
import { Section } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:

```html
<Section>
    <!--Your code here-->
</Section>
```

## Properties:

| </br>Name        | </br>Type | </br>Summary                                         |
| ---------------- | --------- | ---------------------------------------------------- |
| gray             | `Boolean` | If section background color is gray. Default `false` |
| title            | `String`  | Section title. Default `""`                          |
| subTitle         | `String`  | Section subtitle. Default `""`                       |
| sectionClass     | `String`  | Section css class. Default `""`                      |
| contentClassName | `String`  | Section content css class. Default `""`              |
