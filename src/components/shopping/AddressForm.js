import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { Fragment } from 'react';

const AddressForm = () => {
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [city, setCity] = React.useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id='firstName'
            name='firstName'
            label='First Name*'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='lastName'
            name='lastName'
            label='Last Name*'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='addressLine1'
            name='addressLine1'
            label='Address Line 1*'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='addressLine2'
            name='addressLine2'
            label='Address Line 2'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Country*</InputLabel>
            <Select value={country} onChange={handleCountryChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Delhi'>Delhi</MenuItem>
              <MenuItem value='Uttar Pradesh'>Uttar Pradesh</MenuItem>
              <MenuItem value='Jharkahand'>Jharkhand</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State*</InputLabel>
            <Select value={state} onChange={handleStateChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Delhi'>Delhi</MenuItem>
              <MenuItem value='Uttar Pradesh'>Uttar Pradesh</MenuItem>
              <MenuItem value='Jharkahand'>Jharkhand</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>City*</InputLabel>
            <Select value={city} onChange={handleCityChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value='Delhi'>Delhi</MenuItem>
              <MenuItem value='Uttar Pradesh'>Uttar Pradesh</MenuItem>
              <MenuItem value='Jharkahand'>Jharkhand</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='pincode'
            name='pincode'
            type='number'
            label='Pincode*'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id='mobile'
            name='mobile'
            type='number'
            label='Mobile*'
            fullWidth
            // value={values.firstName}
            // onChange={handleChange}
            // onBlur={handleBlur}
            // helperText={errors.firstName && touched.firstName && errors.firstName}
            // error={errors.firstName && touched.firstName}
            // className={classes.textfieldWidth}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AddressForm;
