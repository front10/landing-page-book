# Video
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| className | `string` | Class to apply to button. Default `""` | `''` |
| controls | `bool` | Set to true or false to display native player controls. Vimeo, Twitch and Wistia player will always display controls. Default `false` | `true` |
| loop | `bool` | Set to true or false to loop the media. Default `false` | `false` |
| muted | `bool` | Mutes the player. Default `false` | `false` |
| onBuffer | `func` | Called when media starts buffering | `() => {}` |
| onDuration | `func` | Callback containing duration of the media, in seconds | `() => {}` |
| onEnded | `func` | Called when media finishes playing | `() => {}` |
| onError | `func` | Called when an error occurs whilst attempting to play media | `() => {}` |
| onPause | `func` | Called when media is paused | `() => {}` |
| onPlay | `func` | Called when media starts or resumes playing after pausing or buffering | `() => {}` |
| onProgress | `func` | Callback containing played and loaded progress as a fraction (`{ played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }`) | `() => {}` |
| onReady | `func` | Called when media is loaded and ready to play. If playing is set to true, media will play immediately | `() => {}` |
| onSeek | `func` | Called when media seeks with seconds parameter | `() => {}` |
| onStart | `func` | Called when media starts playing | `() => {}` |
| playing | `bool` | Set to true or false to pause or play the media. Default `false` | `false` |
| source | `string` | The url of a video or song to play. Default `""` | `''` |
| volume | `number` | Set the volume of the player, between 0 and 1. Default `1` | `1` |