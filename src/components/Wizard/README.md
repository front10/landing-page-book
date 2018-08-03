# Wizard

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Wizard` is used to create a wizard based in [react-stepzilla](https://github.com/newbreedofgeek/react-stepzilla).

## How to use
1- Add following content to import the component:
```js
import {Wizard} from '@front10/landing-page-book/src/components';
```

2- Put this code into jsx page:
```html
<Wizard steps={steps} />
```

## Example
```js
const steps = [{
  name: "Step 1",
  component: <Container>
    <Video
      source='https://youtu.be/dCrLwWdju68'
    />
  </Container>
}, {
  name: "Step 2",
  component: <Container>
    <Gif
      autoplay
      image="images/gif/write.gif"
    />
  </Container>
}];
```

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showHeader      | `Boolean` | Show or hide the header with steps. Default `true` |
| showHeaderBorder      | `Boolean` | Show or hide the header bottom border. Default `true` |
| showNavigation      | `Boolean` | Hide or show Next and Previous Buttons at the bottom. Default `true` |
| prevBtnOnLastStep      | `Boolean` | Show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back). Default `true` |
| dontValidate      | `Boolean` | Dev control to disable validation rules called in step components. Default `true` |
| preventEnterSubmission      | `Boolean` | By default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour. Default `true` |
| startAtStep      | `Number` | Specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially). Default `0` |
| nextButtonText      | `String` | Specify the next button text. Default `"Next"` |
| backButtonText      | `String` | Specify the back button text. Default `"Back"` |
| nextButtonCls      | `String` | Specify the next button class. Default `"btn btn-primary pull-right"` |
| backButtonCls      | `String` | Specify the back button class. Default `"btn btn-primary pull-left"` |
| nextTextOnFinalActionStep      | `String` | Specify what the next button text should be in the step before the last. Default `"Next"` |
| contentAlign      | `String` | Specify the align of wizard components. Default `"left"`, can be `left`, `right` and `center` |
| hocValidationAppliedTo      | `Array` |  Its recommended that you use basic javascript validation. Default `[]` |
| steps      | `Array` | List of steps. Default `undefuned`, this prop is `required`, see example section |
| onStepChange      | `Function` | Called when `Back` or `Next` button is clicked. Params `{step}` |

