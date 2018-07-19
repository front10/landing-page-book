# Footer

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Footer
`@front10/landing-page-book/Footer` is used to create footers.

## How to use
1- Add following content to import the component:
```js
import {Footer} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Footer/>
```
You can use Footer component with children too:
```html
<Footer>
    <div className="row">
        <div className="col-sm-12 col-md">
            <Copyright text="Front10, Inc" showAllRightText={false}/>
        </div>
        <div className="col-sm-12 col-md mt-3 mt-md-0">
            <img src="https://front10.com/img/logos/logo-main.png" width={80}/>
        </div>
        <div className="col-sm-12 col-md mt-3 mt-md-0">
            <Social type="twitter" url="https://front10.com" gray/>
            <Social type="facebook" url="https://front10.com" gray/>
            <Social type="linkedin" url="https://front10.com" gray/>
        </div>
    </div>
</Footer>
```

## Example
```js
const sections = [{
	name: "Features",
	sections: [{
		name: "Cool stuff",
		url: "https://front10.com"
	}, {
		name: "Random feature",
		url: "https://front10.com"
	}, {
		name: "Team feature",
		url: "https://front10.com"
	}, {
		name: "Stuff for developers",
		url: "https://front10.com"
	}, {
		name: "Another one",
		url: "https://front10.com"
	}, {
		name: "Last time",
		url: "https://front10.com"
	}]
}, {
	name: "Resources",
	sections: [{
		name: "Resource",
		url: "https://front10.com"
	}, {
		name: "Resource name",
		url: "https://front10.com"
	}, {
		name: "Another resource",
		url: "https://front10.com"
	}, {
		name: "Final resource",
		url: "https://front10.com"
	}]
}, {
	name: "About",
	sections: [{
		name: "Team",
		url: "https://front10.com"
	}, {
		name: "Locations",
		url: "https://front10.com"
	}, {
		name: "Privacy",
		url: "https://front10.com"
	}, {
		name: "Terms",
		url: "https://front10.com"
	}]
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| socialRounded      | `Boolean` | Define if socials buttons are rounded. Default `true` |
| socialGray      | `Boolean` | Define if socials buttons are gray. Default `false` |
| socialUrl      | `String` | Url to share in socials networks. Default `""` |
| copyright      | `String` | Text of copyright. Default `""` |
| socials      | `Array` | Array of string with values of socials networks to display. Default `[]` |
| sections      | `Array` | Sections to show . Default `[]`, see example section |
