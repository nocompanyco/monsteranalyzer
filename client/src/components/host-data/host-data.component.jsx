import React, { Fragment } from 'react';
import { Typography, Button } from '@material-ui/core';
import './host-data.styles.css';
export default function HostData({ hostName, hostAddress }) {
  return (
    <Fragment>
      <div className="hostDatacontainer">
        <div className="card">
          <Typography style={{ color: '#32507E', marginRight: 173 }}>
            {hostName}
          </Typography>
          <Typography style={{ marginRight: 31 }}>{hostAddress}</Typography>
        </div>
        <div className="card">
          <Typography style={{ color: '#32507E', marginRight: 173 }}>
            {hostName}
          </Typography>
          <Typography style={{ marginRight: 31 }}>{hostAddress}</Typography>
        </div>
        <div>
          <Button variant="contained" color="primary" className="stopBtn">
            Stop
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
