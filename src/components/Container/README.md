<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Container/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Container

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Container` is used to create copyright.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Container from "@front10/landing-page-book/dist/components/Container";
import "@front10/landing-page-book/dist/components/Container/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Container>
    <!--Put your code here-->
</Container>
```

## Properties:

| </br>Name           | </br>Type | </br>Summary                                              |
| ------------------- | --------- | --------------------------------------------------------- |
| fluid | `Boolean` | A fluid container is shown. Default `false`                   |
| className           | `String`  | Class of the component. Default `""`                      |
