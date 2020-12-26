import React, { Fragment } from 'react';
import { Button, Grid } from '@material-ui/core';
import Selection from '../selection/selection.component';
import StartBtn from '../startBtn/startBtn.compoenet';
import DataTable from '../table/table.component';
import './form.styles.css';

const Form = ({ handleClick, hidden, networkSetting }) => {
  return (
    <Fragment>
      <Grid container item xs={12} justify="center">
        <Grid
          container
          item
          justify="center"
          alignItems={hidden ? 'center' : null}
        >
          <Selection hidden={hidden} />
          <DataTable hidden={hidden} handleClick={handleClick} networkSetting={networkSetting} />
          <StartBtn hidden={hidden} />
        </Grid>
        <Grid item container justify="center">
          <Button
            onClick={handleClick}
            variant="contained"
            className="customizeBtn"
            style={{ color: '#3BB7E3', display: hidden ? 'none' : null }}
          >
            {'Customize Settings'}
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Form;
