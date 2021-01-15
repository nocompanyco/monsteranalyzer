import React, { useState, useContext, useEffect } from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { AppContext } from '../../App.js';

import useStyles from './selection.styles';
import { compose } from 'async';

function Selection(props) {
  const [state, setState] = useState({ network: '' });
  const { networkOptions } = useContext(AppContext);
  const { net } = networkOptions;
  console.log('netowrk from app inside the selection', net);
  useEffect(()=>{
    console.log('use the effect inside the selection')
    Object.keys(net).forEach((key) => console.log(key));
  })
  const { hidden } = props;
  const classes = useStyles();

  const handleChange = (event) => {
    const { name } = event.target;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div style={{ display: hidden ? 'none' : 'null' }}>
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
          <MenuItem value={'ten'}>Ten</MenuItem>
    
        </Select>
      </FormControl>
    </div>
  );
}

export default Selection;
