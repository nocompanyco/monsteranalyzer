import React, { useState } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './selection.styles';

function Selection(props) {
  const { hidden, network, setNetwork } = props;

  const classes = useStyles();

  const networkOptions = JSON.parse(sessionStorage.getItem('networkData'));

  let menuItems = () => {
    let selectOption = [];
    Object.keys(networkOptions).forEach((devicename) => {
      networkOptions[devicename].forEach((addrobj) => {
        let deviceValue = devicename + '-' + addrobj.address;
        return selectOption.push(
          <MenuItem key={deviceValue} value={deviceValue}>
            {deviceValue}
          </MenuItem>
        );
      });
    });
    return selectOption;
  };

  const handleChange = (event) => {
    setNetwork(event.target.value);
  };

  console.log('inside the network', network);

  return (
    <div style={{ display: hidden ? 'none' : 'null' }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select Your Network
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={network}
          defaultValue={'DEFAULT'}
          onChange={handleChange}
          label="Network"
        >
          <MenuItem value="DEFAULT" disabled>
            Choose a Netowrk ...
          </MenuItem>
          {menuItems()}
        </Select>
      </FormControl>
    </div>
  );
}

export default Selection;
