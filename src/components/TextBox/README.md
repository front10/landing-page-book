# Row

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/TextBox` is used to create a textBox.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import TextBox from "@front10/landing-page-book/dist/components/TextBox";
import "@front10/landing-page-book/dist/components/TextBox/style.css";
```
or

```js
import { TextBox } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

3- Put this code into jsx page:

```html
<TextBox
        className="card"
        title="Title text"
        text="Here is an example of textBox component"
      />
```

## Properties:

| </br>Name | </br>Type | </br>Summary                                      |
| --------- | --------- | ------------------------------------------------- |
| className | `String`  | Class name of the textBox container. Default `""` |
| title     | `String`  | Text to show as title. Default `""`               |
| text      | `String`  | Text to show as content. Default `""`             |
