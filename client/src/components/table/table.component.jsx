import React from 'react';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { useStyles, StyledTableRow, StyledTableCell } from './table.styles';
import SettingIconBtn from '../setting-icon-btn/setting-icon-btn';

export default function DataTable({ hidden, handleClick, networkSetting }) {
  const classes = useStyles();


  return (
    <TableContainer
      style={{ display: hidden ? null : 'none' }}
      component={Paper}
      className={classes.container}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Your Customized Network Setting</StyledTableCell>
            <StyledTableCell align="right">
              <SettingIconBtn handleClick={handleClick} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {networkSetting.map((item) => (
            <StyledTableRow key={item.name}>
              <StyledTableCell component="th" scope="row">
                {item.name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.data}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
