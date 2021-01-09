import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar: {
    [theme.breakpoints.down('900')]: {
      width: 'full-content',
      margin: 'unset',
      padding: 'unset',
    },
  },

  icon: {
    [theme.breakpoints.down('910')]: {
      fontSize: 78,
    },
    fontSize: 122,
    color: '#7C7C7D',
  },
  backIcon: {
    [theme.breakpoints.down('910')]: {
      fontSize: 78,
      paddingLeft: '20px !important',
    },
    fontSize: 122,
    color: '#7C7C7D',
    paddingLeft: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&.active': {
      color: '#3BB7E3',
    },
    [theme.breakpoints.down('910')]: {
      marginRight: 16,
    },
  },
  toolbar: {
    [theme.breakpoints.down('910')]: {
      minHeight: 129,
    },
    minHeight: 128,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#DDDFD4',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('910')]: {
      width: 117,
      height: 120,
    },
  },
  backText: {
    [theme.breakpoints.down('910')]: {
      fontSize: 20,
      marginRight: 20,
    },
    marginRight: 35,
    color: '#7C7C7D',
  },
  lanText: {
    [theme.breakpoints.down('910')]: {
      fontSize: 20,
    },
  },
  infoText: {
    [theme.breakpoints.down('910')]: {
      fontSize: 20,
      marginRight: 12,
    },
  },
  aboutText: {
    [theme.breakpoints.down('910')]: {
      fontSize: 20,
      marginRight: 8,
    },
  },
}));

export default useStyles;
