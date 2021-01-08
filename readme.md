 <a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/readme.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

<h1 style="text-align: center;">
    <a href="http://front10.com/">
        <img src="https://github.com/front10/landing-page-book/blob/master/assets/images/logo/logo-frton10.jpg?raw=true" alt="Front10 Component Explorer" width="200">
    </a>
</h1>

# Landing Page Book

`@front10/landing-page-book` is a kit of landing-page React components.

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![BrowserStack Status](https://www.browserstack.com/automate/badge.svg?badge_key=RTE2VCtMNjNYRVp2aW9qOG1rQkZraUhPa1plTEp4Q3poSmowSXhNR3Qxaz0tLW1BbzZ6OVYzbjR1NnlJNTJ6b1ZUMFE9PQ==--1b0d9055f474643cca6b099912dfd18bfc361869)](https://www.browserstack.com/automate/public-build/RTE2VCtMNjNYRVp2aW9qOG1rQkZraUhPa1plTEp4Q3poSmowSXhNR3Qxaz0tLW1BbzZ6OVYzbjR1NnlJNTJ6b1ZUMFE9PQ==--1b0d9055f474643cca6b099912dfd18bfc361869)
[![Coverage Status](https://coveralls.io/repos/github/front10/landing-page-book/badge.svg?branch=master)](https://coveralls.io/github/front10/landing-page-book?branch=master)
[![Build Status](https://travis-ci.com/front10/landing-page-book.svg?branch=master)](https://travis-ci.com/front10/landing-page-book)

## Setup

```sh
npm install --save @front10/landing-page-book
```

## Usage

```js
import React, { Component } from 'react';
import { Hero, Navbar } from '@front10/landing-page-book/dist/components';
```

```js
import 'bootstrap/dist/css/bootstrap.min.css';
import '@front10/landing-page-book/dist/themes/default/index.css';
```

```jsx
class App extends Component {
  render() {
    <div className="App">
      <Navbar brandLink="https://front10.com" brandLogo="https://front10.com/img/logos/logo.png" />
      <Hero
        backgroundColor="#212529"
        particlesParams={{ particles: { line_linked: { enable: false } } }}
        header="Landing Page Book"
        subHeader="Some cool text"
      />
    </div>;
  }
}
```

<a target="_blank" href="https://codesandbox.io/s/jp0kzqlj29">
  <img alt="Edit Landing page example" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Available Components

| Main components                                                                                            |                                                                                                                          |                                                                                                                |                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`Navbar`](https://github.com/front10/landing-page-book/tree/master/src/components/Navbar)                 | [`BackersOpenCollective`](https://github.com/front10/landing-page-book/tree/master/src/components/BackersOpenCollective) | [`ImageList`](https://github.com/front10/landing-page-book/tree/master/src/components/ImageList)               | [`Image`](https://github.com/front10/landing-page-book/tree/master/src/components/Image)     |
| [`Hero`](https://github.com/front10/landing-page-book/tree/master/src/components/Hero)                     | [`Team`](https://github.com/front10/landing-page-book/tree/master/src/components/Team)                                   | [`Location`](https://github.com/front10/landing-page-book/tree/master/src/components/Location)                 | [`Icon`](https://github.com/front10/landing-page-book/tree/master/src/components/Icon)       |
| [`Section`](https://github.com/front10/landing-page-book/tree/master/src/components/Section)               | [`Sponsors`](https://github.com/front10/landing-page-book/tree/master/src/components/Sponsors)                           | [`Social`](https://github.com/front10/landing-page-book/tree/master/src/components/Social)                     | [`Input`](https://github.com/front10/landing-page-book/tree/master/src/components/Input)     |
| [`Features`](https://github.com/front10/landing-page-book/tree/master/src/components/Features)             | [`BuiltWith`](https://github.com/front10/landing-page-book/tree/master/src/components/BuiltWith)                         | [`Video`](https://github.com/front10/landing-page-book/tree/master/src/components/Video)                       | [`Label`](https://github.com/front10/landing-page-book/tree/master/src/components/Label)     |
| [`GithubButton`](https://github.com/front10/landing-page-book/tree/master/src/components/GithubButton)     | [`ContactInfo`](https://github.com/front10/landing-page-book/tree/master/src/components/ContactInfo)                     | [`LanguageSwitcher`](https://github.com/front10/landing-page-book/tree/master/src/components/LanguageSwitcher) | [`Link`](https://github.com/front10/landing-page-book/tree/master/src/components/Link)       |
| [`Code`](https://github.com/front10/landing-page-book/tree/master/src/components/Code)                     | [`ContactUs`](https://github.com/front10/landing-page-book/tree/master/src/components/ContactUs)                         | [`Wizard`](https://github.com/front10/landing-page-book/tree/master/src/components/Wizard)                     | [`TextBox`](https://github.com/front10/landing-page-book/tree/master/src/components/TextBox) |
| [`BrowserSupport`](https://github.com/front10/landing-page-book/tree/master/src/components/BrowserSupport) | [`Copyright`](https://github.com/front10/landing-page-book/tree/master/src/components/Copyright)                         | [`Browser`](https://github.com/front10/landing-page-book/tree/master/src/components/Browser)                   | [`Card`](https://github.com/front10/landing-page-book/tree/master/src/components/Card)       |
| [`Gif`](https://github.com/front10/landing-page-book/tree/master/src/components/Gif)                       | [`Donation`](https://github.com/front10/landing-page-book/tree/master/src/components/Donation)                           | [`Button`](https://github.com/front10/landing-page-book/tree/master/src/components/Button)                     |
| [`Backers`](https://github.com/front10/landing-page-book/tree/master/src/components/Backers)               | [`Footer`](https://github.com/front10/landing-page-book/tree/master/src/components/Footer)                               | [`Header`](https://github.com/front10/landing-page-book/tree/master/src/components/Header)                     |

| Third-Party integrations                                                                                             |                                                                                                              |                                                                                                  |                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [`GoogleAnalytics`](https://github.com/front10/landing-page-book/tree/master/src/components/Analytics/Analytics.jsx) | [`GoogleMap`](https://github.com/front10/landing-page-book/tree/master/src/components/Location/Location.jsx) | [`Github`](https://github.com/front10/landing-page-book/tree/master/src/components/GithubButton) | [`OpenCollective`](https://github.com/front10/landing-page-book/tree/master/src/components/BackersOpenCollective/BackersOpenCollective.jsx) |

## Custom styles

Read our [theming documentation](https://github.com/front10/landing-page-book/blob/master/theming.md).

## Integration

- [React App boilerplate](https://github.com/front10/landing-page-create-react-app)
- [Gatsby boilerplate](https://github.com/front10/landing-page-gatsby)
- [Woxo.tech](https://woxo.tech)

## Tests

```bash
npm run test
```

## Coding styles

- [Airbnb Styleguide](https://github.com/airbnb/javascript/tree/master/react)

## Built With

- [React](https://reactjs.org/)
- [React StoryBook](https://storybook.js.org)
- [Gatsby](https://github.com/front10/landing-page-gatsby)

## Authors

- **Front10-dev** - _Initial work_ - [Front10](http://front10.com/)

See also the list of [contributors](https://github.com/front10/landing-page-book/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/front10/landing-page-book/blob/master/LICENSE.md) file for details.

## Browsers support

| <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/archive/chrome_12-48/chrome_12-48_48x48.png" alt="Chrome" width="24px" height="24px" /></br>Chrome | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" /></br>IE / Edge | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /></br>Opera | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /></br>iOS Safari | <img src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/45.5.0/archive/android/android_48x48.png" alt="Android" width="24px" height="24px" /></br>Android |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| >=45                                                                                                                                                                     | >=10/>=12                                                                                                                                              | >=38                                                                                                                                                     | >=30                                                                                                                                             | >=9                                                                                                                                                  | >=9.0                                                                                                                                                                | >=6.2                                                                                                                                                            |



## Changelog

Detailed version information in our [Changelog](https://github.com/front10/landing-page-book/blob/master/changelog.md).
