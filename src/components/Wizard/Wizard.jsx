import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StepZilla from 'react-stepzilla/dist/main';
import Header from '../Header';
import Card from '../Card';

class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onStepChange = this.onStepChange.bind(this);
  }

  componentWillMount() {
    const { startAtStep, steps } = this.props;
    this.setState({ currentItem: steps[startAtStep].name });
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
      steps
    } = this.props;
    const { currentItem } = this.state;
    return (
      <div className="Wizard">
        <Card contentAlign={contentAlign}>
          {showHeader && (
            <Header type="h5" className="pb-3" borderBottom={showHeaderBorder}>
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
  showHeader: PropTypes.bool,
  showHeaderBorder: PropTypes.bool,
  showNavigation: PropTypes.bool,
  prevBtnOnLastStep: PropTypes.bool,
  dontValidate: PropTypes.bool,
  preventEnterSubmission: PropTypes.bool,
  startAtStep: PropTypes.number,
  nextButtonText: PropTypes.string,
  backButtonText: PropTypes.string,
  nextButtonCls: PropTypes.string,
  backButtonCls: PropTypes.string,
  nextTextOnFinalActionStep: PropTypes.string,
  contentAlign: PropTypes.string,
  hocValidationAppliedTo: PropTypes.arrayOf(PropTypes.number),
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired,
  onStepChange: PropTypes.func
};
Wizard.defaultProps = {
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

export default Wizard;
