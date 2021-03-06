import React, { useEffect, useState } from 'react';
import useStyles from './hostDevicePage.styles.jsx';
import {
  Divider,
  Typography,
  CardContent,
  Card,
  IconButton,
} from '@material-ui/core';
import BugReportIcon from '@material-ui/icons/BugReport';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const { ipcRenderer } = window.require('electron');

const HostDevice = (props) => {
  const [hostInfo, setHostInfo] = useState({});
  const [blocked, setBlocked] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (props.location.state !== undefined) {
      sessionStorage.setItem(
        'hostDevice',
        JSON.stringify(props.location.state)
      );
    }
    setHostInfo(JSON.parse(sessionStorage.getItem('hostDevice')));
  }, []);

  // kick the host outside the network
  const handleDeletehost = (ip) => {
   
    const hostIP = ip;
    ipcRenderer
      .invoke('BLOCK-HOST', {
        hostIP: hostIP,
        ournetworkOption: JSON.stringify(
          sessionStorage.getItem('selectedOption')
        ),
      })
      .then((data) => console.log('data from hte electron', data))
      .catch((error) => console.log(error));

    // get the answer from the electron back after execute the blockfunction
    //   ipcRenderer.on('BLOCK-HOST-REPLY', (event, answer) => {
    //     console.log('hey the answer is', answer);
    //     setBlocked(!blocked);
    //   });
  };
  // pong the host and check the traffics
  const handlePinghost = (ip) => {
    console.log('clicked the ping btn');
  };

  console.log('State inside the hostDevice', hostInfo);
  const { name, ip, mac } = hostInfo;
  return (
    <div id="hostdevicePage" className={classes.hostDeviceBody}>
      <Card className={classes.hostCard}>
        <CardContent>
          <div className={classes.header}>
            <Typography variant="h6">
              {name === '_gateway'
                ? 'Gateway'
                : name === '?'
                ? 'Generic'
                : name}
            </Typography>
            <div className={classes.headerLeft}>
              <RadioButtonCheckedIcon
                fontSize="small"
                className={blocked ? classes.offlineIcon : classes.onlineIcon}
              />
              <Typography className={classes.root} variant="caption">
                {blocked ? 'device is offline' : 'device is online'}
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.cardContent}>
            <div className={classes.hostInfo}>
              <Typography variant="subtitle2" color="textSecondary">
                Host Device Network Info:
              </Typography>
              <div className={classes.addressContainer}>
                <div className={classes.adresses}>
                  <Typography>IP Address:</Typography>
                  <Typography className={classes.space}>{ip} </Typography>
                </div>
                <div className={classes.adresses}>
                  <Typography>Mac Address:</Typography>
                  <Typography className={classes.space}> {mac}</Typography>
                </div>
              </div>
            </div>
            <div>
              <IconButton
                size="small"
                onClick={() => handlePinghost(ip)}
                classes={{ root: classes.BlueIcon }}
              >
                <BugReportIcon fontSize="large" />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => handleDeletehost(ip)}
                classes={{ root: blocked ? classes.redIcon : classes.BlueIcon }}
              >
                <DeleteForeverIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HostDevice;
