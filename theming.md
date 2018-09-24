<h1 style="text-align: center;">
    <a href="http://front10.com/">
        <img src="./assets/images/logo/logo-frton10.jpg" alt="Front10 Component Explorer" width="200">
    </a>
</h1>

# Landing Page Book

`@front10/landing-page-book` is a kit of landing-page components to be share across the web.

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Theming

Customize @front10/landing-page-book with our built-in Css variables for global style preferences for easy theming and component changes.

## File structure

```
@fornt10/landing-page-book
└─ dist
    └─ components
       └─ Component-x
          └─ style.css
          └─ stylelegacy_browsers.css
          └─ style.scss
    └─ themes
       └─ default
          └─ index.css
          └─ index.legacy_browsers.css
          └─ index.scss
          └─ variables.scss
```

## How use style

You have two ways of use our styles

1-Import all components in a theme:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@front10/landing-page-book/dist/themes/default/index.css';
```

2-Import each component by separated:

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@front10/landing-page-book/dist/components/Button/style.css';
```

## Default variables

Default variables are in each component's documents , in `Theming variables` section.

## Override default variables

You can use components variables with default values. Ex:

```jsx
import '@front10/landing-page-book/dist/components/Button/style.css';
import Button from '@front10/landing-page-book/dist/components/Button';
```

```jsx
class MyComponent extends Component {
  render() {
    return <Button>Home</Button>;
  }
}
```

<img src="./assets/images/demo/btn-default.png" alt="Default button">

if you want create a theme for button, create a `custom-theme.css` with the following content and import it into your app:

```css
--Button-borderRadius: 20px;
--Button-fontSize: 2rem;
```

```jsx
import '@front10/landing-page-book/dist/components/Button/style.css';
import Button from '@front10/landing-page-book/dist/components/Button';
import './custom-theme.css';
```

```jsx
class MyComponent extends Component {
  render() {
    return <Button>Home</Button>;
  }
}
```

<img src="./assets/images/demo/btn-custom.png" alt="Custom button">
