import React, { Fragment, useState } from 'react';
import { Button, FormControlLabel, Checkbox } from '@material-ui/core';
import './host-data.styles.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CardLan from '../cardLan/cardLan.component';

export default function HostData({
  data,
  onhandleStop,
  scanStop,
  handleHostDevice,
  selectAll,
  hostSelected,
  handleselecthost
}) {
  const matches = useMediaQuery('(max-width:1080px)');
 
  console.log('the selection', hostSelected);
  return (
    <Fragment>
      <div className="hostDatacontainer">
        {data.map((device, index) => (
          <div key={device.ip} className="selectContainer">
            <FormControlLabel
              key={device.id}
              control={
                <Checkbox
                  name={device.ip}
                  checked={selectAll ? true : hostSelected[device.ip] || false}
                  onChange={handleselecthost}
                />
              }
              label=""
            />
            <CardLan
              key={index}
              hostAddress={device.ip}
              hostName={device.name}
              handleHostDevice={handleHostDevice.bind(this, index, device)}
            />
          </div>
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
