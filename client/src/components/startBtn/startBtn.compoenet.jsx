import React from 'react';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import useStyles from './startBtn.styles';

const StartBtn = ({ hidden, handleStart }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      endIcon={<Icon>send</Icon>}
      style={{ marginLeft: hidden ? 20 : null }}
      onClick={handleStart}
    >
      {btnName}
    </Button>
  );
};

export default StartBtn;
