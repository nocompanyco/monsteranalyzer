import React, { Fragment, useState } from 'react';
import Selection from '../selection/selection.component';
import StartBtn from '../startBtn/startBtn.compoenet';
import { Button, Grid, Link } from '@material-ui/core';
import SettingPage from '../../pages/settingPage/settingPage.component';

const Form = ({ handleClick , hidden}) => {
  return (
    <Fragment>
      <Grid container item xs={12} justify="center">
        <Grid container item justify="center">
          <Selection hidden={hidden}/>
          <StartBtn />
        </Grid>
        <Grid item container justify="center">
          <Button
            onClick={handleClick}
            variant="contained"
            style={{
              color: '#3BB7E3',
              marginLeft: 100,
            }}
          >
            {'Custom Settings'}
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Form;
