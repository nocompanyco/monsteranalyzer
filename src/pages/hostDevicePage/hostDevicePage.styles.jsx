import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  hostDeviceBody: {
    position: 'relative',
    top: 114,
    left: '249px',
    width: 'min-content',
  },

  hostCard: {
    width: 500,
    backgroundColor: '#dddfd4ab !important',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1em',
  },

  headerLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  hostInfo: {
    marginTop: '1em',
  },

  root: {
    color: 'rgba(128, 128, 128, 0.486)',
  },

  onlineIcon: {
    fontSize: '0.8rem',
    color: '#5ce65c',
  },
  offlineIcon: {
    color: 'gray',
    fontSize: '0.8rem',
  },
  adresses: {
    display: 'flex',
  },
  addressContainer: {
    marginTop: '8px',
  },
  space: {
    marginLeft: '5px',
  },
  BlueIcon: {
    color: '#3BB7E3 !important',
  },
  redIcon: {
    color: 'red',
  },
});

export default useStyles;
