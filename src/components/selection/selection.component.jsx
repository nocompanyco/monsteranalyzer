import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './selection.styles';
import { connect } from 'react-redux';
import { setNetwork } from '../../redux/selectedNetwork/network.actions';

function Selection(props) {
  const { hidden, network, setNetwork, networkInterface } = props;

  const classes = useStyles();

  let networkOptions = networkInterface;

  let menuItems = () => {
    let selectOption = [];
    if (Object.keys(networkOptions).length === 0)
      return console.log('error with the networkOptions');
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
    console.log('selected option', selectOption);
    return selectOption;
  };

  console.log('menu items', menuItems);

  const handleChange = (event) => {
    setNetwork(event.target.value);
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
const mapStateToProps = (state) => ({
  network: state.network.selectedNetwork,
  networkInterface: state.networkInterface.networkInterface,
});

const mapDispatchToProps = (dispatch) => ({
  setNetwork: (network) => dispatch(setNetwork(network)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
