import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StepZilla from 'react-stepzilla/dist/main';
import Header from '../Header';
import Card from '../Card';
import extractProps from '../../helpers/ExtractProps';
import withStyles from '../../helpers/WithStyles';

class Wizard extends Component {
  constructor(props) {
    super(props);
    const { startAtStep, steps } = this.props;
    this.state = { currentItem: steps[startAtStep].name };
    this.onStepChange = this.onStepChange.bind(this);
  }

  onStepChange(step) {
    const { steps, onStepChange } = this.props;
    this.setState({ currentItem: steps[step].name });
    onStepChange({ step });
  }

  render() {
    const {
      showNavigation,
      showHeaderBorder,
      prevBtnOnLastStep,
      dontValidate,
      preventEnterSubmission,
      startAtStep,
      nextButtonText,
      backButtonText,
      nextButtonCls,
      backButtonCls,
      nextTextOnFinalActionStep,
      hocValidationAppliedTo,
      contentAlign,
      showHeader,
      steps,
      className
    } = this.props;
    const { currentItem } = this.state;
    return (
      <div className="Wizard">
        <Card contentAlign={contentAlign} className={className}>
          {showHeader && (
            <Header
              type="h5"
              className="pb-3"
              borderBottom={showHeaderBorder}
              {...extractProps('header', this.props)}
            >
              {currentItem}
            </Header>
          )}
          <StepZilla
            showNavigation={showNavigation}
            showSteps={false}
            stepsNavigation={false}
            prevBtnOnLastStep={prevBtnOnLastStep}
            dontValidate={dontValidate}
            preventEnterSubmission={preventEnterSubmission}
            startAtStep={startAtStep}
            nextButtonText={nextButtonText}
            backButtonText={backButtonText}
            nextButtonCls={nextButtonCls}
            backButtonCls={backButtonCls}
            nextTextOnFinalActionStep={nextTextOnFinalActionStep}
            hocValidationAppliedTo={hocValidationAppliedTo}
            steps={steps}
            onStepChange={this.onStepChange}
          />
        </Card>
      </div>
    );
  }
}

Wizard.propTypes = {
  /**
   * Class name of header. Default `""`
   */
  className: PropTypes.string,
  /**
   * Show or hide the header with steps. Default `true`
   */
  showHeader: PropTypes.bool,
  /**
   * Show or hide the header bottom border. Default `true`
   */
  showHeaderBorder: PropTypes.bool,
  /**
   * Hide or show Next and Previous Buttons at the bottom. Default `true`
   */
  showNavigation: PropTypes.bool,
  /**
   * Show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back). Default `true`
   */
  prevBtnOnLastStep: PropTypes.bool,
  /**
   * Dev control to disable validation rules called in step components. Default `true`
   */
  dontValidate: PropTypes.bool,
  /**
   * By default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour. Default `true`
   */
  preventEnterSubmission: PropTypes.bool,
  /**
   * Specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially). Default `0`
   */
  startAtStep: PropTypes.number,
  /**
   * Specify the next button text. Default `"Next"`
   */
  nextButtonText: PropTypes.string,
  /**
   * Specify the back button text. Default `"Back"`
   */
  backButtonText: PropTypes.string,
  /**
   * Specify the next button class. Default `"btn btn-primary pull-right"`
   */
  nextButtonCls: PropTypes.string,
  /**
   * Specify the back button class. Default `"btn btn-primary pull-left"`
   */
  backButtonCls: PropTypes.string,
  /**
   * Specify what the next button text should be in the step before the last. Default `"Next"`
   */
  nextTextOnFinalActionStep: PropTypes.string,
  /**
   * Specify the align of wizard components. Default `"left"`, can be `left`, `right` and `center`
   */
  contentAlign: PropTypes.string,
  /**
   * Its recommended that you use basic javascript validation. Default `[]`
   */
  hocValidationAppliedTo: PropTypes.arrayOf(PropTypes.number),
  /**
   * List of steps. Default `undefuned`, this prop is `required`, see example section
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired,
  /**
   * Called when `Back` or `Next` button is clicked.
   */
  onStepChange: PropTypes.func
};
Wizard.defaultProps = {
  className: '',
  showHeader: true,
  showHeaderBorder: true,
  showNavigation: true,
  prevBtnOnLastStep: true,
  dontValidate: true,
  preventEnterSubmission: true,
  startAtStep: 0,
  nextButtonText: 'Next',
  backButtonText: 'Back',
  nextButtonCls: 'btn btn-primary pull-right',
  backButtonCls: 'btn btn-primary pull-left',
  nextTextOnFinalActionStep: 'Next',
  contentAlign: 'left',
  hocValidationAppliedTo: [],
  onStepChange: () => {}
};

export default withStyles(Wizard);
