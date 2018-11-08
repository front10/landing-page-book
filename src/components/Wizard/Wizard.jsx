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
   * Class name of header.
   */
  className: PropTypes.string,
  /**
   * Show or hide the header with steps.
   */
  showHeader: PropTypes.bool,
  /**
   * Show or hide the header bottom border.
   */
  showHeaderBorder: PropTypes.bool,
  /**
   * Hide or show Next and Previous Buttons at the bottom.
   */
  showNavigation: PropTypes.bool,
  /**
   * Show or hide the previous button in the last step (maybe the last step is a thank you message and you don't want them to go back).
   */
  prevBtnOnLastStep: PropTypes.bool,
  /**
   * Dev control to disable validation rules called in step components.
   */
  dontValidate: PropTypes.bool,
  /**
   * By default if you hit the Enter key on any element it validates the form and moves to next step if validation passes. Use this to prevent this behaviour.
   */
  preventEnterSubmission: PropTypes.bool,
  /**
   * Specify what step to start from in the case you need to skip steps (send in a 0 based index for the item in the steps array. e.g. 2 will load <Step3 /> initially).
   */
  startAtStep: PropTypes.number,
  /**
   * Specify the next button text.
   */
  nextButtonText: PropTypes.string,
  /**
   * Specify the back button text.
   */
  backButtonText: PropTypes.string,
  /**
   * Specify the next button class.
   */
  nextButtonCls: PropTypes.string,
  /**
   * Specify the back button class.
   */
  backButtonCls: PropTypes.string,
  /**
   * Specify what the next button text should be in the step before the last.
   */
  nextTextOnFinalActionStep: PropTypes.string,
  /**
   * Specify the align of wizard components. Can be <code>'left'</code>, <code>'right'</code> and <code>'center'</code>
   */
  contentAlign: PropTypes.string,
  /**
   * Its recommended that you use basic javascript validation.
   */
  hocValidationAppliedTo: PropTypes.arrayOf(PropTypes.number),
  /**
   * List of steps.
   */
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired,
  /**
   * Called when 'Back' or 'Next' button is clicked.
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
