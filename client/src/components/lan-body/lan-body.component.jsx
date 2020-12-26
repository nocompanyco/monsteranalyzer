import React from 'react';
import useStyles from './lan-body.styles';
import { Divider, Typography,Button } from '@material-ui/core';
import HostData from '../host-data/host-data.component';

export default function LanBody() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Typography className={classes.text} style={{ marginLeft: 20 }}>
          Current IP Address:196.10.10.102
        </Typography>
        <Typography className={classes.text} style={{ marginRight: 20 }}>
          Hosts#:30
        </Typography>
      </div>
      <Divider light />
      <div className={classes.table}>
        <Typography style={{ color: '#32507E', fontSize: 30 }}>
          Host Name
        </Typography>
        <Typography style={{ fontSize: 30 }}>Host IP Address</Typography>
      </div>
      <div className={classes.data}>
        <HostData />
        
      </div>
      
    </div>
  );
}
