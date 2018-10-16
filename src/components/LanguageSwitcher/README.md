<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/LanguageSwitcher/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# LanguageSwitcher

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/LanguageSwitcher` is used to create a switcher language.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import LanguageSwitcher from '@front10/landing-page-book/dist/components/LanguageSwitcher';
import '@front10/landing-page-book/dist/components/LanguageSwitcher/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

2- Put this code into jsx page:

```html
<LanguageSwitcher languages={languages}
                  customLabels={customLabels}/>
```

## Example

```js
const languages = ['US', 'FR', 'ES', 'DE'];

const customLabels = {
  US: 'English',
  FR: 'Français',
  ES: 'Español',
  DE: 'Deutsch'
};
```

## Properties

| </br>Name        | </br>Type  | </br>Summary                                                                                                                                                                                                                           |
| ---------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showLabel        | `Boolean`  | Show or hide the label of selected language. Default `true`                                                                                                                                                                            |
| disabled         | `Boolean`  | Disable or enable the component. Default `false`                                                                                                                                                                                       |
| showOptionLabel  | `Boolean`  | Show or hide labels in option list. Default `true`                                                                                                                                                                                     |
| showFlag         | `Boolean`  | Show or hide flags. Default `true`                                                                                                                                                                                                     |
| showArrow        | `Boolean`  | Show or hide arrow expand. Default `true`                                                                                                                                                                                              |
| selectedLanguage | `String`   | Selected language. Default `""`                                                                                                                                                                                                        |
| placeholder      | `String`   | Placeholder to show when not selected language. Default `"Language"`                                                                                                                                                                   |
| languages        | `Array`    | Array of languages to show, an array with countries codes. Default `"[]"`, see example section. The complete list of countries can be found [here](https://github.com/ekwonye-richard/react-flags-select/blob/master/src/countries.js) |
| customLabels     | `Object`   | Configure label of languages. Default `"{}"`, see example section                                                                                                                                                                      |
| onSelect         | `Function` | Called when language selection change. Params `{language}`                                                                                                                                                                             |

## Theming variables

| </br>Name                                           | </br>Summary                  | </br>Default |
| --------------------------------------------------- | ----------------------------- | ------------ |
| --LanguageSwitcher-borderRadius                     | Border radius                 | `0px`        |
| --LanguageSwitcher-fontSize                         | Font size                     | `0.7rem`     |
| --LanguageSwitcher\_\_Option--hover-backgroundColor | Option hover background color | `#eaeaea`    |
| --LanguageSwitcher\_\_Option--hover-color           | Option hover color            | `#000`       |
| --LanguageSwitcher\_\_Option-color                  | Option color                  | `#000`       |
| --LanguageSwitcher--disabled-color                  | disabled color                | `#b5b5b5`    |
