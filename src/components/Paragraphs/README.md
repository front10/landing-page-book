<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Paragraphs/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Paragraphs

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/Paragraphs` is used to create labels.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Paragraphs from '@front10/landing-page-book/dist/components/Paragraphs';
import '@front10/landing-page-book/dist/components/Paragraphs/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Paragraphs text="This is a paragraphs"/>
```

## Properties

| </br>Name     | </br>Type | </br>Summary                                                                            |
| ------------- | --------- | --------------------------------------------------------------------------------------- |
| text          | `Text`    | Text of the paragraphs,  this prop is required.                                         |
| textAlign     | `String`  | Paragraph alignment. Default  `justify`, can be `left`, `center` and `right`            |
| textTransform | `String`  | Paragraph text transform. Default `""` , can be `lowercase`, `uppercase`, `capitalize`  |
| textTruncate  | `Boolean` | Truncate the paragraph. Default `false`                                                 |
| textMonoSpace | `Boolean` | Show content using mono spaced text. Default `false`                                    |
| fontItalic    | `Boolean` | Show content using an italic font. Default `false`                                      |
| fontWeight    | `Boolean` | Weight of the font. Default `normal`, can be `bold`, `normal`, `light`                  |
| color         | `String`  | Color of the paragraphs. Default `body`, can be `primary`, `secondary`,`success`, `danger`,`warning`,`info`, `light`, `dark`, `body`|
