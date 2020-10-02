import { CssBaseline, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../../ui/Theme';
import Header from './Header';

const styles = makeStyles(() => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(4) * 4)]: {
      width: 1200,
      padding: theme.spacing(2),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));
const Layout = (props) => {
  const classes = styles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Paper elevation={1} className={classes.paper}>
        {props.children}
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
