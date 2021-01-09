import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    width: 1350,
    height: 700,
    left: 255,
    top: 216,
    background: '#FFFFFF',
    boxShadow:
      '0px 9px 18px rgba(0, 0, 0, 0.18), 0px 5.5px 5px rgba(0, 0, 0, 0.24)',
    [theme.breakpoints.down('910')]: {
      width: 770,
      height: 433,
      left: 62,
    },
  },
  top: {
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#A9AAAC',
    fontSize: 33,
    [theme.breakpoints.down('910')]: {
      fontSize: '20px !important',
    },
  },
  ipText: {
    [theme.breakpoints.down('910')]: {
      fontSize: '25px !important',
    },
  },
  table: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    [theme.breakpoints.down('910')]: {
      justifyContent: 'space-around !important',
    },
  },
}));

export default useStyles;
