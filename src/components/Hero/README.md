# Hero

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Hero` is used to create cool heroes components.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Hero from '@front10/landing-page-book/dist/components/Hero';
import '@front10/landing-page-book/dist/components/Hero/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Hero
  buttons={[
    {
      onClick: function noRefCheck() {},
      text: 'TELL ME MORE'
    }
  ]}
  header="REACT COMPONENTS"
  opacity={1}
  overlayColor="#373D45"
  particlesParams={{
    move: {
      speed: 2
    }
  }}
  subHeader="Leverage your process!"
/>
```
[![Edit Hero demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yw19mmpl99)

You can use Hero component with children too:

```html
<Hero>
    <Container>
        <Image className="w-75"
             src="http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Aston-Martin-White-Car-PNG-Image.png"/>
        <h1 className="display-3">GET YOUR CAR</h1>
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
[![Edit Hero with childrens demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yqqorl4qr1)

Note: if you use Hero component with children, properties `buttons`, `header`, `subHeader` and `subHeaderPosition` will not work

## Properties

| </br>Name         | </br>Type | </br>Summary                                                                                                                                           |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| isFixed           | `Boolean` | Define if background image is fixed. Default `true`                                                                                                    |
| isCentered        | `Boolean` | Define if content is centered. Default `true`                                                                                                          |
| particles         | `Boolean` | Define if component show particles animations. Default `true`                                                                                          |
| opacity           | `Number`  | Opacity level. Default `0`                                                                                                                             |
| parallaxOffset    | `Number`  | Offset of background image. Default `0`                                                                                                                |
| image             | `String`  | Url of background image. Default `""`                                                                                                                  |
| overlayColor      | `String`  | Overlay color of the component . Default `#fff`                                                                                                        |
| header            | `String`  | Header of the hero . Default `""`                                                                                                                      |
| subHeader         | `String`  | Sub header of the hero . Default `""`                                                                                                                  |
| subHeaderPosition | `String`  | Position of hero sub header. Default `"bottom"`, can be `"top"`                                                                                        |
| minHeight         | `String`  | Min height of hero. Default `"100vh"`                                                                                                                  |
| backgroundColor   | `String`  | Background color of the hero. Default `"transparent"`                                                                                                  |
| particlesParams   | `Object`  | Object with particles config. Default `{}`, yow can see [react-particles-js](https://www.npmjs.com/package/react-particles-js)                         |
| buttons           | `Array`   | Array with buttons to show in hero. Default `[]`, each element must be a object with this structure: `{text: "TELL ME MORE", onClick: ({button})=>{}}` |

## Theming variables

| </br>Name                           | </br>Summary                                  | </br>Default |
| ----------------------------------- | --------------------------------------------- | ------------ |
| --Hero\_\_Header-fontSize           | Font size of header in hero                   | `75px`       |
| --Hero\_\_Header-fontStyle          | Font style of header in hero                  | `normal`     |
| --Hero\_\_Header-color              | Color of header in hero                       | `#fff`       |
| --Hero\_\_Header-fontWeight         | Font weight of header in hero                 | `700`        |
| --Hero\_\_Header--phone-fontSize    | Font size of header in hero when is mobile    | `30px`       |
| --Hero\_\_SubHeader-fontSize        | Font size of subheader in hero                | `40px`       |
| --Hero\_\_SubHeader-color           | Color of subheader in hero                    | `#fff`       |
| --Hero\_\_SubHeader-fontStyle       | Font style of subheader in hero               | `italic`     |
| --Hero\_\_SubHeader--phone-fontSize | Font size of subheader in hero when is mobile | `20px`       |
| --Hero\_\_Button-color              | Color of buttons hero                         | `#fff`       |
| --Hero\_\_Button-backgroundColor    | Background color of buttons hero              | `#fed136`    |

## Used libraries

- [**react-particles-js**](https://www.npmjs.com/package/react-particles-js)
- [**react-lazy-hero**](http://react-lazy-hero.danielstefanovic.com/)
