# Video

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Video` is used to show a videos.

## How to use
1- Add following content to import the component:
```js
import {Video} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Video source={text("Source", "https://youtu.be/dCrLwWdju68")} />
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| playing      | `Boolean` | Set to true or false to pause or play the media. Default `false` |
| loop      | `Boolean` | Set to true or false to loop the media. Default `false` |
| controls      | `Boolean` | Set to true or false to display native player controls. Vimeo, Twitch and Wistia player will always display controls. Default `false` |
| muted      | `Boolean` | Mutes the player. Default `false` |
| volume      | `Number` | Set the volume of the player, between 0 and 1. Default `1` |
| source      | `String` | The url of a video or song to play. Default `""` |
| width      | `String` | Set the width of the player. Default `"640px"` |
| height      | `String` | Set the height of the player. Default `"360px"` |
| onReady      | `Function` | Called when media is loaded and ready to play. If playing is set to true, media will play immediately |
| onStart      | `Function` | Called when media starts playing |
| onPlay      | `Function` | Called when media starts or resumes playing after pausing or buffering |
| onProgress      | `Function` | Callback containing played and loaded progress as a fraction (`{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`) |
| onDuration      | `Function` | Callback containing duration of the media, in seconds |
| onPause      | `Function` | Called when media is paused |
| onBuffer      | `Function` | Called when media starts buffering |
| onSeek      | `Function` | Called when media seeks with seconds parameter |
| onEnded      | `Function` | Called when media finishes playing |
| onError      | `Function` | Called when an error occurs whilst attempting to play media |
