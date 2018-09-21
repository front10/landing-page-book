# LanguageSwitcher

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview

`@front10/landing-page-book/LanguageSwitcher` is used to create a switcher language.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import LanguageSwitcher from "@front10/landing-page-book/dist/components/LanguageSwitcher";
import "@front10/landing-page-book/dist/components/LanguageSwitcher/style.css";
```
or

```js
import { LanguageSwitcher } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

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

## Properties:

| </br>Name        | </br>Type  | </br>Summary                                                                                   |
| ---------------- | ---------- | ---------------------------------------------------------------------------------------------- |
| showLabel        | `Boolean`  | Show or hide the label of selected language. Default `true`                                    |
| disabled         | `Boolean`  | Disable or enable the component. Default `false`                                               |
| showOptionLabel  | `Boolean`  | Show or hide labels in option list. Default `true`                                             |
| showFlag         | `Boolean`  | Show or hide flags. Default `true`                                                             |
| showArrow        | `Boolean`  | Show or hide arrow expand. Default `true`                                                      |
| selectedLanguage | `String`   | Selected language. Default `"US"`                                                              |
| placeholder      | `String`   | Placeholder to show when not selected language. Default `"Language"`                           |
| languages        | `Array`    | Array of languages to show, an array with countries codes. Default `"[]"`, see example section |
| customLabels     | `Object`   | Configure label of languages. Default `"{}"`, see example section                              |
| onSelect         | `Function` | Called when language selection change. Params `{language}`                                     |
