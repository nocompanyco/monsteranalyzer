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

const LanBody = ({
  hostDevices,
  ipAdress,
  onhandleStop,
  scanStop,
  handleHostDevice,
}) => {
  const [selectAll, setSelectAll] = useState(false);
  const [hostSelected, setHostselected] = useState({}); //checkbox selection

  const classes = useStyles();

  //select one or more checkbox
  const handleselecthost = (event) => {
    setHostselected({
      ...hostSelected,
      [event.target.name]: event.target.checked,
    });
  };

  // select all checkbox
  const handleSelectAll = (event) => {
    console.log('selected all');
    setSelectAll(event.target.checked);
  };

  // kick all the hosts out the network
  const handleKickHosts = (event) => {
    if (!selectAll && hostSelected.length === 0) {
      console.log(
        'please Select them all or select one of them to kick them out'
      );
    }
  };

  console.log(selectAll);
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

const mapStateToProps = ({ host: { hostDevices } }) => ({
  hostDevices,
});

export default connect(mapStateToProps)(LanBody);
