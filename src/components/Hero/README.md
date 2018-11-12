# Hero
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| backgroundColor | `string` | Background color of the hero | `'transparent'` |
| callToAction | `string` | Hero call to action | `null` |
| callToActionColor | `string` | Color of call to action button | `''` |
| callToActionOnClick | `func` | Event is fire when call to action button is pressed | `() => { }` |
| callToActionOutline | `bool` | Outline of call to action button | `true` |
| children | `union` | Elements to show inside of Hero. | `null` |
| header | `string` | Header of the hero | `''` |
| headerFontSize | `string` | Define header font size | `'3'` |
| headerFontSizeMd | `string` | Define sub header font size on <code>md</code> screen | `'7'` |
| headerFontSizeSm | `string` | Define header font size on <code>sm</code> screen | `'5'` |
| headerMarginBottom | `string` | Margin bottom of hero header | `'5'` |
| headerTextColor | `string` | Color of hero header | `'light'` |
| image | `string` | Url of background image | `''` |
| imgFilter | `string` | The filter property defines visual effects (like blur and saturation) to an element (often <img>). | `null` |
| isCentered | `bool` | Define if content is centered | `true` |
| isFixed | `bool` | Define if background image is fixed | `true` |
| minHeight | `string` | Min height of hero | `'100vh'` |
| opacity | `number` | Opacity level | `0` |
| overlayColor | `string` | Overlay color of the component | `'#fff'` |
| parallaxOffset | `number` | Offset of background image | `0` |
| particles | `bool` | Define if component show particles animations | `true` |
| particlesParams | `objectOf` | Config params for particles animation. | `null` |
| particlesSugar | `string` | Preconfigured params for particles, you can find this on particlesSugarMapping.js file. | `null` |
| secondaryCallToActionColor | `string` | Color of secondary call to action button | `''` |
| secondaryCallToActionOnClick | `func` | Event is fire when secondary call to action button is pressed | `() => { }` |
| secondaryCallToActionOutline | `bool` | Outline of secondary call to action button | `true` |
| style | `string` | Customs styles to tramsform your Hero | `null` |
| subHeader | `string` | Sub header of the hero | `''` |
| subHeaderFontSize | `string` | Define sub header font size | `'1'` |
| subHeaderFontSizeMd | `string` | Define sub header font size on <code>md</code> screen | `'3'` |
| subHeaderFontSizeSm | `string` | Define sub header font size on <code>sm</code> screen | `'2'` |
| subHeaderMarginBottom | `string` | Margin bottom of hero subheader | `'5'` |
| subHeaderPosition | `string` | Position of hero sub header. Can be <code>'top'</code> or <code>'bottom'</code> | `'bottom'` |
| subHeaderTextColor | `string` | Color of hero subheader | `'light'` |