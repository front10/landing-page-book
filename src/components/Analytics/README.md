<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Analytics/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Analytics

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Analytics` is used to send statistics of visits to google analytics

## How to use
1- Add following content to import the component:

```js
import Analytics from "@front10/landing-page-book/dist/components/Analytics";
```

2- Put this code into jsx page:
```html
<Analytics idTracking='UA-0000000-1' />
```

## Properties:
| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| idTracking      | `String` | Tracking ID code of your property in google analytics |
| debug      | `Boolean` | If set to true, will output additional feedback to the console. Default `false` |
|  urlPath | `String` | Path you want to track, for example '/section/page1'. Default route is obtained from the window object |
|testMode | `Boolean` | Enable test mode in the component .Default `false` |