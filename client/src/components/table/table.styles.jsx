import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  container: {
    width: 600,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataCell:{
    color:'#32507E'
  }
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#F5F5F5',
    color: '#3BB7E3',
    fontSize: 20,
  },
  body: {
    fontSize: 14,
    fontWeight:'bold'
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export { useStyles, StyledTableRow, StyledTableCell };
