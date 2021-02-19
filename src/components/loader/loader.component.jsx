import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import useStyle from './loader.styles';

const Loader = ({ isLoading }) => {
  const classes = useStyle();
  return (
    <Backdrop className={classes.backdrop} open={isLoading}>
      <CircularProgress
        className={classes.CircularProgress}
        size={60}
        thickness={2}
      />
    </Backdrop>
  );
};

export default Loader;
