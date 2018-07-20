# Team

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Team` is used to show a team.

## How to use
1- Add following content to import the component:
```js
import {Team} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Team members={members}
      socials={socials}/>
```

## Example
```js
const members = [{
	image: "https://randomuser.me/api/portraits/men/11.jpg",
	name: "Sander Coleman",
	job: "CEO",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}, {
	image: "https://randomuser.me/api/portraits/women/2.jpg",
	name: "Rachel Lee",
	job: "Developer",
	summary: "Graduated in 2002, from Harvard University, he participated for 3 years in doctors without borders.",
	profile: "https://front10.com"
}];

const socials = ["facebook", "linkedin", "google", "twitter"]; //Others names in Social component.
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
| socials      | `Array` | Array of socials to show. Default `[]`, see more names in doc of Social component.|
| members      | `Array` | Array of members to show. Default `[]`, see example section.|
