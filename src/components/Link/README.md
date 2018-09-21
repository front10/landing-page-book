# Link

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Link` is used to create a link.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

###### (Recommended)
```js
import Link from "@front10/landing-page-book/dist/components/Link";
import "@front10/landing-page-book/dist/components/Link/style.css";
```
or

```js
import { Link } from '@front10/landing-page-book/dist/components';
import "@front10/landing-page-book/dist/themes/default/style.css";
```

2- Put this code into jsx page:
```html
<Link src="https://front10.com">
    Front10
</Link>
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| disabled      | `Boolean` | Disable or enable button. Default `false` |
| className      | `String` | Class to apply to button. Default `""` |
| tooltip      | `String` | Button tooltip. Default `""` |
| href      | `String` | Link to open. Default `undefined`, this prop is required |
| target      | `String` | Target of link. Default `""` |
