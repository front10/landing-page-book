# Button

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Button` is used to create a button.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

2- Importing font-awesome or any other font (Optional)

```js
import "font-awesome/css/font-awesome.min.css";
```

3- Add following content to import the component:

###### (Recommended)
```js
import Button from "@front10/landing-page-book/dist/components/Button";
import "@front10/landing-page-book/dist/components/Button/style.css";
```
or

```js
import { Button } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```
4- Put this code into jsx page:

```html
<Button>Home</Button>
```

## Properties:

| </br>Name    | </br>Type  | </br>Summary                                                              |
| ------------ | ---------- | ------------------------------------------------------------------------- |
| disabled     | `Boolean`  | Disable or enable button. Default `false`                                 |
| loading      | `Boolean`  | Show loading mode. Default `false`                                        |
| loadingClass | `String`   | Class to show loading indicator. Default `"fa fa-circle-o-notch fa-spin"` |
| className    | `String`   | Class to apply to button. Default `""`                                    |
| ariaLabel    | `String`   | Aria label of the button. Default `""`                                    |
| type         | `String`   | Type of the button. Default `"button"`                                    |
| tooltip      | `String`   | Button tooltip. Default `""`                                              |
| onClick      | `Function` | Called when button is clicked                                             |
