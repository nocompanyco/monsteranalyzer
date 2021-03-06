import React from 'react';
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
const { ipcRenderer } = window.require('electron');

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

  // check if the user selected the selection or inserted the data
  const selected = sessionStorage.getItem('selected');

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
    if (!selectAll && Object.keys(hostSelected).length === 0) {
      console.log(
        'please Select them all or select one of them to kick them out'
      );
    }
    // if the user select them all so take one after one and block them
    if (selectAll) {
      console.log(hostDevices);
      hostDevices.map((host) => {
        return BlockingHosts(host.ip);
      });
    }

    // if selected at least one check if its not empty, take the true values and grap the keys of the object which are the ips and then block them one after one
    if (Object.keys(hostSelected).length !== 0) {
      const result = Object.keys(hostSelected).reduce((o, key) => {
        hostSelected[key] === true && (o[key] = hostSelected[key]);
        return o;
      }, {});

      Object.keys(result).map((hostip) => {
        return BlockingHosts(hostip);
      });
    }

    event.preventDefault();
  };

  const BlockingHosts = (hostip) => {
    if (selected) {
      ipcRenderer
        .invoke('BLOCK-HOST', {
          hostIP: hostip,
          ournetworkOption: JSON.stringify(
            sessionStorage.getItem('selectedOption')
          ),
        })
        .then((data) => console.log('data from the electron', data))
        .catch((error) => console.log(error));
    }

    ipcRenderer
      .invoke('BLOCK-HOST', {
        hostIP: hostip,
        ournetworkOption: JSON.stringify(
          sessionStorage.getItem('InsertedOption')
        ),
        gateway: sessionStorage.getItem('gatewayIP'),
      })
      .then((data) => console.log('data from the electron', data))
      .catch((error) => console.log(error));
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
