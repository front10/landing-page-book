# Hero

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Hero` is used to create cool heroes components.

## How to use
1- Add following content to import the component:
```js
import {Hero} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Hero />
```
You can use Hero component with children too:
```html
<Hero>
    <Container>
        <Image className="w-75"
             src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-White-Car-PNG-Image.png"/>
        <h1 className="display-3 text-white">GET YOUR CAR</h1>
        <div>
            <Button className="btn-success btn-lg">
                Go now
            </Button>
        </div>
        <div className="btn-group mt-4" role="group" aria-label="Basic example">
            <Button className="btn-secondary"><Icon icon="fa fa-facebook"/></Button>
            <Button className="btn-secondary"><Icon icon="fa fa-instagram"/></Button>
            <Button className="btn-secondary"><Icon icon="fa fa-google-plus"/></Button>
        </div>
    </Container>
</Hero>
```
Note: if you use Hero component with children, properties `buttons`, `header`, `subHeader` and `subHeaderPosition` will not work

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| isFixed      | `Boolean` | Define if background image is fixed. Default `true`
| isCentered      | `Boolean` | Define if content is centered. Default `true`
| particles      | `Boolean` | Define if component show particles animations. Default `true`
| opacity      | `Number` | Opacity level. Default `0`
| parallaxOffset      | `Number` | Offset of background image. Default `0`
| image      | `String` | Url of background image. Default `"https://front10.com/img/header-bg.jpg"`
| overlayColor      | `String` | Overlay color of the component . Default `#fff`
| header      | `String` | Header of the hero . Default `""`
| subHeader      | `String` | Sub header of the hero . Default `""`
| subHeaderPosition      | `String` | Position of hero sub header. Default `"bottom"`, can be `"top"`
| minHeight      | `String` | Min height of hero. Default `"100vh"`
| backgroundColor      | `String` | Background color of the hero. Default `"transparent"`
| particlesParams      | `Object` | Object with particles config. Default `{}`, yow can see [react-particles-js](https://www.npmjs.com/package/react-particles-js)
| buttons      | `Array` | Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}`
