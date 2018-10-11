<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Team/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

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
<a target="_blank" href="https://codesandbox.io/s/wol17r4lo5">
  <img alt="Edit Team demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Example
```js
const members = [
    {
      image: '/images/team/ninja.svg',
      job: 'Ninja',
      name: 'Leonardo',
      profile: [
        {
          social: 'facebook',
          url: 'https://www.facebook.com/JavaScriptTeam/'
        },
        {
          social: 'twitter',
          url: 'https://twitter.com/front10hello?lang=es'
        }
      ],
      summary: 'Leonardo, nickname Leo, is a fictional character and one of the four main characters in the Teenage Mutant Ninja Turtles comics and related media.'
    },
    {
      image: '/images/team/bohemian.svg',
      job: 'Painter',
      name: 'Van Gogh',
      profile: [
        {
          social: 'facebook',
          url: 'https://www.facebook.com/JavaScriptTeam/'
        },
        {
          social: 'email',
          url: 'https://front10.com'
        }
      ],
      summary: 'He was a Dutch painter, one of the main exponents of post-impressionism, he painted some 900 paintings and made more than 1,600 drawings.'
    },
    {
      image: '/images/team/astronaut.svg',
      job: 'Astronaut',
      name: 'Neil',
      profile: [
        {
          social: 'facebook',
          url: 'https://www.facebook.com/JavaScriptTeam/'
        },
        {
          social: 'twitter',
          url: 'https://twitter.com/front10hello?lang=es'
        }
      ],
      summary: 'American astronaut and aeronautical engineer who was the first person to walk on the Moon. He was also a naval aviator, test pilot, and university professor.'
    }
  ];
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
