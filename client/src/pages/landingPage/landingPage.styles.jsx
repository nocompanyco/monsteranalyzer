import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  section1: {
    backgroundColor: '#C4C4C4',
    height: 444,
  },
  section2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'flex-end',
    height: 482,
  },
  logo: {
    width: 256,
    height: 256,
  },
  form: {
    marginLeft: 248,
  },
}));

export default useStyles;
