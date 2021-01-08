import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  section1: {
    backgroundColor: '#c4c4c46b',
    height: 444,
    [theme.breakpoints.down('md')]: {
    height: 269,
    },
  },
  section2: {
    height: 'fit-content',
  },
  logo: {
    width: 256,
    height: 256,
  },
  form: {
    marginLeft: 248,
  },
  videoContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  video: {
    position: 'absolute',
    width: 'auto',
    height: '100%',
    top: 0,
    left: 0,
  },
}));

export default useStyles;
