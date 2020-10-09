import { Button, makeStyles, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import React, { Fragment } from 'react';
import AddressForm from './AddressForm';
import * as Yup from 'yup';

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

function getStepContent(stepIndex, touched, errors, values, handleChange, handleBlur) {
  switch (stepIndex) {
    case 0:
      return <AddressForm touched={touched} errors={errors} values={values} handleChange={handleChange} handleBlur={handleBlur} />;
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
  const [isSubmitting, setSubmitting] = React.useState(false);
  const validationSchema = [
    Yup.object().shape({
      firstName: Yup.string().required('First Name is required'),
      addressLine1: Yup.string().required('Address Line 1 is required'),
      state: Yup.string().required('State is required'),
      pincode: Yup.string()
        .matches(/^[1-9]\d{5}$/, 'Pincode is not valid')
        .required('Pincode is required'),
      mobile: Yup.string()
        .matches(/^[6789]\d{9}$/, 'Mobile No is not valid')
        .required('Mobile is required'),
    }),
  ];
  const currentValidationSchema = validationSchema[activeStep];
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
  function isLastStep() {
    return activeStep === steps.length - 1;
  }
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
                  country: '',
                  state: '',
                  city: '',
                  pincode: '',
                  mobile: '',
                }}
                validationSchema={currentValidationSchema}
                onSubmit={(values, actions) => {
                  handleNext();
                  actions.setTouched({});
                  actions.setSubmitting(false);
                  if (isLastStep()) {
                    setSubmitting(true);
                    const formData = document.getElementById('form__data');
                    formData.innerText = JSON.stringify(values, null, 2);
                    setSubmitting(false);
                  }
                }}
              >
                {({ errors, touched, values, handleChange, handleBlur }) => (
                  <Form id='form'>
                    {getStepContent(activeStep, touched, errors, values, handleChange, handleBlur)}
                    <div className={classes.buttons}>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.backButton}>
                        Back
                      </Button>
                      <Button disabled={isSubmitting} type='submit' variant='contained' color='primary'>
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
