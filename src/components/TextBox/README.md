# Row

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/TextBox` is used to create a textBox.

## How to use

1- Add following content to import the component:

```js
import { TextBox } from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:

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
