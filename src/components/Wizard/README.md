# Wizard
  [![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
  

  ## Properties
  | </br>Name | </br>Type | </br>Summary | </br>Default | 
| ---- | ---- | ---- | ---- |
| backButtonCls | `string` | Specify the back button class. Default `"btn btn-primary pull-left"` | `'btn btn-primary pull-left'` |
| backButtonText | `string` | Specify the back button text. Default `"Back"` | `'Back'` |
| className | `string` | Class name of header. Default `""` | `''` |
| contentAlign | `string` | Specify the align of wizard components. Default `"left"`, can be `left`, `right` and `center` | `'left'` |
| dontValidate | `bool` | Dev control to disable validation rules called in step components. Default `true` | `true` |
| hocValidationAppliedTo | `arrayOf` | Its recommended that you use basic javascript validation. Default `[]` | `[]` |
| nextButtonCls | `string` | Specify the next button class. Default `"btn btn-primary pull-right"` | `'btn btn-primary pull-right'` |
| nextButtonText | `string` | Specify the next button text. Default `"Next"` | `'Next'` |
| nextTextOnFinalActionStep | `string` | Specify what the next button text should be in the step before the last. Default `"Next"` | `'Next'` |
| onStepChange | `func` | Called when `Back` or `Next` button is clicked. | `() => {}` |
| prevBtnOnLastStep | `bool` | Show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back). Default `true` | `true` |
| preventEnterSubmission | `bool` | By default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour. Default `true` | `true` |
| showHeader | `bool` | Show or hide the header with steps. Default `true` | `true` |
| showHeaderBorder | `bool` | Show or hide the header bottom border. Default `true` | `true` |
| showNavigation | `bool` | Hide or show Next and Previous Buttons at the bottom. Default `true` | `true` |
| startAtStep | `number` | Specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially). Default `0` | `0` |
| steps<font color="red">*</font> | `arrayOf` | List of steps. Default `undefuned`, this prop is `required`, see example section |  |