<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Features/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>


# Features

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Features` is used to show your project features.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Features from "@front10/landing-page-book/dist/components/Features";
import "@front10/landing-page-book/dist/components/Features/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page

```html
 <Features features={features} />
```
<a target="_blank" href="https://codesandbox.io/s/71p7yq4kqq">
  <img alt="Edit Feature demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Example

```js
const features = [
  {
    image: "images/features/themes.png",
    title: "Theming",
    subtitle: "Easy to create themes",
    summary:
      "Library customization with Css variables for easy theming and component changes.",
    link: "https://front10.com",
    linktext: "See more..."
  },
  {
    image: "images/features/testing.png",
    title: "Unit test",
    subtitle: "Robust components",
    summary:
      "All our components tested, like a Swiss watch. With code coverage above 50%.",
    link: "https://front10.com",
    linktext: "See more..."
  },
  {
    image: "images/features/speed.png",
    title: "Faster dev",
    subtitle: "Fast like Usain Bolt",
    summary:
      "With our components you can develop a wep app faster than Usain Bolt in 100 meters flat.",
    link: "https://front10.com",
    linktext: "See more..."
  },
  {
    image: "images/features/code.png",
    title: "Simple",
    subtitle: "Easy to use",
    summary:
      "Very easy to use, you can do a lot in your wep application with little code.",
    link: "https://front10.com",
    linktext: "See more..."
  }
];

```

## Properties

| </br>Name             | </br>Type | </br>Summary                                                                          | 
| ----------------------| --------- | ------------------------------------------------------------------------------------- |
| showImage             | `Boolean` | Show or hide image. Default `true`                                                    |
| showTitle             | `Boolean` | Show or hide title. Default `true`                                                    |
| showSubtitle          | `Boolean` | Show or hide subtitle. Default `true`                                                 |
| showSummary           | `Boolean` | Show or hide summary. Default `true`                                                  |
| showBorder           | `Boolean` | Show or hide card border. Default `true`                                                  |
| imageCircle           | `Boolean` | Establishes if image is circled. Default `true`                                       |
| imageBorder           | `Boolean` | Establishes if image is with border. Default `false`                                       |
| contentAlign          | `String`  | Align of a component content. Default `"center"`, can be `left` and `right` too       |
| features              | `Array`   | Array of features to show. Default `[]`, see example section.                         |

## Theming variables

| </br>Name                                           | </br>Summary                   | </br>Default       |
| --------------------------------------------------- | ------------------------------ | ------------------ |
| --Features__CardFooter__Link-padding                | Link's padding                 | `none`             |
| --Features__CardFooter__Link-box-shadow             | Link's box shadow              | `none`             |
| --Features__CardFooter__Link-background-color       | Link's background color        | `none`             |
| --Features__CardFooter__Link-box-shadow-hover       | Link's box shadow hover        | `none`             |
| --Features__CardFooter__Link-background-color-hover | Link's background color hover  | `none`             |
| --Features__CardFooter__Link-color                  | Link's color                   | `none`             |
| --Features__CardFooter__Link-fontSize               | Link's font size               | `none`             |
