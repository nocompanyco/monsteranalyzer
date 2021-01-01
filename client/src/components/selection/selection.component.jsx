import React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Styles from './selection.styles';

class Selection extends React.Component {
  state = { network: '' };

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  render() {
    const { classes, hidden } = this.props;
    return (
      <div style={{ display: hidden ? 'none' : 'null' }}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Select Your Network
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={this.state.netwrok}
            onChange={this.handleChange}
            label="Network"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'ten'}>Ten</MenuItem>
            <MenuItem value={'twenty'}>Twenty</MenuItem>
            <MenuItem value={'thirty'}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}

export default withStyles(Styles)(Selection);
