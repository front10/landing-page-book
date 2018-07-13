# GithubDetail

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/GithubDetail` is used to show github stats.

## How to use
1- Add following content to import the component:
```js
import {GithubDetail} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html

<GithubDetail 
    username="user"
    repository="repository"
/>
```

## Properties

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showCounter      | `Boolean` | Shows the total next to the button, Default `true`
| showBtnText      | `Boolean` | Shows the text inside the button, Default `true`
| username         | `String`  | Github username, it is mandatory
| repository       | `String`  | Github repository, it is mandatory
| btntype          | `String`  | What button show, options: `fork, follow, star, download, watch, issue` 
| btnText          | `String`  | text to show inside the button