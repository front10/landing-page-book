# Header

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Header` is used to create a nav-bar component.

## How to use
1- Add following content to import the component:
```js
import {Header} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Header rightItems={rightItems}
        leftItems={leftItems}
        onItemClick={onItemClick}/>
```
You can use Header component with children too:
```html
<Header>
    <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link text-light" href="#">
                <i className="fa fa-google mr-1"></i>
                Google
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link text-light" href="#">
                <i className="fa fa-facebook-official mr-1"></i>
                Facebook
            </a>
        </li>
    </ul>
    <form className="form-inline mt-2 mt-md-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
    </form>
</Header>
```
Note: if you use Header component with children, properties `leftItems`, `rightItems` and `onItemClick` will not work

## Example
```js
const leftItems = [{
	title: "Google",
	href: "https://google.com",
	target: "_blank",
	icon: "fa fa-google"
}, {
	title: "Facebook",
	href: "https://facebook.com",
	target: "_blank",
	icon: "fa fa-facebook-official"
}];

const rightItems = [{
	title: "Services"
}, {
	title: "What we do"
}, {
	title: "Process"
}, {
	title: "Founders"
}, {
	title: "Contact"
}];

const onItemClick= ({item})=>{
	//Put your code here
}
```
## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| transparent      | `Boolean` | Define if component is transparent. Default `false` |
| fixed      | `Boolean` | Define if component is fixed. Default `false` |
| companyName      | `String` | Company name of component. Default `""` |
| companyLink      | `String` | Link to go when company name or logo has clicked. Default `""` |
| companyLogo      | `String` | Image logo url. Default `""` |
| className      | `String` | Class to apply. Default `""` |
| expand      | `String` | Resolution to expand Header. Default `"md"` |
| leftItems      | `Array` | Array of items to show in nav-bar left side. Default `[]` |
| rightItems      | `Array` | Array of items to show in nav-bar right side. Default `[]`, see example section|
| onItemClick      | `Function` | Called when item has clecked. See example section|
