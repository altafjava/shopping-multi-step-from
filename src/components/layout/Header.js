import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const styles = makeStyles(() => ({
  appBar: {
    position: 'relative',
  },
  link: {
    color: 'inherit',
    '&:hover': {
      color: '#d9ddf2',
    },
  },
}));

const Header = () => {
  const classes = styles();
  return (
    <AppBar position='absolute' className={classes.appBar}>
      <Toolbar>
        <a href='https://javaaltaf.blogspot.com/' target='_blank' rel='noopener noreferrer' className={classes.link}>
          <Typography variant='h6' color='inherit'>
            AltafJava
          </Typography>
        </a>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
