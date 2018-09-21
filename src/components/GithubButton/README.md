# GithubButton

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/GithubButton` is used to show github stats.

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
import GithubButton from "@front10/landing-page-book/dist/components/GithubButton";
import "@front10/landing-page-book/dist/components/GithubButton/style.css";
```
or

```js
import { GithubButton } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

4- Put this code into jsx page:

```html
<GithubButton
    username="user"
    repository="repository"
/>
```

## Properties

| </br>Name      | </br>Type | </br>Summary                                                            |
| -------------- | --------- | ----------------------------------------------------------------------- |
| showCounter    | `Boolean` | Shows the total next to the button, Default `true`                      |
| showBtnText    | `Boolean` | Shows the text inside the button, Default `true`                        |
| showGithubIcon | `Boolean` | Shows github icon on the button, Default `false`                        |
| loadingClass   | `String`  | Class to loading indicator. Default `"fa fa-circle-o-notch fa-spin"`    |
| username       | `String`  | Github username, it is mandatory                                        |
| repository     | `String`  | Github repository, it is mandatory                                      |
| btnType        | `String`  | What button show, options: `fork, follow, star, download, watch, issue` |
| btnText        | `String`  | text to show inside the button                                          |
