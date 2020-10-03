import { Button, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { Fragment } from 'react';
import AddressForm from './AddressForm';

const styles = makeStyles((theme) => ({
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '3rem',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

function getSteps() {
  return ['Shipping Address', 'Payment Details', 'Review your Order'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <AddressForm />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

const Main = () => {
  const classes = styles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Fragment>
      <Typography variant='h4' component='h1' align='center'>
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <div>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  addressLine1: '',
                  addressLine2: '',
                  city: '',
                  state: '',
                  zipcode: '',
                  country: '',
                }}
              >
                {({ errors }) => (
                  <Form id='form'>
                    {console.log('errors', errors)}
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                        Back
                      </Button>
                      <Button variant='contained' color='primary' onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Main;
