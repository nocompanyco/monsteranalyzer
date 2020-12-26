import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from './table.styles';
import SettingIconBtn from '../setting-icon-btn/setting-icon-btn';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F5F5F5',
    color: '#3BB7E3',
    fontSize: 15,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, data) {
  return { name, data };
}

const rows = [
  createData('Network Interface', 'wlan0'),
  createData('Filter', 'tcp or udp'),
  createData('Gateway', '192.168.1.1'),
];

export default function DataTable({ hidden, handleClick }) {
  const classes = useStyles();

  return (
    <TableContainer
      style={{ display: hidden ? null : 'none' }}
      component={Paper}
      className={classes.container}
    >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Your Customized Network Setting</StyledTableCell>
            <StyledTableCell align="right">
              <SettingIconBtn handleClick={handleClick} />
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.data}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
