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
| username      | `String` | Github username. it is mandatory.
| repository      | `String` | Github repository. it is mandatory.
| showFollow      | `Boolean` | Show Follow button. Default `true`
| showWatch      | `Boolean` | Show Watch button. Default `true`
| showStar      | `Boolean` | Show Star button. Default `true`
| showFork      | `Boolean` | Show Fork button. Default `true`
| showIssue      | `Boolean` | Show Issue button. Default `true`
| showDownload      | `Boolean` | Show Download button. Default `true`
| FollowText      | `String` | Text to show on Follow button . Default `"Follow"`
| WatchText      | `String` | Text to show on Watch button . Default `"Watch"`
| StarText      | `String` | Text to show on Star button . Default `"Star"`
| ForkText      | `String` | Text to show on Fork button . Default `"Fork"`
| IssueText      | `String` | Text to show on Issue button . Default `"Issue"`
| DownloadText      | `String` | Text to show on Download button . Default `"Download"`
| showFollowCount      | `Boolean` | Show Follow count beside the button, default `true`
| showWatchCount      | `Boolean` | Show Watch count beside the button, default `true`
| showStarCount      | `Boolean` | Show Star count beside the button, default `true`
| showForkCount      | `Boolean` | Show Fork count beside the button, default `true`
| showIssueCount      | `Boolean` | Show Issue count beside the button, default `true`
| showDownloadCount      | `Boolean` | Show Download count beside the button, default `true`
