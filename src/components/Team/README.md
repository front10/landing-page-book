# Team

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Team` is used to show a team.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Team from "@front10/landing-page-book/dist/components/Team";
import "@front10/landing-page-book/dist/components/Team/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<Team members={members} />
```

## Example
```js
const members = [{
	image: "https://randomuser.me/api/portraits/men/11.jpg",
	name: "Sander Coleman",
	job: "CEO",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: [
			{
				social: 'facebook',
				url: 'https://www.facebok.com/front10'
			},
			{
				social: 'twitter',
				url: 'https://twitter.com/landing-page-book'
			}
    ]
}, {
	image: "https://randomuser.me/api/portraits/women/2.jpg",
	name: "Rachel Lee",
	job: "Developer",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: [
			{
				social: 'facebook',
				url: 'https://www.facebook.com/front10'
			},
			{
				social: 'linkedin',
				url: 'https://www.linkedin.com/landing-page-book'
			}
    ]
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showImage      | `Boolean` | Show or hide image. Default `true` |
| showName      | `Boolean` | Show or hide name. Default `true` |
| showJob      | `Boolean` | Show or hide job. Default `true` |
| showSummary      | `Boolean` | Show or hide summary. Default `true` |
| showBorder      | `Boolean` | Show or hide card border. Default `true` |
| imageCircle      | `Boolean` | Establishes if image is circled. Default `true` |
| imageBorder      | `Boolean` | Establishes if image is with border. Default `false` |
| socialGray      | `Boolean` | Establishes if social icon is gray scale. Default `false` |
| contentAlign      | `String` | Align of a component content. Default `"center"`, can be `left` and `right` too|
| members      | `Array` | Array of members to show. Default `[]`, see example section.|
