import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { COUNTRIES_JSON_DATA as countries } from '../../resources/Countries';

const AddressForm = () => {
  const [states, setStates] = React.useState([]);
  const [cities, setCities] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedState, setSelectedState] = React.useState('');
  const [selectedCity, setSelectedCity] = React.useState('');

  useEffect(() => {
    changeCountry('India');
  }, []);
  function changeCountry(countryName) {
    setSelectedState('');
    setSelectedCity('');
    setSelectedCountry(countryName);
    setStates(countries.find((country) => country.CountryName === countryName).States);
  }
  const handleCountryChange = (event) => {
    changeCountry(event.target.value);
  };
  const handleStateChange = (event) => {
    setSelectedCity('');
    const stateName = event.target.value;
    setSelectedState(stateName);
    setCities(states.find((state) => state.StateName === stateName).Cities);
  };
  const handleCityChange = (event) => {
    const cityName = event.target.value;
    setSelectedCity(cityName);
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
            <Select value={selectedCountry} onChange={handleCountryChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {countries.map((country, key) => {
                return (
                  <MenuItem key={key} value={country.CountryName}>
                    {country.CountryName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>State*</InputLabel>
            <Select value={selectedState} onChange={handleStateChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {states.map((state, key) => {
                return (
                  <MenuItem key={key} value={state.StateName}>
                    {state.StateName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>City</InputLabel>
            <Select value={selectedCity} onChange={handleCityChange}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              {cities.map((city, key) => {
                return (
                  <MenuItem key={key} value={city}>
                    {city}
                  </MenuItem>
                );
              })}
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
