# Navbar

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Navbar` is used to create a nav-bar component.

## How to use
1- Add following content to import the component:
```js
import {Navbar} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Navbar rightItems={rightItems}
        leftItems={leftItems}
        onItemClick={onItemClick}/>
```
You can use Navbar component with children too:
```html
<Navbar>
    <NavbarNav>
        <NavbarLink>
            <Icon className="mr-1"
                  icon="fa fa-google" />
            Google
        </NavbarLink>
        <NavbarLink>
            <Icon className="mr-1"
                  icon="fa fa-facebook-official "/>
            Facebook
        </NavbarLink>
    </NavbarNav>
    <form className="form-inline mt-2 mt-md-0">
        <Input className="mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <Button className="btn-outline-warning my-2 my-sm-0">Search</Button>
    </form>
</Navbar>
```
Note: if you use Navbar component with children, properties `leftItems`, `rightItems` and `onItemClick` will not work

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
| expand      | `String` | Resolution to expand Navbar. Default `""` |
| leftItems      | `Array` | Array of items to show in nav-bar left side. Default `[]` |
| rightItems      | `Array` | Array of items to show in nav-bar right side. Default `[]`, see example section|
| onItemClick      | `Function` | Called when item has clecked. See example section|
