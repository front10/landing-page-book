<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Button/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Button

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Button` is used to create a button.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Importing font-awesome or any other font (Optional)

```js
import 'font-awesome/css/font-awesome.min.css';
```

3- Add following content to import the component:

```js
import Button from '@front10/landing-page-book/dist/components/Button';
import '@front10/landing-page-book/dist/components/Button/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page:

```html
<Button>Home</Button>
```

## Properties:

| </br>Name    | </br>Type  | </br>Summary                                                              |
| ------------ | ---------- | ------------------------------------------------------------------------- |
| disabled     | `Boolean`  | Disable or enable button. Default `false`                                 |
| loading      | `Boolean`  | Show loading mode. Default `false`                                        |
| rounded      | `Boolean`  | Show rounded button. Default `true`                                       |
| circle       | `Boolean`  | Show circle button. Default `false`                                       |
| outline      | `Boolean`  | Define if button is only with border. Default `false`                     |
| active       | `Boolean`  | Define if button is active. Default `false`                               |
| loadingClass | `String`   | Class to show loading indicator. Default `"fa fa-circle-o-notch fa-spin"` |
| className    | `String`   | Class to apply to button. Default `""`                                    |
| color        | `String`   | Color to apply to button. Default `"default"`                             |
| ariaLabel    | `String`   | Aria label of the button. Default `""`                                    |
| type         | `String`   | Type of the button. Default `"button"`                                    |
| tooltip      | `String`   | Button tooltip. Default `""`                                              |
| style        | `String`   | Button styles. Default `""`                                               |
| size         | `String`   | Button size, can be `lg` or `sm`. Default `""`                            |
| onClick      | `Function` | Called when button is clicked                                             |
