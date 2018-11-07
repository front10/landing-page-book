# Hero
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| backgroundColor | `string` | Background color of the hero. Default `"transparent"` | `'transparent'` |
| callToAction | `string` | Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}` | `null` |
| callToActionColor | `string` |  | `''` |
| callToActionOnClick | `func` |  | `() => {}` |
| callToActionOutline | `bool` |  | `true` |
| children | `union` | Elements to show inside of Hero. | `null` |
| header | `string` | Header of the hero . Default `""` | `''` |
| headerMarginBottom | `string` | Margin bottom of hero header. Default `"5"` | `'5'` |
| headerTextColor | `string` | Color of hero header. Default `"light"` | `'light'` |
| image | `string` | Url of background image. Default `""` | `''` |
| imgFilter | `string` | The filter property defines visual effects (like blur and saturation) to an element (often <img>). | `null` |
| isCentered | `bool` | Define if content is centered. Default `true` | `true` |
| isFixed | `bool` | Define if background image is fixed. Default `true` | `true` |
| minHeight | `string` | Min height of hero. Default `"100vh"` | `'100vh'` |
| opacity | `number` | Opacity level. Default `0` | `0` |
| overlayColor | `string` | Overlay color of the component . Default `#fff` | `'#fff'` |
| parallaxOffset | `number` | Offset of background image. Default `0` | `0` |
| particles | `bool` | Define if component show particles animations. Default `true` | `true` |
| particlesParams | `objectOf` | Config params for particles animation. | `null` |
| particlesSugar | `string` | Preconfigured params for particles, you can find this on particlesSugarMapping.js file. | `null` |
| secondaryCallToActionColor | `string` |  | `''` |
| secondaryCallToActionOnClick | `func` |  | `() => {}` |
| secondaryCallToActionOutline | `bool` |  | `true` |
| style | `string` | Customs styles to tramsform your Hero | `null` |
| subHeader | `string` | Sub header of the hero . Default `""` | `''` |
| subHeaderMarginBottom | `string` | Margin bottom of hero subheader. Default `"5"` | `'5'` |
| subHeaderPosition | `string` | Position of hero sub header. Default `"bottom"`, can be `"top"` | `'bottom'` |
| subHeaderTextColor | `string` | Color of hero subheader. Default `"light"` | `'light'` |