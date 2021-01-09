import React, { Fragment } from 'react';
import { Typography, Button } from '@material-ui/core';
import './host-data.styles.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
export default function HostData({ hostName, hostAddress }) {
  const matches = useMediaQuery('(max-width:910px)');
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
          <Button variant="contained" color="primary" className={matches ? 'responsiveBtn' : 'stopBtn'}>
            Stop
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
