<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/GithubButton/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# GithubButton

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/GithubButton` is used to show github stats.

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
import GithubButton from '@front10/landing-page-book/dist/components/GithubButton';
import '@front10/landing-page-book/dist/components/GithubButton/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

4- Put this code into jsx page:

```html
<GithubButton
    username="user"
    repository="repository"
/>
```

<a target="_blank" href="https://codesandbox.io/s/71p7yq4kqq">
  <img alt="Edit Github Button" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

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

## Theming variables

| </br>Name                                       | </br>Summary                      | </br>Default                                                                                                                |
| ----------------------------------------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| --GithubDetail\_\_countbubble-backgroundColor   | Background color of button bubble | `#dcdcdc`                                                                                                                   |
| --GithubDetail\_\_countbubble-borderradius      | Border radius of button bubble    | `0.4em`                                                                                                                     |
| --GithubDetail\_\_countbubble-padding           | Padding of button bubble          | `6px`                                                                                                                       |
| --GithubDetail\_\_countbubble-ml                | Margin left of button bubble      | `11px`                                                                                                                      |
| --GithubDetail\_\_countbubble-border            | Border of button bubble           | `1px solid #dcdcdc`                                                                                                         |
| --GithubDetail\_\_countbubble-transition        | Transition of button bubble       | `color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out` |
| --GithubDetail\_\_countbubble-Color             | Color of button bubble            | `#000`                                                                                                                      |
| --GithubDetail\_\_countbubble_after-border      | Border of button bubble           | `7px solid transparent`                                                                                                     |
| --GithubDetail\_\_countbubble_after-borderColor | Border color of button bubble     | `transparent #dcdcdc transparent transparent`                                                                               |
| --GithubDetail\_\_buttonText-ml                 | Margin left of button             | `5px`                                                                                                                       |
| --GithubDetail\_\_btn_container-padding         | Pagging of button container       | `5px`                                                                                                                       |
| --GithubDetail_btn-backgroundColor              | Background color of button        | `#dcdcdc`                                                                                                                   |
| --GithubDetail_btn-Color                        | Color of button                   | `#000`                                                                                                                      |
| --GithubDetail_Btn-borderRadius                 | Border radius of button           | `0px`                                                                                                                       |
