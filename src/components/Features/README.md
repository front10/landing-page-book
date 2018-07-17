# Code

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Features` is used to show your project features.

## How to use

1- Add following content to import the component

```js
import {Feature} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page

```html

 <Features 
          cardClass="bg-primary"
          showImage
          imageSrc="images/features/dashboard.png"
          imageClass="bg-white"
          imageAlt="Features example"
          showTitle
          titleText="Features"
          titleClass="text-white"
          showSubTitle
          subTitleText="Blue theme"
          subTitleClass="text-white"
          showDescriptionText
          descriptionText="React component to show all your project features!"
          descriptionClass="text-white"
          showFooter
          footerClass=""
          showFooterLink
          footerLinkText="See more..."
          footerLinkClass="text-white"
          footerLinkHref="#!"
        />

```

## Properties

| </br>Name             | </br>Type | </br>Summary                                                                          | 
| ----------------------| --------- | ------------------------------------------------------------------------------------- |
| showImage             | `Boolean` | Shows image on top of the card, Default `true`
| showTitle             | `Boolean` | Shows Title text, Default `true`
| showSubTitle          | `Boolean` | Shows Subtitle text, Default `true`
| showDescriptionText   | `Boolean` | Shows Description text, Default `true`
| showfooter            | `Boolean` | Shows footer, Default `true`
| showFooterLink        | `String`  | Shows footer link, Default `true`
| cardClass             | `String`  | Add class name to card.
| imageSrc              | `String`  | source from image to show, `path, url`
| imageClass            | `String`  | Add class to img element.
| imageAlt              | `String`  | Alt text on img element.
| titleText             | `String`  | Title text.
| titleClass            | `String`  | Add class to Title text.
| subTitleText          | `String`  | Subtitle text.
| subTitleClass         | `String`  | Add class to subtitle text.
| descriptionText       | `String`  | Description text.
| descriptionClass      | `String`  | Add class to description text.
| footerClass           | `String`  | Add class to Footer element.
| footerLinkText        | `String`  | Footer link text, i. g. `see more...`
| footerLinkClass       | `String`  | Add class to footer link
| footerLinkHref        | `String`  | Footer link hrf property, `href="#!"`