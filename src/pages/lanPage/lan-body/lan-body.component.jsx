import React, { useState } from 'react';
import useStyles from './lan-body.styles';
import HostData from '../../../components/host-data/host-data.component';
import { connect } from 'react-redux';
import {
  Divider,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  SELECT_ALL_HOSTS,
  SET_SELECTED_HOSTS,
} from '../../../redux/host/host.actions';

const LanBody = ({
  hostDevices,
  ipAdress,
  onhandleStop,
  scanStop,
  handleHostDevice,
  selectAll,
  hostSelected,
  SELECT_ALL_HOSTS,
  SET_SELECTED_HOSTS,
}) => {
 

  const classes = useStyles();

  //select one or more checkbox
  const handleselecthost = (event) => {
    SET_SELECTED_HOSTS({
      ...hostSelected,
      [event.target.name]: event.target.checked,
    });
  };

  // select all checkbox
  const handleSelectAll = (event) => {
    SELECT_ALL_HOSTS(event.target.checked);
  };

  // kick all the hosts out the network
  const handleKickHosts = (event) => {
    if (!selectAll && hostSelected.length === 0) {
      console.log(
        'please Select them all or select one of them to kick them out'
      );
    }
  };

  return (
    <div id="lanBody" className={classes.container}>
      <div className={classes.top}>
        <Typography className={classes.text} style={{ marginLeft: 20 }}>
          Current IP Address:{ipAdress}
        </Typography>
        <Typography className={classes.text} style={{ marginRight: 20 }}>
          Hosts#:{hostDevices.length}
        </Typography>
      </div>
      <Divider light />
      <div className={classes.table}>
        <div className={classes.select}>
          <FormControlLabel
            control={<Checkbox name="selectAll" onChange={handleSelectAll} />}
            label="Select All"
          />
        </div>
        <div className={classes.lanTitle}>
          <Button
            style={{ color: '#3BB7E3' }}
            size="large"
            onClick={handleKickHosts}
          >
            Kick them out
          </Button>
        </div>
      </div>
      <div className={classes.data}>
        <HostData
          onhandleStop={onhandleStop}
          scanStop={scanStop}
          handleHostDevice={handleHostDevice}
          selectAll={selectAll}
          hostSelected={hostSelected}
          handleselecthost={handleselecthost}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  SELECT_ALL_HOSTS: (value) => dispatch(SELECT_ALL_HOSTS(value)),
  SET_SELECTED_HOSTS: (selectedHosts) =>
    dispatch(SET_SELECTED_HOSTS(selectedHosts)),
});

const mapStateToProps = ({
  host: { hostDevices, hostSelected, selectAll },
}) => ({
  hostDevices,
  selectAll,
  hostSelected,
});

export default connect(mapStateToProps, mapDispatchToProps)(LanBody);
