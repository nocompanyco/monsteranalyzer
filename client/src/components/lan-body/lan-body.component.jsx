import React from 'react';
import useStyles from './lan-body.styles';
import { Divider, Typography } from '@material-ui/core';
import HostData from '../host-data/host-data.component';

export default function LanBody({ data, ipAdress }) {
  const classes = useStyles();

  return (
    <div id="lanBody" className={classes.container}>
      <div className={classes.top}>
        <Typography className={classes.text} style={{ marginLeft: 20 }}>
          Current IP Address:{ipAdress}
        </Typography>
        <Typography className={classes.text} style={{ marginRight: 20 }}>
          Hosts#:{data.length}
        </Typography>
      </div>
      <Divider light />
      <div className={classes.table}>
        <Typography
          style={{ color: '#32507E', fontSize: 30 }}
          className={classes.ipText}
        >
          Host Name
        </Typography>
        <Typography style={{ fontSize: 30 }} className={classes.ipText}>
          Host IP Address
        </Typography>
      </div>
      <div className={classes.data}>
        <HostData data={data} />
      </div>
    </div>
  );
}
