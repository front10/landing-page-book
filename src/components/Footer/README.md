<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Footer/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Footer

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Footer

`@front10/landing-page-book/Footer` is used to create footers.

## How to use

1- Importing bootstrap style

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

2- Add following content to import the component:

```js
import Footer from '@front10/landing-page-book/dist/components/Footer';
import '@front10/landing-page-book/dist/components/Footer/style.css';
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:

```html
<Footer/>
```
<a target="_blank" href="https://codesandbox.io/s/x40y1npnw">
  <img alt="Edit Footer demo" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

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
<a target="_blank" href="https://codesandbox.io/s/14vnz2l3xq">
  <img alt="Edit Footer with childrens" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Example

```js
const sections = [
  {
    name: 'Features',
    sections: [
      {
        name: 'Cool stuff',
        url: 'https://front10.com'
      },
      {
        name: 'Random feature',
        url: 'https://front10.com'
      },
      {
        name: 'Team feature',
        url: 'https://front10.com'
      },
      {
        name: 'Stuff for developers',
        url: 'https://front10.com'
      },
      {
        name: 'Another one',
        url: 'https://front10.com'
      },
      {
        name: 'Last time',
        url: 'https://front10.com'
      }
    ]
  },
  {
    name: 'Resources',
    sections: [
      {
        name: 'Resource',
        url: 'https://front10.com'
      },
      {
        name: 'Resource name',
        url: 'https://front10.com'
      },
      {
        name: 'Another resource',
        url: 'https://front10.com'
      },
      {
        name: 'Final resource',
        url: 'https://front10.com'
      }
    ]
  },
  {
    name: 'About',
    sections: [
      {
        name: 'Team',
        url: 'https://front10.com'
      },
      {
        name: 'Locations',
        url: 'https://front10.com'
      },
      {
        name: 'Privacy',
        url: 'https://front10.com'
      },
      {
        name: 'Terms',
        url: 'https://front10.com'
      }
    ]
  }
];
```

## Properties:

| </br>Name     | </br>Type | </br>Summary                                                             |
| ------------- | --------- | ------------------------------------------------------------------------ |
| socialRounded | `Boolean` | Define if socials buttons are rounded. Default `true`                    |
| socialGray    | `Boolean` | Define if socials buttons are gray. Default `false`                      |
| socialUrl     | `String`  | Url to share in socials networks. Default `""`                           |
| copyright     | `String`  | Text of copyright. Default `""`                                          |
| socials       | `Array`   | Array of string with values of socials networks to display. Default `[]` |
| sections      | `Array`   | Sections to show . Default `[]`, see example section                     |

## Theming variables

| </br>Name                                 | </br>Summary                           | </br>Default |
| ----------------------------------------- | -------------------------------------- | ------------ |
| --Footer-color                            | Color of footer                        | `#cccccc`    |
| --Footer-backgroundColor                  | Background color of footer             | `#383d45`    |
| --Footer\_\_Sections\_\_Link--hover-color | Hover color of sections in footer      | `#fed136`    |
| --Footer\_\_Sections\_\_Header-fontSize   | Font size of sections header in footer | `1.5rem`     |
| --Footer\_\_Sections\_\_Link-fontSize     | Font size of sections links in footer  | `0.8rem`     |
| --Footer\_\_Copyright-fontSize            | Font size of copy right in footer      | `0.8rem`     |
| --Footer-backgroundImage                  | Footer background image                | `none`       |
