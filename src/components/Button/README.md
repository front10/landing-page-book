# Button

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Button` is used to create a button.

## How to use

1- Add following content to import the component:

```js
import { Button } from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:

```html
<Button>Home</Button>
```

## Properties:

| </br>Name | </br>Type  | </br>Summary                              |
| --------- | ---------- | ----------------------------------------- |
| disabled  | `Boolean`  | Disable or enable button. Default `false` |
| loading   | `Boolean`  | Show loading mode. Default `false`        |
| className | `String`   | Class to apply to button. Default `""`    |
| ariaLabel | `String`   | Aria label of the button. Default `""`    |
| type      | `String`   | Type of the button. Default `"button"`    |
| tooltip   | `String`   | Button tooltip. Default `""`              |
| onClick   | `Function` | Called when button is clicked             |
