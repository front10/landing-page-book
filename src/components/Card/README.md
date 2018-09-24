# Card

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Card` is used to create a card component.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Card from "@front10/landing-page-book/dist/components/Card";
import "@front10/landing-page-book/dist/components/Card/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<Card />
```
You can use Hero component with children too:
```html
<Card>
    <button className="btn btn-primary mr-1">
        Accept
    </button>
    <button className="btn btn-danger ml-1">
        Decline
    </button>
</Card>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showBorder      | `Boolean` | Show or hide border. Default `true` |
| imageCircle      | `Boolean` | Define if image is circular. Default `true` |
| imageBorder      | `Boolean` | Define if image is with border. Default `false` |
| image      | `String` | Image url. Default `""` |
| title      | `String` | Card title. Default `""` |
| subTitle      | `String` | Card subtitle. Default `""` |
| summary      | `String` | Card summary. Default `""` |
| contentAlign      | `String` | Content align in the card. Default `"center"`, can be `left`, `center` and `right` |
