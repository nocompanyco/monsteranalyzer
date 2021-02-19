import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '89%',
    height: 'fit-content',
    background: '#FFFFFF',
    alignSelf: 'center',
    marginTop: 91,
    marginLeft: 29,
    overflowY: 'auto',
    boxShadow:
      '0px 9px 18px rgba(0, 0, 0, 0.18), 0px 5.5px 5px rgba(0, 0, 0, 0.24)',
    [theme.breakpoints.down('1080')]: {
      width: ' 85%',
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
    fontSize: 25,
    [theme.breakpoints.down('1080')]: {
      fontSize: '18px !important',
    },
  },
  ipText: {
    color: 'rgb(0 0 0 / 58%)',
    [theme.breakpoints.down('1080')]: {
      fontSize: '25px !important',
    },
  },
  table: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    [theme.breakpoints.down('1080')]: {
      justifyContent: 'space-around !important',
    },
  },
  lanTitle: {
    width: 200,
    textAlign: 'center',
  },
}));

export default useStyles;
