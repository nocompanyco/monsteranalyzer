import React from 'react';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import useStyles from './startBtn.styles';

const StartBtn = ({ btnName }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      size="large"
      endIcon={btnName === 'START' ? <Icon>send</Icon> : null}
    >
      {btnName}
    </Button>
  );
};

export default StartBtn;
