import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
  },
  section1: {
    backgroundColor: '#c4c4c46b',
    // height: '444 !important',
    // [theme.breakpoints.only('900')]: {
    //   height: '400px !important',
    // },
    [theme.breakpoints.down('1080')]: {
      height: '290px !important',
    },
    [theme.breakpoints.between('1080', '1363')]: {
      height: '350px !important',
    },
    [theme.breakpoints.between('1363', '1531')]: {
      height: '420px !important',
    },
    [theme.breakpoints.up('1531')]: {
      height: '492px !important',
    },
  },
  section1Customized: {
    height: '237px !important',
    [theme.breakpoints.down('690')]: {
      height: '248px !important',
    },
    [theme.breakpoints.between('889','1080')]: {
      height: '260px !important',
    },
    [theme.breakpoints.between('1080', '1363')]: {
      height: '350px !important',
    },
    [theme.breakpoints.between('1363', '1531')]: {
      height: '420px !important',
    },
    [theme.breakpoints.up('1531')]: {
      height: '492px !important',
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
