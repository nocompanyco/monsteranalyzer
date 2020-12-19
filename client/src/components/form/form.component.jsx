import React, { Fragment } from 'react';
import Selection from '../selection/selection.component';
import StartBtn from '../startBtn/startBtn.compoenet';
import { Grid, Link } from '@material-ui/core';

const Form = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <Fragment>
      <Grid container item xs={12} justify="center">
        <Grid container item justify="center">
          <Selection />
          <StartBtn />
        </Grid>
        <Grid item container justify="center">
          <Link
            href="#"
            onClick={preventDefault}
            variant="body2"
            style={{
              color: '#3BB7E3',
              marginLeft: 100,
            }}
          >
            {'Custom Settings'}
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Form;
