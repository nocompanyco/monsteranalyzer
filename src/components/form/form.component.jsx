import React, { Fragment } from 'react';
import { Button, Grid } from '@material-ui/core';
import Selection from '../selection/selection.component';
import StartBtn from '../startBtn/startBtn.compoenet';
import DataTable from '../table/table.component';
import './form.styles.css';
import { connect } from 'react-redux';

const Form = ({
  handleClick,
  hidden,
  handleStart,
  props,
  handleShowSelection,
}) => {
  return (
    <Fragment>
      <Grid container item xs={12} justify="center">
        <Grid
          item
          style={{ position: ' relative', left: '-45px', width: '100%' }}
        >
          <Button
            onClick={handleShowSelection}
            variant="contained"
            className="customizeBtn"
            style={{
              color: '#3BB7E3',
              display: hidden ? null : 'none',
              margin: '0 !important',
            }}
          >
            {'Back to Selection'}
          </Button>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems={hidden ? 'center' : null}
        >
          <Selection hidden={hidden} route={props} />
          <DataTable hidden={hidden} handleClick={handleClick} />
          <StartBtn hidden={hidden} handleStart={handleStart} />
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

const mapStateToProps = ({ network }) => ({
  hidden: network.hidden,
});

export default connect(mapStateToProps)(Form);
