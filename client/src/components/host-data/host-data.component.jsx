import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';
import './host-data.styles.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CardLan from '../cardLan/cardLan.component';

export default function HostData({ data, onhandleStop, scanStop,handleHostDevice }) {
  const matches = useMediaQuery('(max-width:1080px)');

  return (
    <Fragment>
      <div className="hostDatacontainer">
        {data.map((device, index) => (
          <CardLan key={index} hostAddress={device.ip} hostName={device.name} handleHostDevice={handleHostDevice.bind(this,index,device)}/>
        ))}

        <div className="marginBtn">
          <Button
            variant="contained"
            color="primary"
            className={matches ? 'responsiveBtn' : 'stopBtn'}
            onClick={onhandleStop}
          >
            {scanStop ? 'Start' : 'Stop'}
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
