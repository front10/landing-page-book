# Features

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Features` is used to show your project features.

## How to use

1- Add following content to import the component

```js
import {Feature} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page

```html

 <Features features={featuress} />

```

## Example

```js
const members = [{
	image: "images/features/dashboard.png",
	title: "Dashboard",
	subtitle: "Dashboard for Admin",
	summary: "Example of feature text, this component will allow to you to show all your features.",
  link: "https://front10.com",
  linktext: "See more..."
}, {
	image: "images/features/react.png",
	title: "ReactJS",
	subtitle: "Build with ReactJS",
	summary: "Example of feature text, this component will allow to you to show all your features.",
  link: "https://front10.com",
  linktext: "See more..."
}, {
	image: "images/features/angular.png",
	title: "AngularJS",
	subtitle: "Powered by Angular 5",
	summary: "Example of feature text, this component will allow to you to show all your features.",
  link: "https://front10.com",
  linktext: "See more..."
}, {
	image: "images/features/graphql.png",
	title: "GraphQL",
	subtitle: "GraphQL API",
	summary: "Example of feature text, this component will allow to you to show all your features.",
  link: "https://front10.com",
  linktext: "See more..."
}];

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