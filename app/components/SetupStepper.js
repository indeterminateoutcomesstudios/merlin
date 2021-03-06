import React from 'react'
import PropTypes from 'prop-types'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import SelectRacesTableStep from '../containers/SelectRacesTableStep'
import Button from '@material-ui/core/Button'
import SelectSocialClassesTableStep from '../containers/SelectSocialClassesTableStep'
import SelectMinorAbilitiesTableStep from '../containers/SelectMinorAbilitiesTableStep'

class SetupStepper extends React.Component {
  constructor() {
    super()
    this.state = { activeStep: 0 }

    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleNext() {
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }

  handleBack() {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }))
  }

  handleReset() {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { activeStep } = this.state
    let currentStep = <SelectRacesTableStep/>
    if (activeStep !== 0) {
      currentStep = activeStep === 1 ? <SelectSocialClassesTableStep/> : <SelectMinorAbilitiesTableStep/>
    }

    return (
      <React.Fragment>
        <Stepper activeStep={activeStep}>
          {this.props.steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        {currentStep}
        <Button
          disabled={activeStep === 0}
          onClick={this.handleBack}
        >
          Back
        </Button>
        <Button
          disabled={activeStep === this.props.steps.length - 1}
          onClick={this.handleNext}
        >
          Next
        </Button>
      </React.Fragment>
    )
  }
}

export default SetupStepper

SetupStepper.propTypes = {
  steps: PropTypes.array,
}
