# Link

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Link` is used to create a link.

## How to use
1- Add following content to import the component:
```js
import {Link} from '@front10/landing-page-book/src/components';
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
