import React, { Fragment } from 'react';
import { Typography, Button } from '@material-ui/core';
import './host-data.styles.css';
export default function HostData() {
  return (
    <Fragment>
      <div className="container">
        <div className="card">
          <Typography style={{ color: '#32507E' }}>testwifi.here</Typography>
          <Typography style={{ marginRight: 74 }}>192.162.02.1</Typography>
        </div>
        <div>
          {/* <Button variant="contained" color="primary" className="stopBtn">
            Stop
  </Button>*/}
        </div>
      </div>
    </Fragment>
  );
}
