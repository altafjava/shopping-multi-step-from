import { CssBaseline, makeStyles, Paper, ThemeProvider } from '@material-ui/core';
import React from 'react';
import theme from '../../ui/Theme';
import Header from './Header';

const styles = makeStyles(() => ({
  root: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      padding: theme.spacing(4),
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
      <div className={classes.root}>
        <Paper elevation={1} className={classes.paper}>
          {props.children}
        </Paper>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
