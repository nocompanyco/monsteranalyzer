import React, { useState, useContext, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { AppContext } from '../../App.js';

import useStyles from './selection.styles';

function Selection(props) {
  const [state, setState] = useState({ network: '' });
  const { networkOptions, loading } = useContext(AppContext);
  const { hidden } = props;
  const classes = useStyles();

  const menuItems = () => {
    Object.keys(networkOptions).forEach((devicename) => {
      networkOptions[devicename].forEach((addrobj) => {
        return (
          <MenuItem
            key={devicename + ' ' + addrobj.address}
            value={devicename + ' ' + addrobj.address}
          >
            {devicename + ' ' + addrobj.address}
          </MenuItem>
        );
      });
    });
  };

  const handleChange = (event) => {
    setState({
      ...state,
      network: event.target.value,
    });
  };

  return (
    <div style={{ display: hidden ? 'none' : 'null' }}>
      {loading ? (
        <h1>hey</h1>
      ) : (
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select Your Network
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={state.netwrok}
            onChange={handleChange}
            label="Network"
          >
            {menuItems()}
          </Select>
        </FormControl>
      )}
    </div>
  );
}

export default Selection;
